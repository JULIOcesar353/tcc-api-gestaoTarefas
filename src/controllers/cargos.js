const db = require('../dataBase/connection.js');

module.exports = {
    //------------------------LISTAR CARGOS-----------------------------------
    async listarCargos(request, response) {
        try {
            const sql = `SELECT 
                crg_id, crg_nome 
            FROM CARGOS;`;

            const [cargos] = await db.query(sql);

            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Listagem de Cargos realizada',
                    items: cargos.length,
                    dados: cargos
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao listar Cargos ${error.mensage}`,
                    dados: null
                }
            );
        }
    },
    //-----------------------CADASTRAR CARGOS---------------------------------
    async cadastrarCargos(request, response) {
        try {
            const {cargo} = request.body;

            const sql = `INSERT INTO CARGOS 
                (crg_nome) 
            VALUES 
                (?);`;

            const values = [cargo];
            const [result] = await db.query(sql, values);
            
            const dados = {
                id: result.insertId,
                cargo
            };

            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Cadastro de cargos realizada!',
                    dados: dados
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao cadastrar Cargos.`,
                    dados: error.message
                }
            );
        }
    },
    //-------------------------EDITAR CARGOS----------------------------------
    async editarCargos(request, response) {
        try {
            const {cargo} = request.body;

            const { id } = request.params;

            const sql = `
                UPDATE CARGOS SET
                    crg_nome = ?
                WHERE 
                    crg_id = ?
            `;

            const values = [cargo, id];

            const [result] = await db.query(sql, values);

            if (result.affectedRows === 0) {
                return response.status(404).json({
                    sucesso: false,
                    mensagem: `Cargo ${id} não encontrado!`,
                    dados: null
                });
            }

            const dados = {
                id,
                cargo
            };

            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: `Cargo ${id} atualizado!`,
                    dados
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao atualizar Cargos.`,
                    dados: error.message
                }
            );
        }
    },
    //-------------------------EXCLUIR CARGOS---------------------------------
    async apagarCargos(request, response) {
        try {
            
            const { id } = request.params;

            const sql = `
                DELETE FROM cargos
                WHERE crg_id = ?
            `;

            const values = [id];
            const [result] = await db.query(sql, [values]);
        
            if (result.affectedRows === 0) {
            return response.status(400).json({
                sucesso: false,
                mensagem: `Cargo não encontrado ou está sendo usado.`,
                dados: error.message
            });
        }
            
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Exclusão de cargos realizada!',
                    dados: null
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao remover Cargos ${error.mensage}`,
                    dados: null
                }
            );
        }
    },
}


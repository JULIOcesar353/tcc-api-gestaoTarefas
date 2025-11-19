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
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Atualização de cargos realizada!',
                    dados: null
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao atualizar Cargos ${error.mensage}`,
                    dados: null
                }
            );
        }
    },
    //-------------------------EXCLUIR CARGOS---------------------------------
    async apagarCargos(request, response) {
        try {
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


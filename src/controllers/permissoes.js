const db = require('../dataBase/connection');

module.exports = {
    async listarPermissoes(request, response) {
        try {

            const sql = `
            SELECT prm_id, prm_nome FROM PERMISSOES;
            `;
            
            const [permissoes] = await db.query(sql);

            return response.status(200).json({
                sucesso: true,
                menssagem: 'Lista de Permissões de usuários obtida com sucesso',
                itens: permissoes.length,
                dados: permissoes
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                menssagem: `Erro ao listar Permissões: ${error.message}`,
                dados: null
            });
        }
    },

    async cadastrarPermissoes(request, response) {
        try {
            const {permissao} = request.body;

            const sql = `INSERT INTO PERMISSOES 
                (prm_nome) 
            VALUES
                (?);`;

            const values = [permissao];

            const [result] = await db.query(sql, values);

            const dados = {
                id: result.insertId,
                permissao
            };

            return response.status(200).json({
                sucesso: true,
                menssagem: 'Permissoes de usuários realizado com sucesso',
                dados: dados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                menssagem: `Erro ao cadastrar permissoes.`,
                dados: error.menssage
            });
        }
    },

    async editarPermissoes(request, response) {
        try {
            
            const {permissao} = request.body;

            const { id } = request.params;

            const sql = `
                UPDATE permissoes SET
                    prm_nome = ?
                WHERE 
                    prm_id = ?
            `;

            const values = [permissao, id];

            const [result] = await db.query(sql, values);

            if (result.affectedRows === 0) {
                return response.status(404).json({
                    sucesso: false,
                    mensagem: `Permissao ${id} não encontrado!`,
                    dados: null
                });
            }

            const dados = {
                id,
                permissao
            };


            return response.status(200).json({
                sucesso: true,
                menssagem: 'Atualização de permissoes realizada com sucesso',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                menssagem: `Erro ao atualizar permissoes: ${error.message}`,
                dados: null
            });
        }
    },

    async apagarPermissoes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                menssagem: 'Exclusão de permissoes realizada com sucesso',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                menssagem: `Erro ao remover permissoes : ${error.message}`,
                dados: null
            });
        }
    }
};

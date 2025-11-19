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

            // const { nome, id } = request.body;

            // // introdição SQL
            // const sql = `INSERT INTO PERMISSOES (prm_nome) 
            // VALUES
            // (?,);`;

            // //definição dos dados a serem inseridos em array
            // const values = [nome, id];

            // //execução da instrução sql passandoo os parâmetros
            // const [result] = await db.query(sql, values);

            // //identificar o ID do novo registro
            // const dados = {
            //     id: result.insertId,
            //     nome,
            //     id
            // };

            return response.status(200).json({
                sucesso: true,
                menssagem: 'Permissoes de usuários realizado com sucesso',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                menssagem: `Erro ao cadastrar permissoes: ${error.message}`,
                dados: null
            });
        }
    },

    async editarPermissoes(request, response) {
        try {
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

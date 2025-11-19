const db = require('../dataBase/connection');

module.exports = {
    //------------ Listar Setores -------------
    async listarSetores(request, response) {
        try {
            //instruções SQL
            const sql = `SELECT 
            set_id, set_nome 
        FROM SETORES;`;

            //executa instruções SQL e armazena o resultado na variavel setores
            const [setores] = await db.query(sql);

            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Lista de setores obtida com sucesso',
                    items: setores.length,
                    dados: setores
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao listar setores: ${error.message} `,
                    dados: null
                }
            );
        }
    },

    // ------------ Cadastrar Setores -------------
    async cadastrarSetores(request, response) {
        try {
            const {setor} = request.body;

            const sql = `INSERT INTO SETORES 
                (set_nome) 
            VALUES
                (?);`;

            const values = [setor];
            const [result] = await db.query(sql, values);

            const dados = {
                id: result.insertId,
                setor
            };

            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Cadastro de setores realizado com sucesso',
                    dados: dados
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao cadastrar setores.`,
                    dados: error.message
                }
            );
        }
    },

    // ------------ Editar Setores -------------
    async editarSetores(request, response) {
        try {
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Atualização de setores realizado com sucesso',
                    dados: null
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao editar setores: ${error.message} `,
                    dados: null
                }
            );
        }
    },

    // ------------ Apagar Setores -------------
    async apagarSetores(request, response) {
        try {
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Exclusão de setores realizado com sucesso',
                    dados: null
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao remover setores: ${error.message} `,
                    dados: null
                }
            );
        }
    },
}
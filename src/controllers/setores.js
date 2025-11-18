const db = require('../dataBase/connection');

module.exports = {
//------------ Listar Setores -------------
async listarSetores(request, response) {
    try{
        const sql = `SELECT 
            set_id, set_nome 
        FROM SETORES;`;

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
    try{
        return response.status(200).json(
            {
                sucesso: true,
                mensagem: 'Cadastro de setores realizado com sucesso',
                dados: null
            }
        );
    } catch (error) {
        return response.status(500).json(
            {
                sucesso: false,
                mensagem: `Erro ao cadastrar setores: ${error.message} `,
                dados: null
            }
        );
    }
    },

    // ------------ Editar Setores -------------
    async editarSetores(request, response) {
    try{
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
    try{
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
const db = require('../dataBase/connection');

module.exports = {
async listarSetores(request, response) {
    try{
        return response.status(200).json(
            {
                sucesso: true,
                mensagem: 'Lista de setores obtida com sucesso',
                dados: null
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
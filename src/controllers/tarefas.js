const db = require('../dataBase/connection');

module.exports = {
async listarTarefas(request, response) {
    try{
        return response.status(200).json(
            {
                sucesso: true,
                mensagem: 'Lista de tarefas obtida com sucesso',
                dados: null
            }
        );
    } catch (error) {
        return response.status(500).json(
            {
                sucesso: false,
                mensagem: `Erro ao listar tarefas: ${error.message} `,
                dados: null
            }
        );
    }
    },

    async cadastrarTarefas(request, response) {
    try{
        return response.status(200).json(
            {
                sucesso: true,
                mensagem: 'Cadastro de tarefas realizado com sucesso',
                dados: null
            }
        );
    } catch (error) {
        return response.status(500).json(
            {
                sucesso: false,
                mensagem: `Erro ao cadastrar tarefas: ${error.message} `,
                dados: null
            }
        );
    }
    },

    async editarTarefas(request, response) {
    try{
        return response.status(200).json(
            {
                sucesso: true,
                mensagem: 'Atualização de tarefas realizada com sucesso',
                dados: null
            }
        );
    } catch (error) {
        return response.status(500).json(
            {
                sucesso: false,
                mensagem: `Erro ao editar tarefas: ${error.message} `,
                dados: null
            }
        );
    }
    },

    async apagarTarefas(request, response) {
    try{
        return response.status(200).json(
            {
                sucesso: true,
                mensagem: 'Exclusão de tarefas realizada com sucesso',
                dados: null
            }
        );
    } catch (error) {
        return response.status(500).json(
            {
                sucesso: false,
                mensagem: `Erro ao remover tarefas: ${error.message} `,
                dados: null
            }
        );
    }
    },
}
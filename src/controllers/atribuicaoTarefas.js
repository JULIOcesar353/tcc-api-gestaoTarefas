const db = require('../dataBase/connection');

module.exports = {
    async listaratribicaoTarefas(request, response) {
        try {
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Lista de atribuição de tarefas feita com sucesso',
                    dados: null
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `erro ao listar atribuição de tarefas: ${error.message} `,
                    dados: null
                }
            );
        }
    },
    async cadastrarlistaratribicaoTarefas(request, response) {
        try {
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'cadastro de tarefas feita com sucesso',
                    dados: null
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `erro ao cadastrar tarefas : ${error.message} `,
                    dados: null
                }
            );
        }
    },
    async editarlistaratribicaoTarefas(request, response) {
        try {
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'editar atribuição de tarefas feita com sucesso',
                    dados: null
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `erro ao editar atribuição de tarefas: ${error.message} `,
                    dados: null
                }
            );
        }
    },
    async apagaratribuicaoTarefas(request, response) {
        try {
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'apagar atribuição de tarefas feito com sucesso',
                    dados: null
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `erro ao apagar atribuição de tarefas: ${error.message} `,
                    dados: null
                }
            );
        }
    },
}
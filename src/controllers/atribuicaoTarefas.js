const db = require('../dataBase/connection');

module.exports = {
    async listaratribicaoTarefas (request, response) {
        try {
            return response.status(200).json (
                {
                    sucesso: true,
                    mensagem: 'Lista de atribuição de tarefas feita com sucesso',
                    dados: null
                }
            );
        }catch (error) {
             return response.status(500).json (
                {
                    sucesso: false,
                    mensagem: `erro ao listar atribuição de tarefas: ${error.message} `,
                    dados: null
        }
             );

    }
},
 async cadastraratribicaoTarefas (request, response) {
        try {
            return response.status(200).json (
                {
                    sucesso: true,
                    mensagem: 'Cadastro de tarefas feita com sucesso',
                    dados: null
                }
            );
        }catch (error) {
             return response.status(500).json (
                {
                    sucesso: false,
                    mensagem: `erro ao cadastrar tarefas : ${error.message} `,
                    dados: null
        }
             );

    }
},
    async editaratribicaoTarefas  (request, response) {
        try {
            return response.status(200).json (
                {
                    sucesso: true,
                    mensagem: 'Editar atribuição de tarefas feita com sucesso',
                    dados: null
                }
            );
        }catch (error) {
             return response.status(500).json (
                {
                    sucesso: false,
                    mensagem: `erro ao editar atribuição de tarefas: ${error.message} `,
                    dados: null
        }
             );

    }
},
    async apagaratribuicaoTarefas (request, response) {
        try {
            return response.status(200).json (
                {
                    sucesso: true,
                    mensagem: 'Apagar atribuição de tarefas feito com sucesso',
                    dados: null
                }
            );
        }catch (error) {
             return response.status(500).json (
                {
                    sucesso: false,
                    mensagem: `erro ao apagar atribuição de tarefas: ${error.message} `,
                    dados: null
                }
             );

           }
        },
}
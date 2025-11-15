const db = require('../dataBase/connection.js');

module.exports = {
    //----------------------LISTAR FUNCIONÁRIOS--------------------------------
    async listarFuncionarios(request, response) {
        try {
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Lista de Funcionários obtida com sucesso',
                    dados: null
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao listar Funcionários ${error.mensage}`,
                    dados: null
                }
            );
        }
    },
    //---------------------CADASTRAR FUNCIONÁRIOS------------------------------
    async cadastrarFuncionarios(request, response) {
        try {
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Cadastro de funcionários realizada!',
                    dados: null
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao cadastrar Funcionários ${error.mensage}`,
                    dados: null
                }
            );
        }
    },
    //-----------------------EDITAR FUNCIONÁRIOS-------------------------------
    async editarFuncionarios(request, response) {
        try {
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Atualização de funcionários realizada!',
                    dados: null
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao atualizar Funcionários ${error.mensage}`,
                    dados: null
                }
            );
        }
    },
    //-----------------------EXCLUIR FUNCIONÁRIOS------------------------------
    async apagarFuncionarios(request, response) {
        try {
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Exclusão de funcionários realizada!',
                    dados: null
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao remover Funcionários ${error.mensage}`,
                    dados: null
                }
            );
        }
    },
}
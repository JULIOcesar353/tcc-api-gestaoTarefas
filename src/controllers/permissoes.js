const db = require('../dataBase/connection');

module.exports = {
    async listarpermissoes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                menssagem: 'Lista de Permissões de usuários obtida com sucesso',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                menssagem: `Erro ao listar Permissões: ${error.message}`,
                dados: null
            });
        }
    },

    async cadastrarUsuarios(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                menssagem: 'permissoes de usuários realizado com sucesso',
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

    async editarUsuarios(request, response) {
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

    async apagarUsuarios(request, response) {
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

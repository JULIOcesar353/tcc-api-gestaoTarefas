const db = requiere('../dataBase/connection.js');

module.exports = {
    //------------------------LISTAR CARGOS-----------------------------------
    async listarCargos(request, response) {
        try {
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Listagem de Cargos realizada',
                    dados: null
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao listar Cargos ${error.mensage}`,
                    dados: null
                }
            );
        }
    },
    //---------------------CADASTRAR CARGOS------------------------------
    async cadastrarCargos(request, response) {
        try {
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Cadastro de cargos realizada!',
                    dados: null
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao cadastrar Cargos ${error.mensage}`,
                    dados: null
                }
            );
        }
    },
    //----------------------EDITAR CARGOS--------------------------------
    async editarCargos(request, response) {
        try {
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Atualização de cargos realizada!',
                    dados: null
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao atualizar Cargos ${error.mensage}`,
                    dados: null
                }
            );
        }
    },
    //----------------------EXCLUIR CARGOS-------------------------------
    async apagarCargos(request, response) {
        try {
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Exclusão de cargos realizada!',
                    dados: null
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao remover Cargos ${error.mensage}`,
                    dados: null
                }
            );
        }
    },
}
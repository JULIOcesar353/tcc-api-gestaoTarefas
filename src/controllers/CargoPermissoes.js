const db = require ('../dataBase/connection')

module.exports = {
    async listarCargoPermissoes (request, response) {
      try{ 
        return response.status(200).json(
            {
            sucesso: true,
            mensagem: 'Lista de Permissões de Cargos obtida com sucesso',
            dados: null
        }
    );
    }  catch (error) {
        return response.status(500).json(
            {
                sucesso: false,
                mensagem: `Erro ao listar Permissões dos Cargos: ${error.message}`,
                dados: null
            }
        );
    }
    },

// ------------ Cadastrar Permissões de Cargo -------------
    async cadastrarCargoPermissoes (request, response) {
      try{ 
        return response.status(200).json(
            {
            sucesso: true,
            mensagem: 'Cadastro de Permissões de Cargos efetuada com sucesso',
            dados: null
        }
    );
    }  catch (error) {
        return response.status(500).json(
            {
                sucesso: false,
                mensagem: `Erro ao Cadastrar Permissoes de Cargos: ${error.message}`,
                dados: null
            }
        );
    }
    },
// ------------ Editar Permissões de Cargo -------------
    async editarCargoPermissoes (request, response) {
      try{ 
        return response.status(200).json(
            {
            sucesso: true,
            mensagem: 'Atualização de Permissões de Cargos efetuada com sucesso',
            dados: null
        }
    );
    }  catch (error) {
        return response.status(500).json(
            {
                sucesso: false,
                mensagem: `Erro ao Editar Permissoes de Cargos: ${error.message}`,
                dados: null
            }
        );
    }
    },
// ------------ Excluir Permissões de Cargo -------------
    async apagarCargoPermissoes (request, response) {
      try{ 
        return response.status(200).json(
            {
            sucesso: true,
            mensagem: 'Exclusão de Permissões de Cargos efetuada com sucesso',
            dados: null
        }
    );
    }  catch (error) {
        return response.status(500).json(
            {
                sucesso: false,
                mensagem: `Erro ao Excluir Permissoes de Cargos: ${error.message}`,
                dados: null
            }
        );
    }
    },
}


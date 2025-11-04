const db = require ('../dataBase/connection')

module.exports = {
    async listarTarefaFotos (request, response) {
      try{ 
        return response.status(200).json(
            {
            sucesso: true,
            mensagem: 'Foto de Tarefas obtida com sucesso',
            dados: null
        }
    );
    }  catch (error) {
        return response.status(500).json(
            {
                sucesso: false,
                mensagem: `Erro ao listar Foto das Tarefas: ${error.message}`,
                dados: null
            }
        );
    }
    },

// ------------ Cadastrar Fotos de Tarefas -------------
    async CadastrarFotosTarefas (request, response) {
      try{ 
        return response.status(200).json(
            {
            sucesso: true,
            mensagem: 'Cadastro de Foto das Tarefas efetuada com sucesso',
            dados: null
        }
    );
    }  catch (error) {
        return response.status(500).json(
            {
                sucesso: false,
                mensagem: `Erro ao Cadastrar Foto das Tarefas: ${error.message}`,
                dados: null
            }
        );
    }
    },
// ------------ Editar Foto das Tarefas -------------
    async EditarCargoPermissoes (request, response) {
      try{ 
        return response.status(200).json(
            {
            sucesso: true,
            mensagem: 'Atualização de Fotos das Tarefas efetuada com sucesso',
            dados: null
        }
    );
    }  catch (error) {
        return response.status(500).json(
            {
                sucesso: false,
                mensagem: `Erro ao Editar Foto das Tarefas: ${error.message}`,
                dados: null
            }
        );
    }
    },
// ------------ Excluir Foto das T arefas -------------
    async ExcluirCargoPermissoes (request, response) {
      try{ 
        return response.status(200).json(
            {
            sucesso: true,
            mensagem: 'Exclusão de Fotos das tarefas efetuada com sucesso',
            dados: null
        }
    );
    }  catch (error) {
        return response.status(500).json(
            {
                sucesso: false,
                mensagem: `Erro ao Excluir Foto das Tarefas: ${error.message}`,
                dados: null
            }
        );
    }
    },
}


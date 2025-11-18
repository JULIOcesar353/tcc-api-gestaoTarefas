const db = require ('../dataBase/connection')

module.exports = {
    async listarTarefaFotos (request, response) {
      try{ 

        const sql = `
        SELECT 
        fot_id, fot_tarefa_id, fot_nome, fot_descricao, fot_data_envio 
        FROM TAREFA_FOTOS;
        `;

        const [tarefafotos] = await db.query(sql);

        return response.status(200).json(
            {
            sucesso: true,
            mensagem: 'Foto de Tarefas obtida com sucesso',
            itens: tarefafotos.length,
            dados: tarefafotos
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
    async cadastrarFotosTarefas (request, response) {
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
    async editarCargoPermissoes (request, response) {
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
    async excluirCargoPermissoes (request, response) {
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


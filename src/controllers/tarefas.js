const db = require('../dataBase/connection');

module.exports = {

//------------ Listar Tarefas -------------
async listarTarefas(request, response) {
    try{
        const sql = `SELECT 
            tar_id, tar_setor_id, tar_criado_por, tar_titulo, tar_descricao, tar_prioridade, tar_prazo, tar_status = 1 AS tar_status, tar_estimativa_minutos, tar_data_criacao, tar_exige_foto = 1 AS tar_exige_foto
        FROM TAREFAS;`;

        const [tarefas] = await db.query(sql);

        return response.status(200).json(
            {
                sucesso: true,
                mensagem: 'Lista de tarefas obtida com sucesso',
                items: tarefas.length,
                dados: tarefas
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

    // ------------ Cadastrar Tarefas -------------
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

    // ------------ Editar Tarefas -------------
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

    // ------------ Apagar Tarefas -------------
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
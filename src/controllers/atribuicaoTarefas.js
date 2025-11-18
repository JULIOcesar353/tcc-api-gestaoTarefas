const db = require('../dataBase/connection');

module.exports = {
    async listarAtribuicaoTarefas(request, response) {
        try {

            const sql = `
            SELECT 
                atr_id, atr_tarefa_id, atr_funcionario_id, atr_data_atribuicao 
            FROM ATRIBUICAO_TAREFAS;
            `;

            const [atribuicaoTarefas] = await db.query(sql);

            
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Lista de atribuição de tarefas feita com sucesso',
                    itens: atribuicaoTarefas.length,
                    dados: atribuicaoTarefas
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `erro ao listar atribuição de tarefas: ${error.message} `,
                    dados: atribuicaoTarefas
                }
            );
        }
    },

    /*
    async cadastrarAtribuicaoTarefas(request, response) {
        try {

            const{atribuicao_tarefas, atribuicao_funcionarios, data_atribuicao} = request.body;
            const usu_ativo = 1;

            const sql = `
            INSERT INTO ATRIBUICAO_TAREFAS (atr_tarefa_id, atr_funcionario_id, 
            atr_data_atribuicao)
            VALUES 
            (?, ?, ?, )`;

            const values = [atribuicao_tarefas, atribuicao_funcionarios, data_atribuicao];

            const [result] = await db.query(sql, values);

            const dados = {
                id: result.insertId,
                atr_tarefa,
                atr_func,
                data_atr
            }
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Cadastro de tarefas feita com sucesso',
                    dados: dados
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
    */
    
    async editarAtribuicaoTarefas(request, response) {
        try {
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Editar atribuição de tarefas feita com sucesso',
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
    async apagarAtribuicaoTarefas(request, response) {
        try {
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Apagar atribuição de tarefas feito com sucesso',
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
const db = require('../dataBase/connection.js');

module.exports = {
    //----------------------LISTAR FUNCIONÁRIOS--------------------------------
    async listarFuncionarios(request, response) {
        try {
            const sql = `SELECT 
                func_id, func_setor_id, func_crg_id, func_nome, func_email, func_senha, func_ativo = 1 AS func_ativo, func_data_criacao 
            FROM FUNCIONARIOS;`;

            const [funcionarios] = await db.query(sql);

            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Lista de Funcionários obtida com sucesso',
                    items: funcionarios.length,
                    dados: funcionarios
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
            const { setor, cargo, nome, email, senha, ativo, data} = request.body;

            const sql = `INSERT INTO FUNCIONARIOS 
                (func_setor_id, func_crg_id, func_nome, func_email, func_senha, func_ativo, func_data_criacao) 
            VALUES 
                (?, ?, ?, ?, ?, ?, NOW());`;

            const values = [setor, cargo, nome, email, senha, ativo, data];
            const [result] = await db.query(sql, values);

            const dados = {  
                id: result.insertId,
                nome,
                email,
                ativo,
                data_criacao: new Date()
            };

            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Cadastro de funcionários realizada!',
                    dados: dados
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao cadastrar Funcionários.`,
                    dados: error.message
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
const db = require('../dataBase/connection')

module.exports = {
    async listarCargoPermissoes(request, response) {
        try {

            const sql = `
        SELECT
            crg_id = 1 AS crg_id, prm_id = 1 AS prm_id, crg_prm_cadastrar = 1 AS crg_prm_cadastrar, crg_perm_editar = 1 AS crg_perm_editar, crg_prm_consultar = 1 AS crg_prm_consultar
        FROM CARGO_PERMISSOES;
        `;

            const [cargopermissoes] = await db.query(sql);

            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Lista de Permissões de Cargos obtida com sucesso',
                    itens: cargopermissoes.length,
                    dados: cargopermissoes
                }
            );
        } catch (error) {
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

    async cadastrarCargoPermissoes(request, response) {
        try {
            const {cargo, permissao, cadastrar, editar, consultar} = request.body;

            const sql = `INSERT INTO CARGO_PERMISSOES 
                (crg_id, prm_id, crg_prm_cadastrar, crg_perm_editar, crg_prm_consultar) 
            VALUES
                (?, ?, ?, ?, ?);`;

            const values = [cargo, permissao, cadastrar, editar, consultar];

            const [result] = await db.query(sql, values);

            const dados = {
                id: result.insertId,
                cadastrar,
                editar,
                consultar
            };

            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Cadastro de Permissões de Cargos efetuada com sucesso',
                    dados: dados
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao Cadastrar Permissoes de Cargos.`,
                    dados: error.message
                }
            );
        }
    },
    // ------------ Editar Permissões de Cargo -------------
    async editarCargoPermissoes(request, response) {
        try {
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Atualização de Permissões de Cargos efetuada com sucesso',
                    dados: null
                }
            );
        } catch (error) {
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
    async apagarCargoPermissoes(request, response) {
        try {
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Exclusão de Permissões de Cargos efetuada com sucesso',
                    dados: null
                }
            );
        } catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao Excluir Permissoes de C argos: ${error.message}`,
                    dados: null
                }
            );
        }
    },
}


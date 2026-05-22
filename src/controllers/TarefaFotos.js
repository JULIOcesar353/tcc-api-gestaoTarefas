const db = require("../dataBase/connection");
const { gerarUrl } = require("../utils/gerarUrl");
const fs = require("fs");
const path = require("path");

module.exports = {
  async listarTarefaFotos(request, response) {
    try {
      const sql = `
      SELECT 
        fot_id, 
        fot_tarefa_id, 
        fot_nome, 
        fot_descricao, 
        fot_data_envio 
      FROM TAREFA_FOTOS;
    `;

      const [tarefafotos] = await db.query(sql);
      const nItens = tarefafotos.length;

      const baseUrl = `${request.protocol}://${request.get("host")}`;

      const dados = tarefafotos.map((foto) => {
        const caminhoFisico = path.join(
          process.cwd(),
          "src",
          "uploads",
          "tarefas",
          foto.fot_nome || "",
        );

        const arquivoExiste = foto.fot_nome && fs.existsSync(caminhoFisico);

        return {
          ...foto,
          fot_nome: arquivoExiste
            ? `${baseUrl}/uploads/tarefas/${foto.fot_nome}`
            : null,
        };
      });

      return response.status(200).json({
        sucesso: true,
        mensagem: "Foto de Tarefas obtida com sucesso",
        nItens,
        dados,
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: `Erro ao listar Foto das Tarefas: ${error.message}`,
        dados: null,
      });
    }
  },

  // ------------ Cadastrar Fotos de Tarefas -------------
  async cadastrarFotosTarefas(request, response) {
    try {
      const { tarefa, descricao } = request.body;
      const imagem = request.file;

      if (!tarefa) {
        return response.status(400).json({
          sucesso: false,
          mensagem: "ID da tarefa é obrigatório.",
          dados: null,
        });
      }

      if (!imagem) {
        return response.status(400).json({
          sucesso: false,
          mensagem: "Imagem da tarefa é obrigatória.",
          dados: null,
        });
      }

      const sql = `
      INSERT INTO TAREFA_FOTOS 
        (fot_tarefa_id, fot_nome, fot_descricao, fot_data_envio)
      VALUES
        (?, ?, ?, NOW());
    `;

      const values = [tarefa, imagem.filename, descricao];

      const [result] = await db.query(sql, values);

      return response.status(200).json({
        sucesso: true,
        mensagem: "Cadastro de Foto das Tarefas efetuada com sucesso",
        dados: {
          id: result.insertId,
          tarefa,
          nome: imagem.filename,
          descricao,
        },
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: "Erro ao Cadastrar Foto das Tarefas.",
        dados: error.message,
      });
    }
  },

  // ------------ Editar Foto das Tarefas -------------
  async editartarefaFotos(request, response) {
    try {
      const { nome, descricao, data_envio } = request.body;

      const { id } = request.params;

      const sql = `
                UPDATE tarefa_Fotos SET
                    fot_nome = ?,
                    fot_descricao = ?,
                    fot_data_envio = ?
                WHERE 
                    fot_id = ?
            `;

      const values = [nome, descricao, data_envio, id];

      const [result] = await db.query(sql, values);

      if (result.affectedRows === 0) {
        return response.status(404).json({
          sucesso: false,
          mensagem: `Foto da tarefa ${id} não encontrado!`,
          dados: null,
        });
      }

      const dados = {
        id,
        nome,
        descricao,
        data_envio,
      };

      return response.status(200).json({
        sucesso: true,
        mensagem: "Atualização de Fotos das Tarefas efetuada com sucesso",
        dados: null,
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: `Erro ao Editar Foto das Tarefas: ${error.message}`,
        dados: null,
      });
    }
  },
  // ------------ Excluir Foto das T arefas -------------
  async excluirtarefaFotos(request, response) {
    try {
      const { id } = request.params;

      const sql = `
                DELETE FROM tarefa_fotos
                WHERE fot_id = ?
            `;

      const values = [id];
      const [result] = await db.query(sql, [values]);

      if (result.affectedRows === 0) {
        return response.status(404).json({
          sucesso: false,
          mensagem: `Foto tarefa não encontrada!`,
        });
      }
      return response.status(200).json({
        sucesso: true,
        mensagem: "Exclusão de Fotos das tarefas efetuada com sucesso",
        dados: null,
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: `Erro ao Excluir Foto das Tarefas: ${error.message}`,
        dados: null,
      });
    }
  },
};

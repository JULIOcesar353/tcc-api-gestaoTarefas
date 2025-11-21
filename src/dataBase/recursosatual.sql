-- =========================
-- SELECTs listando todos os campos de cada tabela (sem usar *)
-- =========================
SELECT crg_id, crg_nome FROM CARGOS;
SELECT prm_id, prm_nome FROM PERMISSOES;
SELECT set_id, set_nome FROM SETORES;
SELECT func_id, func_setor_id, func_crg_id, func_nome, func_email, func_senha, func_ativo, func_data_criacao FROM FUNCIONARIOS;
SELECT crg_id, prm_id, crg_prm_cadastrar, crg_perm_editar, crg_prm_consultar FROM CARGO_PERMISSOES;
SELECT tar_id, tar_setor_id, tar_criado_por, tar_titulo, tar_descricao, tar_prioridade, tar_prazo, tar_estimativa_minutos, tar_data_criacao, tar_exige_foto FROM TAREFAS;
SELECT atr_id, atr_tarefa_id, atr_funcionario_id, atr_data_atribuicao, atr_status FROM ATRIBUICAO_TAREFAS;
SELECT fot_id, fot_tarefa_id, fot_nome, fot_descricao, fot_data_envio FROM TAREFA_FOTOS;

-- =========================
-- SELECTs com INNER JOIN para tabelas com chave estrangeira
-- =========================

-- FUNCIONARIOS com SETORES e CARGOS
SELECT 
    f.func_id, f.func_nome, f.func_email, f.func_ativo, f.func_data_criacao,
    s.set_id, s.set_nome,
    c.crg_id, c.crg_nome
FROM FUNCIONARIOS f
INNER JOIN SETORES s ON f.func_setor_id = s.set_id
INNER JOIN CARGOS c ON f.func_crg_id = c.crg_id;

-- CARGO_PERMISSOES com CARGOS e PERMISSOES
SELECT 
    cp.crg_id, c.crg_nome,
    cp.prm_id, p.prm_nome,
    cp.crg_prm_cadastrar, cp.crg_perm_editar, cp.crg_prm_consultar
FROM CARGO_PERMISSOES cp
INNER JOIN CARGOS c ON cp.crg_id = c.crg_id
INNER JOIN PERMISSOES p ON cp.prm_id = p.prm_id;

-- TAREFAS com SETORES e FUNCIONARIOS (criador)
SELECT 
    t.tar_id, t.tar_titulo, t.tar_descricao, t.tar_prioridade, t.tar_prazo, t.tar_estimativa_minutos, t.tar_data_criacao, t.tar_exige_foto,
    s.set_id, s.set_nome,
    f.func_id, f.func_nome
FROM TAREFAS t
INNER JOIN SETORES s ON t.tar_setor_id = s.set_id
INNER JOIN FUNCIONARIOS f ON t.tar_criado_por = f.func_id;

-- ATRIBUICAO_TAREFAS com TAREFAS e FUNCIONARIOS
SELECT 
    at.atr_id, at.atr_data_atribuicao, at.atr_status,
    t.tar_id, t.tar_titulo,
    f.func_id, f.func_nome
FROM ATRIBUICAO_TAREFAS at
INNER JOIN TAREFAS t ON at.atr_tarefa_id = t.tar_id
INNER JOIN FUNCIONARIOS f ON at.atr_funcionario_id = f.func_id;

-- TAREFA_FOTOS com TAREFAS
SELECT 
    tf.fot_id, tf.fot_nome, tf.fot_descricao, tf.fot_data_envio,
    t.tar_id, t.tar_titulo
FROM TAREFA_FOTOS tf
INNER JOIN TAREFAS t ON tf.fot_tarefa_id = t.tar_id;

-- =========================
-- DROP TABLES na ordem correta (filhas antes das pais)
-- =========================
DROP TABLE IF EXISTS TAREFA_FOTOS;
DROP TABLE IF EXISTS ATRIBUICAO_TAREFAS;
DROP TABLE IF EXISTS TAREFAS;
DROP TABLE IF EXISTS CARGO_PERMISSOES;
DROP TABLE IF EXISTS FUNCIONARIOS;
DROP TABLE IF EXISTS SETORES;
DROP TABLE IF EXISTS CARGOS;
DROP TABLE IF EXISTS PERMISSOES;
-- SQL para criação das tabelas do sistema de gestão de supermercado

CREATE TABLE CARGOS (
    crg_id INT AUTO_INCREMENT PRIMARY KEY,
    crg_nome VARCHAR(60) NOT NULL
);

CREATE TABLE PERMISSOES (
    prm_id INT AUTO_INCREMENT PRIMARY KEY,
    prm_nome VARCHAR(60) NOT NULL
);

CREATE TABLE SETORES (
    set_id INT AUTO_INCREMENT PRIMARY KEY,
    set_nome VARCHAR(60) NOT NULL
);

CREATE TABLE FUNCIONARIOS (
    func_id INT AUTO_INCREMENT PRIMARY KEY,
    func_setor_id INT NOT NULL,
    func_crg_id INT NOT NULL,
    func_nome VARCHAR(60) NOT NULL,
    func_email VARCHAR(80) UNIQUE NOT NULL,
    func_senha VARCHAR(255) NOT NULL,
    func_ativo BIT NOT NULL,
    func_data_criacao DATETIME NOT NULL,
    FOREIGN KEY (func_setor_id) REFERENCES SETORES(set_id),
    FOREIGN KEY (func_crg_id) REFERENCES CARGOS(crg_id)
);

CREATE TABLE CARGO_PERMISSOES (
    crg_id INT,
    prm_id INT,
    crg_prm_cadastrar BIT NOT NULL,
    crg_perm_editar BIT NOT NULL,
    crg_prm_consultar BIT NOT NULL,
    PRIMARY KEY (crg_id, prm_id),
    FOREIGN KEY (crg_id) REFERENCES CARGOS(crg_id),
    FOREIGN KEY (prm_id) REFERENCES PERMISSOES(prm_id)
);

CREATE TABLE TAREFAS (
    tar_id INT AUTO_INCREMENT PRIMARY KEY,
    tar_setor_id INT NOT NULL,
    tar_criado_por INT NOT NULL,
    tar_titulo VARCHAR(100) NOT NULL,
    tar_descricao VARCHAR(300) NOT NULL,
    tar_prioridade TINYINT NOT NULL,
    tar_prazo DATETIME NOT NULL,
    tar_status BIT NOT NULL,
    tar_estimativa_minutos INT NOT NULL,
    tar_data_criacao DATETIME NOT NULL,
    tar_exige_foto BIT,
    FOREIGN KEY (tar_setor_id) REFERENCES SETORES(set_id),
    FOREIGN KEY (tar_criado_por) REFERENCES FUNCIONARIOS(func_id)
);

CREATE TABLE ATRIBUICAO_TAREFAS (
    atr_id INT AUTO_INCREMENT PRIMARY KEY,
    atr_tarefa_id INT NOT NULL,
    atr_funcionario_id INT NOT NULL,
    atr_data_atribuicao DATETIME NOT NULL,
    FOREIGN KEY (atr_tarefa_id) REFERENCES TAREFAS(tar_id),
    FOREIGN KEY (atr_funcionario_id) REFERENCES FUNCIONARIOS(func_id)
);

CREATE TABLE TAREFA_FOTOS (
    fot_id INT AUTO_INCREMENT PRIMARY KEY,
    fot_tarefa_id INT NOT NULL,
    fot_nome VARCHAR(60) NOT NULL,
    fot_descricao VARCHAR(255) NOT NULL,
    fot_data_envio DATETIME NOT NULL,
    FOREIGN KEY (fot_tarefa_id) REFERENCES TAREFAS(tar_id)
);

Esse script cria dados realistas para o sistema de gestão de supermercado:

7 setores

5 cargos

5 tipos de permissões

20 funcionários

Permissões por cargo

20 tarefas com prazos e prioridades

Atribuições coerentes

Fotos das tarefas que exigem imagem

-- ==========================================================
-- POPULAÇÃO COMPLETA DO BANCO DE DADOS - SUPERMERCADO
-- ==========================================================

-- =========================
-- 1. CARGOS
-- =========================
INSERT INTO CARGOS (crg_nome) VALUES
('Gerente'),
('Supervisor'),
('Caixa'),
('Repositor'),
('Auxiliar de Limpeza');

-- =========================
-- 2. PERMISSOES
-- =========================
INSERT INTO PERMISSOES (prm_nome) VALUES
('Funcionários'),
('Setores'),
('Tarefas'),
('Relatórios'),
('Estoque');

-- =========================
-- 3. SETORES
-- =========================
INSERT INTO SETORES (set_nome) VALUES
('Administrativo'),
('Financeiro'),
('Operacional'),
('Atendimento'),
('Limpeza'),
('Estoque'),
('Logística');

-- =========================
-- 4. FUNCIONÁRIOS (20 funcionários)
-- =========================
INSERT INTO FUNCIONARIOS (func_setor_id, func_crg_id, func_nome, func_email, func_senha, func_ativo, func_data_criacao)
VALUES
(1, 1, 'Carlos Silva', 'carlos.silva@mercadobom.com', 'senha123', 1, NOW()),
(2, 2, 'Fernanda Costa', 'fernanda.costa@mercadobom.com', 'senha123', 1, NOW()),
(4, 3, 'João Pereira', 'joao.pereira@mercadobom.com', 'senha123', 1, NOW()),
(3, 4, 'Lucas Andrade', 'lucas.andrade@mercadobom.com', 'senha123', 1, NOW()),
(5, 5, 'Mariana Lima', 'mariana.lima@mercadobom.com', 'senha123', 1, NOW()),
(3, 4, 'Rafaela Souza', 'rafaela.souza@mercadobom.com', 'senha123', 1, NOW()),
(4, 3, 'Paulo Henrique', 'paulo.henrique@mercadobom.com', 'senha123', 1, NOW()),
(6, 4, 'Diego Martins', 'diego.martins@mercadobom.com', 'senha123', 1, NOW()),
(7, 4, 'Juliana Ramos', 'juliana.ramos@mercadobom.com', 'senha123', 1, NOW()),
(5, 5, 'Amanda Torres', 'amanda.torres@mercadobom.com', 'senha123', 1, NOW()),
(4, 3, 'Eduardo Nunes', 'eduardo.nunes@mercadobom.com', 'senha123', 1, NOW()),
(3, 4, 'Ricardo Gomes', 'ricardo.gomes@mercadobom.com', 'senha123', 1, NOW()),
(6, 4, 'Beatriz Santos', 'beatriz.santos@mercadobom.com', 'senha123', 1, NOW()),
(2, 2, 'Tatiane Rocha', 'tatiane.rocha@mercadobom.com', 'senha123', 1, NOW()),
(7, 4, 'Guilherme Araújo', 'guilherme.araujo@mercadobom.com', 'senha123', 1, NOW()),
(1, 2, 'Patrícia Mendes', 'patricia.mendes@mercadobom.com', 'senha123', 1, NOW()),
(6, 4, 'Henrique Duarte', 'henrique.duarte@mercadobom.com', 'senha123', 1, NOW()),
(5, 5, 'Larissa Teixeira', 'larissa.teixeira@mercadobom.com', 'senha123', 1, NOW()),
(3, 4, 'Matheus Lima', 'matheus.lima@mercadobom.com', 'senha123', 1, NOW()),
(7, 4, 'Bruna Cardoso', 'bruna.cardoso@mercadobom.com', 'senha123', 1, NOW());

-- =========================
-- 5. CARGO_PERMISSOES
-- =========================
-- Gerente: todas as permissões
INSERT INTO CARGO_PERMISSOES VALUES
(1, 1, 1, 1, 1),
(1, 2, 1, 1, 1),
(1, 3, 1, 1, 1),
(1, 4, 1, 1, 1),
(1, 5, 1, 1, 1);


-- =========================
-- 6. TAREFAS (20 tarefas)
-- =========================

INSERT INTO TAREFAS (tar_setor_id, tar_criado_por, tar_titulo, tar_descricao, tar_prioridade, tar_prazo, tar_status, tar_estimativa_minutos, tar_data_criacao, tar_exige_foto)
VALUES
(3, 1, 'Reposição de produtos de higiene', 'Repor prateleiras de sabonetes e shampoos.', 2, DATE_ADD(NOW(), INTERVAL 1 DAY), 0, 60, NOW(), 0),
(4, 2, 'Atendimento VIP', 'Atendimento diferenciado a clientes fidelizados.', 3, DATE_ADD(NOW(), INTERVAL 2 DAY), 0, 90, NOW(), 0),
(5, 1, 'Limpeza do depósito', 'Organizar e limpar depósito de produtos perecíveis.', 1, DATE_ADD(NOW(), INTERVAL 3 DAY), 0, 120, NOW(), 1),
(3, 2, 'Verificação de validade', 'Checar validade na seção de frios.', 3, DATE_ADD(NOW(), INTERVAL 1 DAY), 0, 45, NOW(), 1),
(2, 1, 'Conferência de notas fiscais', 'Verificar notas e lançar no sistema.', 2, DATE_ADD(NOW(), INTERVAL 2 DAY), 0, 75, NOW(), 0),
(6, 2, 'Organizar estoque de bebidas', 'Reorganizar caixas e atualizar planilha.', 2, DATE_ADD(NOW(), INTERVAL 1 DAY), 0, 80, NOW(), 1),
(3, 1, 'Montar exposição de Natal', 'Criar display de produtos natalinos na entrada.', 3, DATE_ADD(NOW(), INTERVAL 5 DAY), 0, 180, NOW(), 1),
(7, 1, 'Agendar entrega com fornecedores', 'Confirmar horários de entrega de novos produtos.', 2, DATE_ADD(NOW(), INTERVAL 2 DAY), 0, 60, NOW(), 0),
(4, 16, 'Treinamento de novos caixas', 'Treinar novos colaboradores no sistema PDV.', 3, DATE_ADD(NOW(), INTERVAL 3 DAY), 0, 120, NOW(), 0),
(3, 14, 'Organizar setor de hortifrúti', 'Reorganizar frutas e verduras conforme padrão visual.', 2, DATE_ADD(NOW(), INTERVAL 1 DAY), 0, 90, NOW(), 1),
(6, 13, 'Contagem de estoque geral', 'Inventário mensal completo do estoque.', 3, DATE_ADD(NOW(), INTERVAL 5 DAY), 0, 240, NOW(), 1),
(5, 10, 'Limpeza das câmaras frias', 'Higienizar câmaras frias com produtos adequados.', 3, DATE_ADD(NOW(), INTERVAL 2 DAY), 0, 180, NOW(), 1),
(4, 2, 'Atualizar tabela de preços', 'Atualizar valores de acordo com novo reajuste.', 2, DATE_ADD(NOW(), INTERVAL 1 DAY), 0, 70, NOW(), 0),
(3, 12, 'Verificar etiquetas de preço', 'Conferir etiquetas nas gôndolas.', 1, DATE_ADD(NOW(), INTERVAL 1 DAY), 0, 40, NOW(), 0),
(7, 9, 'Conferência de entrega pendente', 'Verificar entregas que não foram recebidas.', 2, DATE_ADD(NOW(), INTERVAL 2 DAY), 0, 90, NOW(), 0),
(5, 18, 'Limpeza do estacionamento', 'Varredura completa do estacionamento.', 1, DATE_ADD(NOW(), INTERVAL 1 DAY), 0, 120, NOW(), 1),
(6, 8, 'Reposição de estoque noturno', 'Abastecimento noturno do setor de bebidas.', 3, DATE_ADD(NOW(), INTERVAL 1 DAY), 0, 150, NOW(), 1),
(4, 11, 'Controle de fila nos caixas', 'Reduzir tempo médio de espera.', 2, DATE_ADD(NOW(), INTERVAL 1 DAY), 0, 60, NOW(), 0),
(2, 14, 'Revisar relatórios financeiros', 'Checar lançamentos e saldos bancários.', 3, DATE_ADD(NOW(), INTERVAL 3 DAY), 0, 180, NOW(), 0),
(1, 1, 'Auditoria interna mensal', 'Auditoria de processos e conferência de documentos.', 3, DATE_ADD(NOW(), INTERVAL 5 DAY), 0, 300, NOW(), 0);

-- =========================
-- 7. ATRIBUICAO_TAREFAS
-- =========================
INSERT INTO ATRIBUICAO_TAREFAS (atr_tarefa_id, atr_funcionario_id, atr_data_atribuicao)
VALUES
(1, 4, NOW()),
(2, 3, NOW()),
(3, 5, NOW()),
(4, 6, NOW()),
(5, 14, NOW()),
(6, 8, NOW()),
(7, 9, NOW()),
(8, 15, NOW()),
(9, 3, NOW()),
(10, 12, NOW()),
(11, 13, NOW()),
(12, 10, NOW()),
(13, 11, NOW()),
(14, 4, NOW()),
(15, 9, NOW()),
(16, 18, NOW()),
(17, 17, NOW()),
(18, 7, NOW()),
(19, 14, NOW()),
(20, 16, NOW());

-- =========================
-- 8. TAREFA_FOTOS
-- =========================
INSERT INTO TAREFA_FOTOS (fot_tarefa_id, fot_nome, fot_descricao, fot_data_envio)
VALUES
(3, 'deposito_limpo.jpg', 'Depósito limpo e organizado após limpeza geral.', NOW()),
(4, 'frios_validade.jpg', 'Foto da seção de frios com etiquetas atualizadas.', NOW()),
(6, 'estoque_bebidas.jpg', 'Organização das caixas de bebidas.', NOW()),
(7, 'exposicao_natal.jpg', 'Display de produtos natalinos montado.', NOW()),
(10, 'hortifruti.jpg', 'Setor de frutas e verduras reorganizado.', NOW()),
(11, 'estoque_geral.jpg', 'Contagem de estoque registrada.', NOW()),
(12, 'camara_fria.jpg', 'Câmara fria higienizada.', NOW()),
(16, 'estacionamento_limpo.jpg', 'Área de estacionamento limpa.', NOW()),
(17, 'estoque_noturno.jpg', 'Reabastecimento do setor noturno concluído.', NOW());

-- Supervisor
INSERT INTO CARGO_PERMISSOES VALUES
(2, 1, 1, 0, 1),
(2, 2, 1, 0, 1),
(2, 3, 1, 1, 1),
(2, 4, 0, 0, 1),
(2, 5, 1, 0, 1);

-- Caixa
INSERT INTO CARGO_PERMISSOES VALUES
(3, 3, 0, 0, 1),
(3, 5, 0, 0, 1);

-- Repositor
INSERT INTO CARGO_PERMISSOES VALUES
(4, 3, 0, 0, 1),
(4, 5, 0, 0, 1);

-- Limpeza
INSERT INTO CARGO_PERMISSOES VALUES
(5, 3, 0, 0, 1);




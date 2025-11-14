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
    atr_status TINYINT NOT NULL,
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

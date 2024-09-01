-- Conectar-se ao banco de dados, caso esteja utilizando o psql
\c open_finance_db;

-- Verifique se a tabela já existe, e se sim, exclua-a
DROP TABLE IF EXISTS account;

-- Crie a tabela Account
CREATE TABLE account (
    id SERIAL PRIMARY KEY,
    account_number VARCHAR(20) NOT NULL UNIQUE,
    balance DECIMAL(15, 2) NOT NULL DEFAULT 0.00
);

-- Inserir dados iniciais
INSERT INTO account (account_number, balance) VALUES ('123456', 1000.0);
INSERT INTO account (account_number, balance) VALUES ('654321', 2000.0);
INSERT INTO account (account_number, balance) VALUES ('345678', 1000.0);
INSERT INTO account (account_number, balance) VALUES ('656565', 2000.0);

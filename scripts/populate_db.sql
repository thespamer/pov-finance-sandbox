-- Create the database
CREATE DATABASE open_finance_db;

-- Connect to the database
\\c open_finance_db;

-- Create the Account table
CREATE TABLE account (
    id SERIAL PRIMARY KEY,
    account_number VARCHAR(20) NOT NULL UNIQUE,
    balance DECIMAL(15, 2) NOT NULL DEFAULT 0.00
);

-- Insert initial data
INSERT INTO account (account_number, balance) VALUES ('123456', 1000.0);
INSERT INTO account (account_number, balance) VALUES ('654321', 2000.0);
INSERT INTO account (account_number, balance) VALUES ('345678', 1000.0);
INSERT INTO account (account_number, balance) VALUES ('656565', 2000.0);
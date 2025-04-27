# Sistema CRUD de Livros

[![Made with Node.js](https://img.shields.io/badge/Node.js-Backend-green)](https://nodejs.org/)  
[![Made with React](https://img.shields.io/badge/React-Frontend-blue)](https://react.dev/)  
[![Database MySQL](https://img.shields.io/badge/Database-MySQL-005C84)](https://www.mysql.com/)

Aplicação web fullstack para gerenciamento de livros, permitindo criar, visualizar, atualizar e remover registros de forma prática e eficiente.

O projeto é dividido em:
- **Backend:** Node.js + Express
- **Frontend:** React + Axios
- **Banco de Dados:** MySQL

---
## Funcionalidades
- Cadastrar um novo livro  
- Listar todos os livros cadastrados  
- Atualizar informações de um livro existente  
- Excluir um livro do sistema  
- Validação de campos obrigatórios no backend  
- Exibição de mensagens de erro no console do frontend  

---
## Como Funciona
O frontend (React) envia requisições HTTP para o backend (Node.js/Express) utilizando Axios.  
O backend processa essas requisições, conecta-se ao banco de dados MySQL e realiza as operações de:
- Criação de livros
- Listagem de livros
- Atualização de informações
- Exclusão de livros

Os dados são armazenados em uma tabela chamada `livros`, contendo os seguintes campos:
- `id`
- `titulo`
- `autor`
- `ano`

Para organização do backend:
- `controller/` → contém a lógica das operações CRUD
- `routes/` → define as rotas da API
- `db.js` → configura a conexão com o MySQL

---
## Como Rodar 

### 1. Banco de Dados (MySQL)  
Crie o banco de dados:  
```sql
CREATE DATABASE livros_db;
```
Selecione o banco:  
```sql
USE livros_db;
```
Importe o arquivo `livros.sql` para criar a tabela.  

> Observação: inicialmente o banco estará vazio — os livros serão cadastrados pela aplicação.

### 2. Backend  
Acesse a pasta backend/:  
```bash
cd backend
```
Instale as dependências:  
```bash
npm install
```
Configure o arquivo `db.js` com seu usuário, senha e nome do banco de dados.  
Inicie o servidor:  
```bash
npm start
```
O backend ficará disponível em: [http://localhost:3001/](http://localhost:3001/)

### 3. Frontend  
Acesse a pasta frontend/:  
```bash
cd frontend
```
Instale as dependências:  
```bash
npm install
```
Inicie o projeto:  
```bash
npm start
```
O frontend abrirá automaticamente em: [http://localhost:3000/](http://localhost:3000/)

---
## Estrutura de Pastas

```bash
📁 backend/      # Código do servidor (Node.js + Express)
📁 frontend/     # Código da aplicação web (React)
📄 livros.sql    # Script para criação da tabela no banco de dados
📄 README.md     # Documentação do projeto
```

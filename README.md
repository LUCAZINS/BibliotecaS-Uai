# 📚 Sistema de Gerenciamento de Biblioteca

Sistema web para gerenciamento de bibliotecas, desenvolvido para facilitar o controle do acervo, dos exemplares, dos locatários e dos empréstimos de livros.

O projeto possui uma arquitetura separada entre frontend e backend, com comunicação por API REST.

## 🚀 Tecnologias utilizadas

### Backend
- C#
- ASP.NET Core Web API (.NET 10)
- Entity Framework Core
- PostgreSQL
- Npgsql
- ASP.NET Core Identity
- Swagger / OpenAPI

### Frontend
- Angular
- TypeScript
- HTML5
- CSS3

## ✨ Funcionalidades

- 📖 Cadastro, consulta, edição e exclusão de livros.
- 🏷️ Gerenciamento de gêneros literários.
- 📦 Cadastro e gerenciamento de exemplares.
- 🏷️ Geração e consulta de códigos de barras para exemplares.
- 👥 Cadastro e gerenciamento de locatários.
- 🔄 Controle de empréstimos e devoluções.
- 🔎 Pesquisa inteligente de livros e exemplares.
- 🔐 Autenticação e autorização de usuários.
- 👤 Controle de acesso por perfil de usuário.
- ⚡ Cache de dados para otimizar consultas.

## 📁 Estrutura do projeto

```text
Biblioteca/
├── BackEndBiblioteca/
│   ├── Controllers/
│   ├── Data/
│   ├── Models/
│   ├── Migrations/
│   ├── Program.cs
│   └── appsettings.json
│
├── FrontEndBiblioteca/
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
└── README.md
```

*Observação: a estrutura interna é ilustrativa e pode variar conforme a organização atual dos arquivos.*

## ⚙️ Pré-requisitos

Antes de executar o projeto, instale:

- [.NET SDK](https://dotnet.microsoft.com/download)
- [Node.js e npm](https://nodejs.org/)
- [Angular CLI](https://angular.dev/tools/cli)
- [PostgreSQL](https://www.postgresql.org/)

## 🛠️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
cd Biblioteca
```

Substitua `URL_DO_REPOSITORIO` pela URL deste repositório no GitHub.

### 2. Configure o backend

Acesse a pasta do backend:

```bash
cd BackEndBiblioteca
```

Restaure as dependências:

```bash
dotnet restore
```

Configure a conexão com o PostgreSQL utilizando a chave `ConexaoBiblioteca` e mantenha as credenciais fora do controle de versão.

Execute as migrations existentes, se necessário:

```bash
dotnet ef database update
```

Inicie a API:

```bash
dotnet watch run
```

Consulte o endereço informado no terminal para acessar a API e, se habilitado, o Swagger.

### 3. Configure o frontend

Em outro terminal, na raiz do projeto:

```bash
cd FrontEndBiblioteca
npm install
```

Inicie a aplicação Angular:

```bash
ng serve
```

Acesse o endereço local apresentado pelo Angular CLI, geralmente `http://localhost:4200`.

### 4. Configure a comunicação entre frontend e backend

Verifique as URLs da API nos arquivos de ambiente ou nos serviços Angular e ajuste-as para corresponder ao endereço em que o backend está executando.

## 🔒 Segurança

- Senhas armazenadas e validadas por meio do ASP.NET Core Identity.
- Autorização baseada em perfis de usuário.
- Credenciais e configurações sensíveis mantidas fora do repositório.
- Comunicação entre frontend e backend por API REST.

## 🎯 Objetivo

Desenvolver uma aplicação web para organizar e otimizar as rotinas de uma biblioteca, aplicando conceitos de desenvolvimento backend, frontend, persistência de dados, autenticação e integração entre sistemas.

## 👨‍💻 Autor

Desenvolvido como projeto de estudo e prática em desenvolvimento de sistemas web.

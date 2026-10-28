# BibliotecaS-Uai — Backend

API REST desenvolvida em **C# com ASP.NET Core** para o sistema de gerenciamento de bibliotecas BibliotecaS-Uai. O backend centraliza as regras de negócio, o gerenciamento do acervo, o controle de exemplares e os empréstimos, além da autenticação e autorização dos usuários.

## Tecnologias utilizadas

- **C# / .NET 10** — desenvolvimento da API.
- **ASP.NET Core Web API** — criação dos endpoints REST.
- **Entity Framework Core** — mapeamento objeto-relacional e acesso aos dados.
- **PostgreSQL** — banco de dados relacional.
- **Npgsql** — integração entre o Entity Framework Core e o PostgreSQL.
- **ASP.NET Core Identity** — gerenciamento de usuários, autenticação e funções.
- **Swagger / OpenAPI** — documentação e testes dos endpoints.

## Funcionalidades

### Autenticação e autorização
- Gerenciamento de usuários com ASP.NET Core Identity.
- Controle de acesso baseado em funções (`Admin` e `Usuario`).
- Proteção de endpoints por autenticação e autorização.
- Estrutura para recuperação de senha e alteração de e-mail por códigos de verificação.

### Livros e gêneros
- Cadastro, consulta, atualização e exclusão de livros.
- Busca inteligente por informações do livro.
- Associação de livros a múltiplos gêneros.

### Exemplares
- Gerenciamento dos exemplares físicos do acervo.
- Identificação por código de barras.
- Controle da disponibilidade dos exemplares.
- Consulta e atualização de exemplares.

### Locatários
- Cadastro e gerenciamento de locatários.
- Consulta de informações cadastrais.

### Empréstimos
- Registro de empréstimos vinculados a locatários e exemplares.
- Controle de disponibilidade dos exemplares.
- Registro de datas previstas e reais de devolução.
- Identificação do usuário responsável pela operação.
- Aplicação de regras de negócio relacionadas aos empréstimos.

## Estrutura do projeto

```text
BackEndBiblioteca/
├── Controllers/
├── Data/
├── models/
├── DTOs/
├── Services/
├── Program.cs
├── appsettings.json
└── BackEndBiblioteca.csproj
```

*Estrutura ilustrativa: os nomes e diretórios podem variar conforme a organização atual do projeto.*

## Pré-requisitos

Antes de executar a aplicação, instale:

- [.NET SDK 10](https://dotnet.microsoft.com/download/dotnet/10.0)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Git](https://git-scm.com/downloads)

## Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/LUCAZINS/BibliotecaS-Uai.git
cd BibliotecaS-Uai/BackEndBiblioteca
```

### 2. Configure a conexão com o PostgreSQL

Configure a chave `ConexaoBiblioteca` no arquivo `appsettings.json` ou utilize os mecanismos de configuração por variáveis de ambiente do ASP.NET Core.

Exemplo de configuração local:

```json
{
  "ConnectionStrings": {
    "ConexaoBiblioteca": "Host=localhost;Port=5432;Database=BibliotecaS_Uai;Username=SEU_USUARIO;Password=SUA_SENHA"
  }
}
```

> **Segurança:** não publique senhas reais ou credenciais no GitHub. Para ambientes compartilhados, utilize variáveis de ambiente ou User Secrets.

### 3. Restaure as dependências

```bash
dotnet restore
```

### 4. Aplique as migrações do banco de dados

Se as migrações do Entity Framework Core já estiverem criadas:

```bash
dotnet ef database update
```

Caso a ferramenta não esteja instalada:

```bash
dotnet tool install --global dotnet-ef
```

### 5. Execute a API

```bash
dotnet watch run
```

A URL e a porta utilizadas serão exibidas no terminal. Se o projeto estiver configurado para iniciar em `http://localhost:5000`, a documentação Swagger poderá ser acessada em:

`http://localhost:5000/swagger`

## Integração com o frontend

O frontend do projeto está localizado na pasta `FrontEndBiblioteca` do mesmo repositório.

A comunicação ocorre por meio de requisições HTTP à API REST. Configure a URL base da API no ambiente do Angular de acordo com a porta em que o backend estiver executando.

## Objetivo

O BibliotecaS-Uai tem como objetivo facilitar a administração de bibliotecas, organizando o acervo, os exemplares, os locatários e os empréstimos em uma aplicação integrada.

## Autor

**Lucas Vinicius Lopes Ribeiro**

Projeto desenvolvido para estudo e aplicação prática de desenvolvimento backend, APIs REST, persistência de dados e autenticação com .NET.

using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace BackEndBiblioteca.Migrations
{
    /// <inheritdoc />
    public partial class CriarTabelaCodigosEmail : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Alugatarios",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Nome = table.Column<string>(type: "text", nullable: true),
                    Email = table.Column<string>(type: "text", nullable: true),
                    Telefone = table.Column<string>(type: "text", nullable: true),
                    Endereco = table.Column<string>(type: "text", nullable: true),
                    CPF = table.Column<string>(type: "text", nullable: true),
                    DataNascimento = table.Column<DateOnly>(type: "date", nullable: false),
                    LivrosAlugados = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Alugatarios", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CodigosEmail",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UsuarioId = table.Column<string>(type: "text", nullable: false),
                    CodigoHash = table.Column<string>(type: "text", nullable: false),
                    Salt = table.Column<string>(type: "text", nullable: false),
                    Finalidade = table.Column<string>(type: "text", nullable: false),
                    ExpiraEm = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Tentativas = table.Column<int>(type: "integer", nullable: false),
                    Usado = table.Column<bool>(type: "boolean", nullable: false),
                    CriadoEm = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CodigosEmail", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Alugueis",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    IdAluguel = table.Column<int>(type: "integer", nullable: false),
                    ClienteId = table.Column<int>(type: "integer", nullable: true),
                    IdExemplar = table.Column<int>(type: "integer", nullable: false),
                    ExemplarId = table.Column<int>(type: "integer", nullable: true),
                    DataAluguel = table.Column<DateOnly>(type: "date", nullable: false),
                    DataDevolucao = table.Column<DateOnly>(type: "date", nullable: false),
                    Status = table.Column<string>(type: "text", nullable: true),
                    Observacoes = table.Column<string>(type: "text", nullable: true),
                    UsuarioId = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Alugueis", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Alugueis_Alugatarios_ClienteId",
                        column: x => x.ClienteId,
                        principalTable: "Alugatarios",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Alugueis_AspNetUsers_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Alugueis_Exemplares_ExemplarId",
                        column: x => x.ExemplarId,
                        principalTable: "Exemplares",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Alugueis_ClienteId",
                table: "Alugueis",
                column: "ClienteId");

            migrationBuilder.CreateIndex(
                name: "IX_Alugueis_ExemplarId",
                table: "Alugueis",
                column: "ExemplarId");

            migrationBuilder.CreateIndex(
                name: "IX_Alugueis_UsuarioId",
                table: "Alugueis",
                column: "UsuarioId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Alugueis");

            migrationBuilder.DropTable(
                name: "CodigosEmail");

            migrationBuilder.DropTable(
                name: "Alugatarios");
        }
    }
}

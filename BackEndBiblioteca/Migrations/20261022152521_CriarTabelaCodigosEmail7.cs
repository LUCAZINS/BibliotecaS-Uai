using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace BackEndBiblioteca.Migrations
{
    /// <inheritdoc />
    public partial class CriarTabelaCodigosEmail7 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Genero",
                table: "Livros");

            migrationBuilder.CreateTable(
                name: "Generos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Nome = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Generos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LivroGeneros",
                columns: table => new
                {
                    GenerosId = table.Column<int>(type: "integer", nullable: false),
                    LivrosId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LivroGeneros", x => new { x.GenerosId, x.LivrosId });
                    table.ForeignKey(
                        name: "FK_LivroGeneros_Generos_GenerosId",
                        column: x => x.GenerosId,
                        principalTable: "Generos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LivroGeneros_Livros_LivrosId",
                        column: x => x.LivrosId,
                        principalTable: "Livros",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Generos_Nome",
                table: "Generos",
                column: "Nome",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LivroGeneros_LivrosId",
                table: "LivroGeneros",
                column: "LivrosId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LivroGeneros");

            migrationBuilder.DropTable(
                name: "Generos");

            migrationBuilder.AddColumn<string>(
                name: "Genero",
                table: "Livros",
                type: "text",
                nullable: true);
        }
    }
}

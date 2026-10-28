using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackEndBiblioteca.Migrations
{
    /// <inheritdoc />
    public partial class RelacionamentoLivroExemplar1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Exemplares_Livros_LivroId",
                table: "Exemplares");

            migrationBuilder.DropColumn(
                name: "IdLivro",
                table: "Exemplares");

            migrationBuilder.AlterColumn<int>(
                name: "LivroId",
                table: "Exemplares",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Exemplares_Livros_LivroId",
                table: "Exemplares",
                column: "LivroId",
                principalTable: "Livros",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Exemplares_Livros_LivroId",
                table: "Exemplares");

            migrationBuilder.AlterColumn<int>(
                name: "LivroId",
                table: "Exemplares",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddColumn<int>(
                name: "IdLivro",
                table: "Exemplares",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Exemplares_Livros_LivroId",
                table: "Exemplares",
                column: "LivroId",
                principalTable: "Livros",
                principalColumn: "Id");
        }
    }
}

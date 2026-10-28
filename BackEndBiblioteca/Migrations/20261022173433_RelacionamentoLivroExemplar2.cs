using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackEndBiblioteca.Migrations
{
    /// <inheritdoc />
    public partial class RelacionamentoLivroExemplar2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Alugueis_Alugatarios_ClienteId",
                table: "Alugueis");

            migrationBuilder.DropForeignKey(
                name: "FK_Alugueis_Exemplares_ExemplarId",
                table: "Alugueis");

            migrationBuilder.DropIndex(
                name: "IX_Alugueis_ClienteId",
                table: "Alugueis");

            migrationBuilder.DropColumn(
                name: "ClienteId",
                table: "Alugueis");

            migrationBuilder.DropColumn(
                name: "IdAluguel",
                table: "Alugueis");

            migrationBuilder.RenameColumn(
                name: "IdExemplar",
                table: "Alugueis",
                newName: "AlugatarioId");

            migrationBuilder.RenameColumn(
                name: "DataDevolucao",
                table: "Alugueis",
                newName: "DataDevolucaoPrevista");

            migrationBuilder.AlterColumn<string>(
                name: "Status",
                table: "Alugueis",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ExemplarId",
                table: "Alugueis",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddColumn<DateOnly>(
                name: "DataDevolucaoReal",
                table: "Alugueis",
                type: "date",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UsuarioDevolucaoId",
                table: "Alugueis",
                type: "text",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Alugueis_AlugatarioId",
                table: "Alugueis",
                column: "AlugatarioId");

            migrationBuilder.CreateIndex(
                name: "IX_Alugueis_UsuarioDevolucaoId",
                table: "Alugueis",
                column: "UsuarioDevolucaoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Alugueis_Alugatarios_AlugatarioId",
                table: "Alugueis",
                column: "AlugatarioId",
                principalTable: "Alugatarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Alugueis_AspNetUsers_UsuarioDevolucaoId",
                table: "Alugueis",
                column: "UsuarioDevolucaoId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Alugueis_Exemplares_ExemplarId",
                table: "Alugueis",
                column: "ExemplarId",
                principalTable: "Exemplares",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Alugueis_Alugatarios_AlugatarioId",
                table: "Alugueis");

            migrationBuilder.DropForeignKey(
                name: "FK_Alugueis_AspNetUsers_UsuarioDevolucaoId",
                table: "Alugueis");

            migrationBuilder.DropForeignKey(
                name: "FK_Alugueis_Exemplares_ExemplarId",
                table: "Alugueis");

            migrationBuilder.DropIndex(
                name: "IX_Alugueis_AlugatarioId",
                table: "Alugueis");

            migrationBuilder.DropIndex(
                name: "IX_Alugueis_UsuarioDevolucaoId",
                table: "Alugueis");

            migrationBuilder.DropColumn(
                name: "DataDevolucaoReal",
                table: "Alugueis");

            migrationBuilder.DropColumn(
                name: "UsuarioDevolucaoId",
                table: "Alugueis");

            migrationBuilder.RenameColumn(
                name: "DataDevolucaoPrevista",
                table: "Alugueis",
                newName: "DataDevolucao");

            migrationBuilder.RenameColumn(
                name: "AlugatarioId",
                table: "Alugueis",
                newName: "IdExemplar");

            migrationBuilder.AlterColumn<string>(
                name: "Status",
                table: "Alugueis",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<int>(
                name: "ExemplarId",
                table: "Alugueis",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddColumn<int>(
                name: "ClienteId",
                table: "Alugueis",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "IdAluguel",
                table: "Alugueis",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Alugueis_ClienteId",
                table: "Alugueis",
                column: "ClienteId");

            migrationBuilder.AddForeignKey(
                name: "FK_Alugueis_Alugatarios_ClienteId",
                table: "Alugueis",
                column: "ClienteId",
                principalTable: "Alugatarios",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Alugueis_Exemplares_ExemplarId",
                table: "Alugueis",
                column: "ExemplarId",
                principalTable: "Exemplares",
                principalColumn: "Id");
        }
    }
}

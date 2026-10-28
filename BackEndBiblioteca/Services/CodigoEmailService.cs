
using System.Security.Cryptography;
using System.Text;
using BackEndBiblioteca.models;
using Microsoft.EntityFrameworkCore;
using BackEndBiblioteca.Services;

// Ajuste o namespace do BibliotecaContext conforme seu projeto.
using BackEndBiblioteca.Data;

namespace BackEndBiblioteca.Services
{
    public class CodigoEmailService
    {
        private readonly BibliotecaContext _context;
        private readonly EmailSender _emailSender;

        private static readonly TimeSpan Validade =
            TimeSpan.FromMinutes(10);

        private const int MaxTentativas = 5;

        public CodigoEmailService(
            BibliotecaContext context,
            EmailSender emailSender)
        {
            _context = context;
            _emailSender = emailSender;
        }

        public async Task EnviarCodigoAsync(
            UsuarioBiblioteca usuario,
            string finalidade)
        {
            ValidarFinalidade(finalidade);

            if (string.IsNullOrWhiteSpace(usuario.Email))
                throw new InvalidOperationException(
                    "O usuário não possui e-mail cadastrado.");

            // Invalida códigos anteriores ainda não utilizados
            var anteriores = await _context.CodigosEmail
                .Where(c =>
                    c.UsuarioId == usuario.Id &&
                    c.Finalidade == finalidade &&
                    !c.Usado)
                .ToListAsync();

            foreach (var anterior in anteriores)
                anterior.Usado = true;

            var codigo = RandomNumberGenerator
                .GetInt32(0, 1_000_000)
                .ToString("D6");

            var salt = Convert.ToBase64String(
                RandomNumberGenerator.GetBytes(16));

            var registro = new CodigoEmail
            {
                UsuarioId = usuario.Id,
                Salt = salt,
                CodigoHash = GerarHash(codigo, salt),
                Finalidade = finalidade,
                ExpiraEm = DateTime.UtcNow.Add(Validade),
                Tentativas = 0,
                Usado = false,
                CriadoEm = DateTime.UtcNow
            };

            _context.CodigosEmail.Add(registro);
            await _context.SaveChangesAsync();

            var assunto = finalidade == "RecuperarSenha"
                ? "Código para redefinir sua senha - Biblioteca"
                : "Código para alteração de e-mail - Biblioteca";

            var nome = System.Net.WebUtility.HtmlEncode(
                usuario.Nome ?? "usuário");

            var mensagem = $"""
                <h2>Seu código de verificação</h2>
                <p>Olá, {nome}!</p>
                <p>Seu código é:</p>
                <h1>{codigo}</h1>
                <p>Ele expira em 10 minutos e só pode ser utilizado uma vez.</p>
                <p>Se você não solicitou esta operação, ignore esta mensagem.</p>
                """;

            try
            {
                await _emailSender.EnviarAsync(
                    usuario.Email,
                    assunto,
                    mensagem);
            }
            catch
            {
                registro.Usado = true;
                await _context.SaveChangesAsync();
                throw;
            }
        }

        public async Task<bool> ValidarCodigoAsync(
            string usuarioId,
            string codigo,
            string finalidade)
        {
            ValidarFinalidade(finalidade);

            if (string.IsNullOrWhiteSpace(codigo) ||
                codigo.Length != 6 ||
                !codigo.All(char.IsAsciiDigit))
            {
                return false;
            }

            var registro = await _context.CodigosEmail
                .Where(c =>
                    c.UsuarioId == usuarioId &&
                    c.Finalidade == finalidade &&
                    !c.Usado)
                .OrderByDescending(c => c.CriadoEm)
                .FirstOrDefaultAsync();

            if (registro == null)
                return false;

            if (registro.ExpiraEm <= DateTime.UtcNow ||
                registro.Tentativas >= MaxTentativas)
            {
                registro.Usado = true;
                await _context.SaveChangesAsync();
                return false;
            }

            registro.Tentativas++;

            var hashInformado = GerarHash(codigo, registro.Salt);

            var hashOriginal = Convert.FromHexString(
                registro.CodigoHash);

            var hashComparado = Convert.FromHexString(
                hashInformado);

            var valido = CryptographicOperations.FixedTimeEquals(
                hashOriginal, hashComparado);

            if (valido)
                registro.Usado = true;
            else if (registro.Tentativas >= MaxTentativas)
                registro.Usado = true;

            await _context.SaveChangesAsync();

            return valido;
        }

        private static string GerarHash(string codigo, string salt)
        {
            var dados = Encoding.UTF8.GetBytes(
                $"{salt}:{codigo}");

            return Convert.ToHexString(
                SHA256.HashData(dados));
        }

        private static void ValidarFinalidade(string finalidade)
        {
            if (finalidade != "RecuperarSenha" &&
                finalidade != "AlterarEmail")
            {
                throw new ArgumentException(
                    "Finalidade do código inválida.");
            }
        }
    }
}

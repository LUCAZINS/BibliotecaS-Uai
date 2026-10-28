
using System.Net;
using System.Security.Cryptography;
using BackEndBiblioteca.models;
using Microsoft.AspNetCore.Identity;

namespace BackEndBiblioteca.Services
{
    public class IdentityEmailSender : IEmailSender<UsuarioBiblioteca>
    {
        private readonly EmailSender _emailSender;

        public IdentityEmailSender(EmailSender emailSender)
        {
            _emailSender = emailSender;
        }

        public async Task SendConfirmationLinkAsync(
            UsuarioBiblioteca user,
            string email,
            string confirmationLink)
        {
            var linkSeguro = WebUtility.HtmlEncode(confirmationLink);

            await _emailSender.EnviarAsync(
                email,
                "Confirme seu e-mail - Biblioteca",
                $"""
                <h2>Confirmação de e-mail</h2>
                <p>Para confirmar seu endereço, clique abaixo:</p>
                <p><a href="{linkSeguro}">Confirmar e-mail</a></p>
                """);
        }

        public async Task SendPasswordResetCodeAsync(
            UsuarioBiblioteca user,
            string email,
            string resetCode)
        {
            var codigoSeguro = RandomNumberGenerator
                .GetInt32(0, 1_000_000)
                .ToString("D6");;
            var nomeSeguro = WebUtility.HtmlEncode(
                user.Nome ?? "usuário");

            await _emailSender.EnviarAsync(
                email,
                "Recuperação de senha - Biblioteca",
                $"""
                <h2>Recuperação de senha</h2>
                <p>Olá, {nomeSeguro}!</p>
                <p>Seu código de recuperação é:</p>
                <h1>{codigoSeguro}</h1>
                <p>Se você não solicitou essa alteração, ignore este e-mail.</p>
                """);
        }

        public async Task SendPasswordResetLinkAsync(
            UsuarioBiblioteca user,
            string email,
            string resetLink)
        {
            var linkSeguro = WebUtility.HtmlEncode(resetLink);
            var nomeSeguro = WebUtility.HtmlEncode(
                user.Nome ?? "usuário");

            await _emailSender.EnviarAsync(
                email,
                "Redefinição de senha - Biblioteca",
                $"""
                <h2>Redefinição de senha</h2>
                <p>Olá, {nomeSeguro}!</p>
                <p>Clique no link abaixo para redefinir sua senha:</p>
                <p><a href="{linkSeguro}">Redefinir minha senha</a></p>
                <p>Se você não solicitou essa alteração, ignore esta mensagem.</p>
                """);
        }
    }
}

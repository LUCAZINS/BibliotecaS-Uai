
using System.Text;
using System.Net;
using BackEndBiblioteca.models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.WebUtilities;

namespace BackEndBiblioteca.Services
{
    public class ConfirmacaoEmailService
    {
        private readonly UserManager<UsuarioBiblioteca> _userManager;
        private readonly EmailSender _emailSender;
        private readonly IConfiguration _configuration;

        public ConfirmacaoEmailService(
            UserManager<UsuarioBiblioteca> userManager,
            EmailSender emailSender,
            IConfiguration configuration)
        {
            _userManager = userManager;
            _emailSender = emailSender;
            _configuration = configuration;
        }

        public async Task EnviarConfirmacaoAsync(UsuarioBiblioteca usuario)
        {
            if (string.IsNullOrWhiteSpace(usuario.Email))
                throw new InvalidOperationException(
                    "O usuário não possui um e-mail cadastrado.");

            var baseUrl = _configuration["App:BaseUrl"]?.TrimEnd('/');

            if (string.IsNullOrWhiteSpace(baseUrl))
                throw new InvalidOperationException(
                    "Configure App:BaseUrl nos User Secrets.");

            // Gera o token oficial do ASP.NET Identity
            var token = await _userManager
                .GenerateEmailConfirmationTokenAsync(usuario);

            // Codifica o token para que possa ser enviado na URL
            var codigo = WebEncoders.Base64UrlEncode(
                Encoding.UTF8.GetBytes(token));

            var link = $"{baseUrl}/api/Auth/confirmar-email" +
                       $"?userId={Uri.EscapeDataString(usuario.Id)}" +
                       $"&code={Uri.EscapeDataString(codigo)}";

            var nome = WebUtility.HtmlEncode(usuario.Nome ?? "usuário");
            var linkSeguro = WebUtility.HtmlEncode(link);

            var mensagem = $"""
                <h2>Confirmação de e-mail</h2>
                <p>Olá, {nome}!</p>
                <p>Sua conta na biblioteca foi criada.</p>
                <p>Para confirmar seu endereço de e-mail, clique abaixo:</p>
                <p><a href="{linkSeguro}">Confirmar meu e-mail</a></p>
                <p>Se você não esperava este cadastro, ignore esta mensagem.</p>
                """;

            await _emailSender.EnviarAsync(
                usuario.Email,
                "Confirme seu e-mail - Biblioteca",
                mensagem);
        }
    }
}

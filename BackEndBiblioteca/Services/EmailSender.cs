
using System.Net;
using System.Net.Mail;

namespace BackEndBiblioteca.Services
{
    public class EmailSender
    {
        private readonly IConfiguration _configuration;

        public EmailSender(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task EnviarAsync(
            string destinatario,
            string assunto,
            string mensagemHtml)
        {
            var remetente = _configuration["Email:Remetente"];
            var senha = _configuration["Email:SenhaAplicativo"];

            if (string.IsNullOrWhiteSpace(remetente) ||
                string.IsNullOrWhiteSpace(senha))
            {
                throw new InvalidOperationException(
                    "Configure as credenciais de e-mail nos User Secrets.");
            }

            using var email = new MailMessage();
            email.From = new MailAddress(remetente);
            email.To.Add(destinatario);
            email.Subject = assunto;
            email.Body = mensagemHtml;
            email.IsBodyHtml = true;

            using var smtp = new SmtpClient("smtp.gmail.com", 587);
            smtp.EnableSsl = true;
            smtp.Credentials = new NetworkCredential(remetente, senha);

            await smtp.SendMailAsync(email);
        }
    }
}


namespace BackEndBiblioteca.models
{
    public class CodigoEmail
    {
        public int Id { get; set; }

        public string UsuarioId { get; set; } = string.Empty;

        // Hash do código, nunca o código original
        public string CodigoHash { get; set; } = string.Empty;

        public string Salt { get; set; } = string.Empty;

        // Ex.: RecuperarSenha ou AlterarEmail
        public string Finalidade { get; set; } = string.Empty;

        public DateTime ExpiraEm { get; set; }

        public int Tentativas { get; set; }

        public bool Usado { get; set; }

        public DateTime CriadoEm { get; set; } = DateTime.UtcNow;
    }
}

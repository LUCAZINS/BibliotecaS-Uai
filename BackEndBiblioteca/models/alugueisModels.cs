
namespace BackEndBiblioteca.models
{
    public class Alugueis
    {
        public int Id { get; set; }

        public int AlugatarioId { get; set; }
        public Alugatario? Alugatario { get; set; }

        public int ExemplarId { get; set; }
        public Exemplar? Exemplar { get; set; }
        public DateTime DataAluguel { get; set; }
            = DateTime.UtcNow;

        public DateOnly DataDevolucaoPrevista { get; set; }

        public DateTime? DataDevolucaoReal { get; set; }

        public string Status { get; set; } = "Ativo";

        public string? Observacoes { get; set; }

        public string? UsuarioId { get; set; }
        public UsuarioBiblioteca? Usuario { get; set; }
        public string? UsuarioDevolucaoId { get; set; } 
        public UsuarioBiblioteca? UsuarioDevolucao { get; set; }

    }
}

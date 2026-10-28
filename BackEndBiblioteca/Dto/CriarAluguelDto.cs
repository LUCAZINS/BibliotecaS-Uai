using System.ComponentModel.DataAnnotations;

namespace BackEndBiblioteca.Dto
{
    public class CriarAluguelDto
    {
        public int? AlugatarioId { get; set; }

        public string? NomeAlugatario { get; set; }

        public int? ExemplarId { get; set; }

        public string? CodigoBarras { get; set; }

        public string? Observacoes { get; set; }
    }
}
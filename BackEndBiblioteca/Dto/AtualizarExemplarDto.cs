using BackEndBiblioteca.models;

namespace BackEndBiblioteca.Dto
{
    public class AtualizarExemplarDto
    {
        // Informe apenas uma forma de localizar o exemplar
        public int? Id { get; set; }
        public string? CodigoBarrasBusca { get; set; }
        public string? NomeLivro { get; set; }

        // Novos dados do exemplar
        public string? Endereçavel { get; set; }
        public StatusExemplar Status { get; set; }
        public int DiasAluguel { get; set; }
    }
}
using BackEndBiblioteca.models;

namespace BackEndBiblioteca.Dto
{
    public class CriarExemplarDto
    {
        public int? LivroId { get; set; }

        public string? NomeLivro { get; set; }

        public string? CodigoBarras { get; set; }

        public string? Endereçavel { get; set; }

        public StatusExemplar Status { get; set; }
            = StatusExemplar.Disponivel;

        public int DiasAluguel { get; set; }
    }
}
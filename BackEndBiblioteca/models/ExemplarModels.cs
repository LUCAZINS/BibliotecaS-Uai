namespace BackEndBiblioteca.models
{
    public class Exemplar
    {
        public int Id { get; set; }
        public int LivroId { get; set; }
        public LivrosModels? Livro { get; set; }
        public string? CodigoBarras { get; set; }
        public string? Endereçavel { get; set; }
        public  StatusExemplar Status { get; set; }
        public int DiasAluguel { get; set; }
    }
}
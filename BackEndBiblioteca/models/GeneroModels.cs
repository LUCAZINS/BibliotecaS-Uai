namespace BackEndBiblioteca.models
{
    public class GeneroModels
    {
        public int Id { get; set; }
        public string? Nome { get; set; }
        public ICollection<LivrosModels> Livros { get; set; }
            = new List<LivrosModels>();
    }
}
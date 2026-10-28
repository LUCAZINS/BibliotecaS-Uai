namespace BackEndBiblioteca.models
{
    public class LivrosModels
    {
        public int Id { get; set; }
        public string? Titulo { get; set; } 
        public string? Autor { get; set; }
        public string? Grafica { get; set; }
        public string? Sinopse { get; set; }
        public ICollection<GeneroModels> Generos { get; set; } = new List<GeneroModels>();        public string? ISBN { get; set; }
        public string? Editora { get; set; }
        public string? Edicao { get; set; }
        public int AnoPublicacao { get; set; }
        public int Idade { get; set; }
        public ICollection<Exemplar> Exemplares { get; set; }
    = new List<Exemplar>();
    }
}
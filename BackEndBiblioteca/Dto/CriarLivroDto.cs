
using System.ComponentModel.DataAnnotations;

namespace BackEndBiblioteca.Dto
{
    public class CriarLivroDto
    {
        [Required]
        public string Titulo { get; set; } = string.Empty;

        [Required]
        public string Autor { get; set; } = string.Empty;

        public string? Grafica { get; set; }
        public string? Sinopse { get; set; }
        public List<string> Generos { get; set; } = new();     
        public string? ISBN { get; set; }
        public string? Editora { get; set; }
        public string? Edicao { get; set; }

        public int AnoPublicacao { get; set; }
        public int Idade { get; set; }
    }
}

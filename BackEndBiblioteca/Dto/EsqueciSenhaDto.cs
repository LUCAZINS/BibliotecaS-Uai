using System.ComponentModel.DataAnnotations;

namespace BackEndBiblioteca.Dto
{
    public class EsqueciSenhaDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
    }
}
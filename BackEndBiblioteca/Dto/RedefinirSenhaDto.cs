using System.ComponentModel.DataAnnotations;

namespace BackEndBiblioteca.Dto
{
    public class RedefinirSenhaDto
    {
        
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Required]
        [RegularExpression(@"^[0-9]{6}$",
            ErrorMessage = "O código deve conter 6 dígitos.")]
        public string Codigo { get; set; } = string.Empty;

        [Required]
        [MinLength(6)]
        public string NovaSenha { get; set; } = string.Empty;
    }
}

using Microsoft.AspNetCore.Identity;

namespace BackEndBiblioteca.models
{
    public class UsuarioBiblioteca : IdentityUser
    {
        public string? Nome { get; set; }
    }
}

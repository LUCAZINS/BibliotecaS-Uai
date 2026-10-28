using BackEndBiblioteca.models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BackEndBiblioteca.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<UsuarioBiblioteca> _userManager;
        private readonly SignInManager<UsuarioBiblioteca> _signInManager;

        public AuthController(
            UserManager<UsuarioBiblioteca> userManager,
            SignInManager<UsuarioBiblioteca> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }
        [Authorize(Roles = "Admin, Usuario")]
        [HttpGet("teste")]
        public IActionResult Teste()
        {
            return Ok(new
            {
                mensagem = "AuthController funcionando!"
            });
        }  

         [HttpPost("logout")]
        [Authorize]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();

            return Ok(new
            {
                mensagem = "Logout realizado com sucesso."
            });
        }     
    }
    
}
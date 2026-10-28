
using BackEndBiblioteca.Dto;
using BackEndBiblioteca.models;
using BackEndBiblioteca.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BackEndBiblioteca.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [AllowAnonymous]
    public class RecuperacaoSenhaController : ControllerBase
    {
        private readonly UserManager<UsuarioBiblioteca> _userManager;
        private readonly CodigoEmailService _codigoEmailService;
        private readonly ILogger<RecuperacaoSenhaController> _logger;

        public RecuperacaoSenhaController(
            UserManager<UsuarioBiblioteca> userManager,
            CodigoEmailService codigoEmailService,
            ILogger<RecuperacaoSenhaController> logger)
        {
            _userManager = userManager;
            _codigoEmailService = codigoEmailService;
            _logger = logger;
        }

        // POST: api/RecuperacaoSenha/esqueci-senha
        [HttpPost("esqueci-senha")]
        public async Task<IActionResult> EsqueciSenha(
            [FromBody] EsqueciSenhaDto dados)
        {
            var mensagem = new
            {
                mensagem =
                    "Se o e-mail estiver cadastrado, você receberá as instruções de recuperação."
            };

            var usuario = await _userManager.FindByEmailAsync(
                dados.Email.Trim());

            // Não revela se o e-mail está cadastrado.
            if (usuario == null)
                return Ok(mensagem);

            try
            {
                await _codigoEmailService.EnviarCodigoAsync(
                    usuario,
                    "RecuperarSenha");

                return Ok(mensagem);
            }
            catch (Exception ex)
            {
                _logger.LogError(
                    ex,
                    "Erro ao enviar código de recuperação de senha.");

                return StatusCode(500, new
                {
                    mensagem =
                        "Não foi possível enviar o código no momento. Tente novamente mais tarde."
                });
            }
        }

        // POST: api/RecuperacaoSenha/redefinir
        [HttpPost("redefinir")]
        public async Task<IActionResult> RedefinirSenha(
            [FromBody] RedefinirSenhaDto dados)
        {
            var usuario = await _userManager.FindByEmailAsync(
                dados.Email.Trim());

            if (usuario == null)
            {
                return BadRequest(new
                {
                    mensagem = "Código inválido ou expirado."
                });
            }

            var codigoValido =
                await _codigoEmailService.ValidarCodigoAsync(
                    usuario.Id,
                    dados.Codigo,
                    "RecuperarSenha");

            if (!codigoValido)
            {
                return BadRequest(new
                {
                    mensagem = "Código inválido ou expirado."
                });
            }

            // Gera o token interno do Identity.
            var token =
                await _userManager.GeneratePasswordResetTokenAsync(
                    usuario);

            // O Identity valida a senha e armazena seu hash.
            var resultado = await _userManager.ResetPasswordAsync(
                usuario,
                token,
                dados.NovaSenha);

            if (!resultado.Succeeded)
            {
                return BadRequest(new
                {
                    mensagem = "Não foi possível redefinir a senha.",
                    erros = resultado.Errors.Select(e => e.Description)
                });
            }

            return Ok(new
            {
                mensagem = "Senha redefinida com sucesso."
            });
        }
    }
}

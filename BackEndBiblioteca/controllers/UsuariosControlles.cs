
using BackEndBiblioteca.models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using BackEndBiblioteca.Services;
using System.Text;
using Microsoft.AspNetCore.WebUtilities;
using BackEndBiblioteca.Dto;
using Microsoft.EntityFrameworkCore;
namespace BackEndBiblioteca.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuariosController : ControllerBase
    {
        private readonly UserManager<UsuarioBiblioteca> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly ConfirmacaoEmailService _confirmacaoEmailService;        
        public UsuariosController(
            UserManager<UsuarioBiblioteca> userManager,
            RoleManager<IdentityRole> roleManager,
            ConfirmacaoEmailService confirmacaoEmailService)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _confirmacaoEmailService = confirmacaoEmailService;
        }


        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<IActionResult> CriarUsuario(
            [FromBody] CriarUsuarioDto dados)
        {
            if (string.IsNullOrWhiteSpace(dados.Nome) ||
                string.IsNullOrWhiteSpace(dados.Email) ||
                string.IsNullOrWhiteSpace(dados.Senha))
            {
                return BadRequest(new
                {
                    mensagem = "Preencha nome, e-mail e senha."
                });
            }

            if (!await _roleManager.RoleExistsAsync("Usuario"))
            {
                return StatusCode(500, new
                {
                    mensagem = "A função Usuario não existe no banco."
                });
            }

            var email = dados.Email.Trim();

            var usuarioExistente =
                await _userManager.FindByEmailAsync(email);

            if (usuarioExistente != null)
            {
                return Conflict(new
                {
                    mensagem = "Já existe um usuário com esse e-mail."
                });
            }

            var usuario = new UsuarioBiblioteca
            {
                UserName = email,
                Email = email,
                Nome = dados.Nome.Trim(),
                EmailConfirmed = true
            };

            var resultado = await _userManager.CreateAsync(
                usuario,
                dados.Senha
            );

            if (!resultado.Succeeded)
            {
                return BadRequest(new
                {
                    mensagem = "Não foi possível criar o usuário.",
                    erros = resultado.Errors.Select(e => e.Description)
                });
            }

            var resultadoRole = await _userManager.AddToRoleAsync(
                usuario,
                "Usuario"
            );

            if (!resultadoRole.Succeeded)
            {
                await _userManager.DeleteAsync(usuario);

                return StatusCode(500, new
                {
                    mensagem = "Falha ao atribuir a função Usuario.",
                    erros = resultadoRole.Errors.Select(e => e.Description)
                });
            }

            // Gera o token de confirmação do Identity.
            try
            {
                await _confirmacaoEmailService.EnviarConfirmacaoAsync(usuario);
            }
            catch (Exception)
            {
                return StatusCode(503, new
                {
                    mensagem = "Usuário criado, mas não foi possível enviar o e-mail de confirmação.",
                    id = usuario.Id,
                    email = usuario.Email,
                    orientacao = "Verifique a configuração do e-mail e tente novamente."
                });
            }

            var funcoes = await _userManager.GetRolesAsync(usuario);

            return Created(
                $"/api/Usuarios/{usuario.Id}",
                new
                {
                    mensagem = "Usuário criado! Um link de confirmação foi enviado por e-mail.",
                    id = usuario.Id,
                    nome = usuario.Nome,
                    email = usuario.Email,
                    funcoes = funcoes
                }
            );
        }
    
                
        
        [HttpGet("me")]
        [Authorize]
        public async Task<IActionResult> MeuUsuario()
        {
            var usuario = await _userManager.GetUserAsync(User);

            if (usuario == null)
            {
                return NotFound(new
                {
                    mensagem = "Usuário não encontrado."
                });
            }

            var funcoes = await _userManager.GetRolesAsync(usuario);

            return Ok(new
            {
                id = usuario.Id,
                nome = usuario.Nome,
                email = usuario.Email,
                emailConfirmado = usuario.EmailConfirmed,
                funcoes = funcoes
            });
        }

        
        [Authorize(Roles = "Admin")]
        [HttpGet("{id}")]
        public async Task<IActionResult> BuscarPorId(string id)
        {
            var usuario = await _userManager.FindByIdAsync(id);

            if (usuario == null)
            {
                return NotFound(new
                {
                    mensagem = "Usuário não encontrado."
                });
            }

            var funcoes = await _userManager.GetRolesAsync(usuario);

            return Ok(new
            {
                id = usuario.Id,
                nome = usuario.Nome,
                email = usuario.Email,
                emailConfirmado = usuario.EmailConfirmed,
                funcoes
            });
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("buscar")]
        public async Task<IActionResult> BuscarPorNome(
            [FromQuery] string nome)
        {
            if (string.IsNullOrWhiteSpace(nome))
            {
                return BadRequest(new
                {
                    mensagem = "Informe o nome para realizar a busca."
                });
            }

            var usuarios = await _userManager.Users
                .Where(u => u.Nome != null &&
                            u.Nome.ToLower().Contains(nome.Trim().ToLower()))
                .Select(u => new
                {
                    id = u.Id,
                    nome = u.Nome,
                    email = u.Email,
                    emailConfirmado = u.EmailConfirmed
                })
                .ToListAsync();

            if (usuarios.Count == 0)
            {
                return NotFound(new
                {
                    mensagem = "Nenhum usuário encontrado com esse nome."
                });
            }

            return Ok(usuarios);
        }





        [Authorize(Roles = "Admin")]
        [HttpPut("{identificador}")]
        public async Task<IActionResult> AtualizarUsuario(
            string identificador,
            [FromBody] AtualizarUsuarioDto dados)
        {
            if (string.IsNullOrWhiteSpace(identificador))
            {
                return BadRequest(new
                {
                    mensagem = "Informe o ID ou nome do usuário."
                });
            }

            if (string.IsNullOrWhiteSpace(dados.Nome))
            {
                return BadRequest(new
                {
                    mensagem = "Preencha o nome."
                });
            }

            var usuario = await _userManager.FindByIdAsync(identificador);

            if (usuario == null)
            {
                var usuariosEncontrados = await _userManager.Users
                    .Where(u => u.Nome != null &&
                        u.Nome.ToLower() == identificador.Trim().ToLower())
                    .Take(2)
                    .ToListAsync();

                if (usuariosEncontrados.Count > 1)
                {
                    return Conflict(new
                    {
                        mensagem = "Existem vários usuários com esse nome. Utilize o ID."
                    });
                }

                usuario = usuariosEncontrados.FirstOrDefault();
            }

            if (usuario == null)
            {
                return NotFound(new
                {
                    mensagem = "Usuário não encontrado."
                });
            }

            usuario.Nome = dados.Nome.Trim();

            var resultado = await _userManager.UpdateAsync(usuario);

            if (!resultado.Succeeded)
            {
                return BadRequest(new
                {
                    mensagem = "Não foi possível atualizar o usuário.",
                    erros = resultado.Errors.Select(e => e.Description)
                });
            }

            return Ok(new
            {
                mensagem = "Usuário atualizado com sucesso.",
                id = usuario.Id,
                nome = usuario.Nome
            });
        }




        [Authorize(Roles = "Admin,Usuario")]
        [HttpPut("me")]
        public async Task<IActionResult> AtualizarMeuUsuario(
            [FromBody] AtualizarUsuarioDto dados)
        {
            if (string.IsNullOrWhiteSpace(dados.Nome))
            {
                return BadRequest(new
                {
                    mensagem = "Preencha o nome."
                });
            }

            var usuario = await _userManager.GetUserAsync(User);

            if (usuario == null)
            {
                return NotFound(new
                {
                    mensagem = "Usuário não encontrado."
                });
            }

            usuario.Nome = dados.Nome.Trim();

            var resultado = await _userManager.UpdateAsync(usuario);

            if (!resultado.Succeeded)
            {
                return BadRequest(new
                {
                    mensagem = "Não foi possível atualizar seus dados.",
                    erros = resultado.Errors.Select(e => e.Description)
                });
            }

            return Ok(new
            {
                mensagem = "Seus dados foram atualizados com sucesso.",
                id = usuario.Id,
                nome = usuario.Nome
            });
        }

    }

    

}

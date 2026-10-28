using BackEndBiblioteca.Data;
using BackEndBiblioteca.Services;
using BackEndBiblioteca.Dto;
using BackEndBiblioteca.models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackEndBiblioteca.controllers
{
    [Authorize(Roles = "Admin, Usuario")]
    [ApiController]
    [Route("api/Exemplares/[controller]")]
    public class ExemplarControllers : ControllerBase
    {
        private readonly BibliotecaContext _context;
        private readonly CodigoBarrasService _codigoBarrasService;

        public ExemplarControllers(
            BibliotecaContext context,
            CodigoBarrasService codigoBarrasService)
        {
            _context = context;
            _codigoBarrasService = codigoBarrasService;
        }

        [HttpPost("/postExemplar")]
        public async Task<IActionResult> CriarExemplar(
            [FromBody] CriarExemplarDto dados)
        {
            bool temId = dados.LivroId.HasValue;
            bool temNome = !string.IsNullOrWhiteSpace(dados.NomeLivro);

            if (temId == temNome)
            {
                return BadRequest(new
                {
                    mensagem = "Informe somente o ID ou o nome do livro."
                });
            }

            LivrosModels? livro;

            if (temId)
            {
                livro = await _context.Livros
                    .FirstOrDefaultAsync(l => l.Id == dados.LivroId!.Value);
            }
            else
            {
                var nome = dados.NomeLivro!.Trim();

                var livrosEncontrados = await _context.Livros
                    .Where(l => l.Titulo != null &&
                        EF.Functions.ILike(l.Titulo, nome))
                    .Take(2)
                    .ToListAsync();

                if (livrosEncontrados.Count > 1)
                {
                    return BadRequest(new
                    {
                        mensagem = "Existem vários livros com esse título. Informe o ID do livro."
                    });
                }

                livro = livrosEncontrados.FirstOrDefault();
            }

            if (livro == null)
            {
                return NotFound(new
                {
                    mensagem = "Livro não encontrado."
                });
            }

            if (dados.DiasAluguel <= 0)
            {
                return BadRequest(new
                {
                    mensagem = "Os dias de empréstimo devem ser maiores que zero."
                });
            }

            if (!Enum.IsDefined(typeof(StatusExemplar), dados.Status))
            {
                return BadRequest(new
                {
                    mensagem = "Status do exemplar inválido."
                });
            }

            var exemplar = new Exemplar
            {
                LivroId = livro.Id,
                Endereçavel = dados.Endereçavel?.Trim(),
                Status = dados.Status,
                DiasAluguel = dados.DiasAluguel
            };

            // Salva o exemplar para obter o ID gerado pelo banco
            _context.Exemplares.Add(exemplar);

            await _context.SaveChangesAsync();

            // Gera o código de barras usando o ID
            exemplar.CodigoBarras =
                _codigoBarrasService.GerarCodigo(exemplar.Id);

            // Salva o código de barras no banco
            await _context.SaveChangesAsync();

            return Created("/postExemplar", new
            {
                mensagem = "Exemplar cadastrado com sucesso.",
                exemplar.Id,
                LivroId = livro.Id,
                NomeLivro = livro.Titulo,
                exemplar.CodigoBarras,
                exemplar.Endereçavel,
                exemplar.Status,
                exemplar.DiasAluguel
            });
        }

        [HttpGet("/getExemplares")]
        public async Task<IActionResult> BuscarTodosExemplares()
        {
            var exemplares = await _context.Exemplares
                .AsNoTracking()
                .Select(e => new
                {
                    e.Id,
                    e.LivroId,
                    NomeLivro = e.Livro!.Titulo,
                    e.CodigoBarras,
                    e.Endereçavel,
                    e.Status,
                    e.DiasAluguel
                })
                .ToListAsync();

            return Ok(exemplares);
        }



        [HttpGet("/getExemplar/{codigoBarras}")]
        public async Task<IActionResult> BuscarExemplarPorCodigoBarras(string codigoBarras)
        {
            if (string.IsNullOrWhiteSpace(codigoBarras))
            {
                return BadRequest(new
                {
                    mensagem = "Informe o código de barras."
                });
            }

            codigoBarras = codigoBarras.Trim();

            var exemplar = await _context.Exemplares
                .AsNoTracking()
                .Where(e => e.CodigoBarras == codigoBarras)
                .Select(e => new
                {
                    e.Id,
                    e.CodigoBarras,
                    e.Endereçavel,
                    e.Status,
                    e.DiasAluguel,

                    Livro = new
                    {
                        e.LivroId,
                        Titulo = e.Livro!.Titulo,
                        Autor = e.Livro.Autor,
                        ISBN = e.Livro.ISBN,
                        Sinopse = e.Livro.Sinopse,
                        Generos = e.Livro.Generos.Select(g => new
                        {
                            g.Id,
                            g.Nome
                        })

                    }
                })
                .FirstOrDefaultAsync();

            if (exemplar == null)
            {
                return NotFound(new
                {
                    mensagem = "Nenhum exemplar encontrado com esse código de barras."
                });
            }

            return Ok(exemplar);
        }

       
[HttpPut("/putExemplar")]
public async Task<IActionResult> AtualizarExemplarInteligente(
    [FromBody] AtualizarExemplarDto dados)
{
    // Verifica qual identificador foi informado
    bool porId = dados.Id.HasValue;
    bool porCodigo = !string.IsNullOrWhiteSpace(
        dados.CodigoBarrasBusca);
    bool porNome = !string.IsNullOrWhiteSpace(
        dados.NomeLivro);

    int formasBusca = (porId ? 1 : 0)
                    + (porCodigo ? 1 : 0)
                    + (porNome ? 1 : 0);

    if (formasBusca != 1)
    {
        return BadRequest(new
        {
            mensagem = "Informe somente o ID, o código de barras ou o nome do livro."
        });
    }
    

    Exemplar? exemplar;

    // Busca pelo ID do exemplar
    if (porId)
    {
        exemplar = await _context.Exemplares
            .FirstOrDefaultAsync(e => e.Id == dados.Id!.Value);
    }
    // Busca pelo código de barras atual
    else if (porCodigo)
    {
        string codigoBusca = dados.CodigoBarrasBusca!.Trim();

        exemplar = await _context.Exemplares
            .FirstOrDefaultAsync(e =>
                e.CodigoBarras == codigoBusca);
    }
    // Busca pelo título do livro
    else
    {
        string nome = dados.NomeLivro!.Trim();

        var encontrados = await _context.Exemplares
            .Where(e => e.Livro != null &&
                e.Livro.Titulo != null &&
                EF.Functions.ILike(e.Livro.Titulo, nome))
            .Take(2)
            .ToListAsync();

        if (encontrados.Count > 1)
        {
            return Conflict(new
            {
                mensagem = "Há vários exemplares desse livro. Informe o ID ou o código de barras para identificar a cópia exata."
            });
        }

        exemplar = encontrados.FirstOrDefault();
    }

    if (exemplar == null)
{
    return NotFound(new
    {
        mensagem = "Exemplar não encontrado."
    });
}

// Impede qualquer alteração em exemplares emprestados.
        if (exemplar.Status == StatusExemplar.Emprestado)
        {
            return BadRequest(new
            {
                mensagem = "Não é possível alterar um exemplar que está emprestado. Registre a devolução antes de realizar alterações."
            });
        }

    // Valida os dados novos
    if (dados.DiasAluguel <= 0)
    {
        return BadRequest(new
        {
            mensagem = "Os dias de aluguel devem ser maiores que zero."
        });
    }

    if (!Enum.IsDefined(typeof(StatusExemplar), dados.Status))
    {
        return BadRequest(new
        {
            mensagem = "Status do exemplar inválido."
        });
    }

    // Atualiza os dados do exemplar
    exemplar.Endereçavel = dados.Endereçavel?.Trim();
    exemplar.DiasAluguel = dados.DiasAluguel;

    // Gera um código somente se o exemplar ainda não possuir um.
    if (string.IsNullOrWhiteSpace(exemplar.CodigoBarras))
    {
        exemplar.CodigoBarras =
            _codigoBarrasService.GerarCodigo(exemplar.Id);
    }

    exemplar.Status = dados.Status;

    await _context.SaveChangesAsync();

    return Ok(new
    {
        mensagem = "Exemplar atualizado com sucesso.",
        exemplar.Id,
        exemplar.LivroId,
        exemplar.CodigoBarras,
        exemplar.Endereçavel,
        exemplar.Status,
        exemplar.DiasAluguel
    });
}
    
        [HttpDelete("/deleteExemplar")]
        public async Task<IActionResult> ExcluirExemplar(
            [FromBody] ExcluirExemplarDto dados)
        {
            // Validar o critério de busca
            int criterios = 0;

            if (dados.Id.HasValue)
                criterios++;

            if (!string.IsNullOrWhiteSpace(dados.CodigoBarras))
                criterios++;

            if (!string.IsNullOrWhiteSpace(dados.NomeLivro))
                criterios++;

            if (criterios != 1)
            {
                return BadRequest(new
                {
                    mensagem = "Informe somente um critério: Id, CodigoBarras ou NomeLivro."
                });
            }

            var consulta = _context.Exemplares
                .Include(e => e.Livro)
                .AsQueryable();

            Exemplar? exemplar;

            if (dados.Id.HasValue)
            {
                exemplar = await consulta.FirstOrDefaultAsync(
                    e => e.Id == dados.Id.Value);
            }
            else if (!string.IsNullOrWhiteSpace(dados.CodigoBarras))
            {
                string codigo = dados.CodigoBarras.Trim();

                exemplar = await consulta.FirstOrDefaultAsync(
                    e => e.CodigoBarras == codigo);
            }
            else
            {
                string nome = dados.NomeLivro!.Trim();

                var exemplares = await consulta
                    .Where(e => e.Livro != null &&
                        EF.Functions.ILike(e.Livro.Titulo ?? "", nome))
                    .Take(2)
                    .ToListAsync();

                if (exemplares.Count > 1)
                {
                    return Conflict(new
                    {
                        mensagem = "Este livro possui vários exemplares. Informe o ID ou o código de barras."
                    });
                }

                exemplar = exemplares.FirstOrDefault();
            }

            if (exemplar == null)
            {
                return NotFound(new
                {
                    mensagem = "Exemplar não encontrado."
                });
            }

            
            bool possuiAluguel = await _context.Alugueis
                .AnyAsync(a => a.ExemplarId == exemplar.Id);

            if (possuiAluguel)
            {
                return Conflict(new
                {
                    mensagem = "Não é possível excluir este exemplar porque ele possui histórico de aluguéis."
                });
            }

            _context.Exemplares.Remove(exemplar);

            await _context.SaveChangesAsync();

            return Ok(new
            {
                mensagem = "Exemplar excluído com sucesso.",
                exemplar.Id,
                exemplar.CodigoBarras,
                Livro = exemplar.Livro?.Titulo
            });
        }


    }
}
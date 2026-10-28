using BackEndBiblioteca.Data;
using BackEndBiblioteca.Dto;
using BackEndBiblioteca.models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;



namespace BackEndBiblioteca.controllers
{
    [Authorize(Roles = "Admin, Usuario")]
    [ApiController]
    [Route("api/Livros/[controller]")]
    public class LivrosController : ControllerBase
    {

        private readonly BibliotecaContext _context;
        private readonly IMemoryCache _cache;

        public LivrosController(BibliotecaContext context, IMemoryCache cache)
        {
            _context = context;
            _cache = cache;
        }


       
        [HttpPost("/postlivro")]
        public async Task<IActionResult> CriarLivro([FromBody] CriarLivroDto dados)
        {
            if (string.IsNullOrWhiteSpace(dados.Titulo) ||
                string.IsNullOrWhiteSpace(dados.Autor))
            {
                return BadRequest(new
                {
                    mensagem = "Título e autor são obrigatórios."
                });
            }

            if (dados.AnoPublicacao < 0 || dados.Idade < 0)
            {
                return BadRequest(new
                {
                    mensagem = "Ano de publicação e idade não podem ser negativos."
                });
            }

            // Remove espaços e gêneros repetidos.
            var nomesGeneros = dados.Generos
                .Where(g => !string.IsNullOrWhiteSpace(g))
                .Select(g => g.Trim())
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .ToList();

            var generos = new List<GeneroModels>();

            foreach (var nome in nomesGeneros)
            {
                // Procura o gênero no banco, sem diferenciar
                // letras maiúsculas de minúsculas.
                var genero = await _context.Generos
                    .FirstOrDefaultAsync(g =>
                        EF.Functions.ILike(g.Nome, nome));

                // Se não existir, cria um novo.
                if (genero == null)
                {
                    genero = new GeneroModels
                    {
                        Nome = nome
                    };

                    _context.Generos.Add(genero);
                }

                // Adiciona o gênero à lista do livro.
                generos.Add(genero);
            }

            var livro = new LivrosModels
            {
                Titulo = dados.Titulo.Trim(),
                Autor = dados.Autor.Trim(),
                Grafica = dados.Grafica,
                Sinopse = dados.Sinopse,
                ISBN = dados.ISBN,
                Editora = dados.Editora,
                Edicao = dados.Edicao,
                AnoPublicacao = dados.AnoPublicacao,
                Idade = dados.Idade,

                // Relacionamento muitos-para-muitos.
                Generos = generos
            };

            _context.Livros.Add(livro);

            await _context.SaveChangesAsync();

            _cache.Remove("lista_livros");

            return CreatedAtAction(
                nameof(CriarLivro),
                new { id = livro.Id },
                new
                {
                    mensagem = "Livro cadastrado com sucesso.",
                    livro.Id,
                    livro.Titulo,
                    livro.Autor,
                    Generos = livro.Generos.Select(g => new
                    {
                        g.Id,
                        g.Nome
                    })
                });
        }



    
    
        [HttpPut("/put={id:int}")]
        public async Task<IActionResult> AtualizarLivro(int id, [FromBody] CriarLivroDto dados)
        {
            var livro = await _context.Livros
                .Include(l => l.Generos)
                .FirstOrDefaultAsync(l => l.Id == id);

            if (livro == null)
            {
                return NotFound(new
                {
                    mensagem = "Livro não encontrado."
                });
            }

            if (string.IsNullOrWhiteSpace(dados.Titulo) ||
                string.IsNullOrWhiteSpace(dados.Autor))
            {
                return BadRequest(new
                {
                    mensagem = "Título e autor são obrigatórios."
                });
            }

            if (dados.AnoPublicacao < 0 || dados.Idade < 0)
            {
                return BadRequest(new
                {
                    mensagem = "Ano de publicação e idade não podem ser negativos."
                });
            }

            // Atualiza os dados do livro.
            livro.Titulo = dados.Titulo.Trim();
            livro.Autor = dados.Autor.Trim();
            livro.Grafica = dados.Grafica;
            livro.Sinopse = dados.Sinopse;
            livro.ISBN = dados.ISBN;
            livro.Editora = dados.Editora;
            livro.Edicao = dados.Edicao;
            livro.AnoPublicacao = dados.AnoPublicacao;
            livro.Idade = dados.Idade;

            // Normaliza e remove gêneros repetidos.
            var nomesGeneros = (dados.Generos ?? new List<string>())
                .Where(g => !string.IsNullOrWhiteSpace(g))
                .Select(g => g.Trim())
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .ToList();

            var generos = new List<GeneroModels>();

            foreach (var nome in nomesGeneros)
            {
                var genero = await _context.Generos
                    .FirstOrDefaultAsync(g =>
                        EF.Functions.ILike(g.Nome, nome));

                if (genero == null)
                {
                    genero = new GeneroModels
                    {
                        Nome = nome
                    };

                    _context.Generos.Add(genero);
                }

                generos.Add(genero);
            }

            // Substitui as associações anteriores.
            livro.Generos.Clear();

            foreach (var genero in generos)
            {
                livro.Generos.Add(genero);
            }

            await _context.SaveChangesAsync();

            _cache.Remove("lista_livros");
            return Ok(new
            {
                mensagem = "Livro atualizado com sucesso.",
                livro.Id,
                livro.Titulo,
                livro.Autor,
                Generos = livro.Generos.Select(g => new
                {
                    g.Id,
                    g.Nome
                })
            });
        }

        

       [HttpGet]
        public async Task<IActionResult> BuscarTodosLivros()
        {

            const string chave = "lista_livros";
            if (_cache.TryGetValue(chave, out List<object> livrosCache))
            {
                return Ok(livrosCache );
            }


            var livros = await _context.Livros
                .AsNoTracking()
                .Include(l => l.Generos)
                .Include(l => l.Exemplares)
                .Select(l => new
                {
                    l.Id,
                    l.Titulo,
                    l.Autor,
                    l.Sinopse,
                    l.ISBN,
                    l.Editora,
                    l.Grafica,
                    l.Edicao,
                    l.AnoPublicacao,
                    l.Idade,

                    Generos = l.Generos.Select(g => new
                    {
                        g.Id,
                        g.Nome
                    }),

                    Exemplares = l.Exemplares.Select(e => new
                    {
                        e.Id,
                        e.CodigoBarras,
                        e.Status,
                        e.Endereçavel,
                        e.DiasAluguel,
                    }),

                    TotalExemplares = l.Exemplares.Count(),

                    ExemplaresDisponiveis = l.Exemplares.Count(e =>
                        e.Status == StatusExemplar.Disponivel)
                })
                .ToListAsync();


            var opcoes = new MemoryCacheEntryOptions()
                .SetSlidingExpiration(TimeSpan.FromMinutes(10) );
             _cache.Set(chave, livros, opcoes);

            return Ok(livros);
        }

        
        
        [HttpGet("buscarinteligente")]
        public async Task<IActionResult> BuscarLivros([FromQuery] string busca)
        {
            if (string.IsNullOrWhiteSpace(busca))
            {
                return BadRequest(new
                {
                    mensagem = "Informe um termo para realizar a busca."
                });
            }

            busca = busca.Trim();

            bool buscaNumerica = int.TryParse(busca, out int numero);

            var livros = await _context.Livros
                .AsNoTracking()
                .Include(l => l.Generos)
                .Where(l =>
                    EF.Functions.ILike(
                        l.Titulo ?? string.Empty, $"%{busca}%") ||

                    EF.Functions.ILike(
                        l.Autor ?? string.Empty, $"%{busca}%") ||

                    EF.Functions.ILike(
                        l.Sinopse ?? string.Empty, $"%{busca}%") ||

                    EF.Functions.ILike(
                        l.Editora ?? string.Empty, $"%{busca}%") ||

                    EF.Functions.ILike(
                        l.Grafica ?? string.Empty, $"%{busca}%") ||

                    EF.Functions.ILike(
                        l.ISBN ?? string.Empty, $"%{busca}%") ||

                    EF.Functions.ILike(
                        l.Edicao ?? string.Empty, $"%{busca}%") ||

                    l.Generos.Any(g =>
                        EF.Functions.ILike(
                            g.Nome ?? string.Empty, $"%{busca}%")) ||
                    l.Exemplares.Any(e =>
                    EF.Functions.ILike(
                        e.CodigoBarras ?? string.Empty,
                        $"%{busca}%")) ||

                    (buscaNumerica &&
                    (l.AnoPublicacao == numero ||
                    l.Idade == numero))
                )
                .OrderBy(l => l.Titulo)
                .Select(l => new
                {
                    l.Id,
                    l.Titulo,
                    l.Autor,
                    l.Sinopse,
                    l.ISBN,
                    l.Editora,
                    l.Grafica,
                    l.Edicao,
                    l.AnoPublicacao,
                    l.Idade,
                    Exemplares = l.Exemplares.Select(e => new
                    {
                        e.Id,
                        e.LivroId,
                        e.CodigoBarras,
                        e.Endereçavel,
                        e.Status,
                        e.DiasAluguel,
                    }),

                    Generos = l.Generos.Select(g => new
                    {
                        g.Id,
                        g.Nome
                    })
                })
                .ToListAsync();

            return Ok(livros);
        }

    
        [HttpDelete("/deleteLivro")]
        public async Task<IActionResult> ExcluirLivro( [FromBody] ExcluirLivroDto dados)
        {
            // Validar se foi informado exatamente um critério
            int criterios = 0;

            if (dados.Id.HasValue)
                criterios++;

            if (!string.IsNullOrWhiteSpace(dados.Titulo))
                criterios++;

            if (!string.IsNullOrWhiteSpace(dados.ISBN))
                criterios++;

            if (!string.IsNullOrWhiteSpace(dados.CodigoBarras))
                criterios++;

            if (criterios != 1)
            {
                return BadRequest(new
                {
                    mensagem = "Informe somente um critério: Id, Titulo, ISBN ou CodigoBarras."
                });
            }

            var consulta = _context.Livros.AsQueryable();

            LivrosModels? livro;

            if (dados.Id.HasValue)
            {
                livro = await consulta.FirstOrDefaultAsync(
                    l => l.Id == dados.Id.Value);
            }
            else if (!string.IsNullOrWhiteSpace(dados.Titulo))
            {
                string titulo = dados.Titulo.Trim();

                var livros = await consulta
                    .Where(l => EF.Functions.ILike(
                        l.Titulo ?? string.Empty, titulo))
                    .Take(2)
                    .ToListAsync();

                if (livros.Count > 1)
                {
                    return Conflict(new
                    {
                        mensagem = "Existem vários livros com esse título. Informe o ID ou ISBN."
                    });
                }

                livro = livros.FirstOrDefault();
            }
            else if (!string.IsNullOrWhiteSpace(dados.ISBN))
            {
                string isbn = dados.ISBN.Trim();

                livro = await consulta.FirstOrDefaultAsync(
                    l => l.ISBN == isbn);
            }
            else
            {
                string codigo = dados.CodigoBarras!.Trim();

                var exemplares = await _context.Exemplares
                    .Where(e => e.CodigoBarras == codigo)
                    .Select(e => e.LivroId)
                    .Distinct()
                    .Take(2)
                    .ToListAsync();

                if (exemplares.Count == 0)
                {
                    return NotFound(new
                    {
                        mensagem = "Nenhum livro foi encontrado com esse código de barras."
                    });
                }

                if (exemplares.Count > 1)
                {
                    return Conflict(new
                    {
                        mensagem = "O código de barras está associado a mais de um livro."
                    });
                }

                livro = await consulta.FirstOrDefaultAsync(
                    l => l.Id == exemplares[0]);
            }

            if (livro == null)
            {
                return NotFound(new
                {
                    mensagem = "Livro não encontrado."
                });
            }

            // Não permitir excluir livros que possuam exemplares
            bool possuiExemplares = await _context.Exemplares
                .AnyAsync(e => e.LivroId == livro.Id);

            if (possuiExemplares)
            {
                return Conflict(new
                {
                    mensagem = "Não é possível excluir este livro porque ele possui exemplares cadastrados. Remova ou regularize os exemplares primeiro."
                });
            }

            // Remover os relacionamentos com gêneros
            livro.Generos.Clear();

            _context.Livros.Remove(livro);

            await _context.SaveChangesAsync();
            
            _cache.Remove("lista_livros");

            return Ok(new
            {
                mensagem = "Livro excluído com sucesso.",
                livro.Id,
                livro.Titulo,
                livro.ISBN
            });
        }


    }

}
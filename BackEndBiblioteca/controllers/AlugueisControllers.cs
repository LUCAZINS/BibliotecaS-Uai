
using BackEndBiblioteca.Data;
using BackEndBiblioteca.Dto;
using BackEndBiblioteca.models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace BackEndBiblioteca.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin,Usuario")]
    public class AlugueisController : ControllerBase
    {
        private readonly BibliotecaContext _context;
        private readonly UserManager<UsuarioBiblioteca> _userManager;

        public AlugueisController(
            BibliotecaContext context,
            UserManager<UsuarioBiblioteca> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        // Listar todos os empréstimos
        [HttpGet]
        public async Task<IActionResult> Listar()
        {
            var alugueis = await _context.Set<Alugueis>()
                .AsNoTracking()
                .Include(a => a.Alugatario)
                .Include(a => a.Exemplar)
                    .ThenInclude(e => e!.Livro)
                .Include(a => a.Usuario)
                .Include(a => a.UsuarioDevolucao)
                .Select(a => new
                {
                    a.Id,
                    a.AlugatarioId,
                    NomeLocatario = a.Alugatario!.Nome,
                    a.ExemplarId,
                    CodigoBarras = a.Exemplar!.CodigoBarras,
                    Livro = a.Exemplar.Livro!.Titulo,
                    a.DataAluguel,
                    a.DataDevolucaoPrevista,
                    a.DataDevolucaoReal,
                    a.Status,
                    a.Observacoes,
                    UsuarioResponsavel = a.Usuario != null
                        ? a.Usuario.Nome : null,
                    UsuarioDevolucao = a.UsuarioDevolucao != null
                        ? a.UsuarioDevolucao.UserName : null
                })
                .ToListAsync();

            return Ok(alugueis);
        }

        // Buscar empréstimo por ID
        [HttpGet("{id:int}")]
        public async Task<IActionResult> BuscarPorId(int id)
        {
            var aluguel = await _context.Set<Alugueis>()
                .AsNoTracking()
                .Where(a => a.Id == id)
                .Select(a => new
                {
                    a.Id,
                    a.AlugatarioId,
                    NomeLocatario = a.Alugatario!.Nome,
                    a.ExemplarId,
                    CodigoBarras = a.Exemplar!.CodigoBarras,
                    a.DataAluguel,
                    a.DataDevolucaoPrevista,
                    a.DataDevolucaoReal,
                    a.Status,
                    a.Observacoes,
                    UsuarioResponsavel = a.Usuario != null
                        ? a.Usuario.Nome : null,
                    UsuarioDevolucao = a.UsuarioDevolucao != null
                        ? a.UsuarioDevolucao.UserName : null
                })
                .FirstOrDefaultAsync();

            if (aluguel == null)
            {
                return NotFound(new
                {
                    mensagem = "Empréstimo não encontrado."
                });
            }

            return Ok(aluguel);
        }

        // Listar empréstimos de um locatário
        [HttpGet("locatario/{alugatarioId:int}")]
        public async Task<IActionResult> ListarPorLocatario(
            int alugatarioId)
        {
            var locatario = await _context.Set<Alugatario>()
                .AnyAsync(a => a.Id == alugatarioId);

            if (!locatario)
            {
                return NotFound(new
                {
                    mensagem = "Locatário não encontrado."
                });
            }

            var alugueis = await _context.Set<Alugueis>()
                .AsNoTracking()
                .Include(a => a.Alugatario)
                .Where(a => a.AlugatarioId == alugatarioId)
                .OrderByDescending(a => a.DataAluguel)
                .Select(a => new
                {
                    a.Id,
                    a.ExemplarId,
                    CodigoBarras = a.Exemplar!.CodigoBarras,
                    a.DataAluguel,
                    a.DataDevolucaoPrevista,
                    a.DataDevolucaoReal,
                    a.Status,
                    a.Observacoes
                })
                .ToListAsync();

            return Ok(alugueis);
        }

        // Registrar empréstimo
        [HttpPost]
        public async Task<IActionResult> Criar(
            [FromBody] CriarAluguelDto dados)
        {
            // Validar se foi informado somente o ID ou nome do locatário
            bool temIdLocatario = dados.AlugatarioId.HasValue;

            bool temNomeLocatario =
                !string.IsNullOrWhiteSpace(dados.NomeAlugatario);

            if (temIdLocatario == temNomeLocatario)
            {
                return BadRequest(new
                {
                    mensagem = "Informe somente o ID ou o nome do locatário."
                });
            }

            // Validar se foi informado somente o ID ou código de barras do exemplar
            bool temIdExemplar = dados.ExemplarId.HasValue;

            bool temCodigoBarras =
                !string.IsNullOrWhiteSpace(dados.CodigoBarras);

            if (temIdExemplar == temCodigoBarras)
            {
                return BadRequest(new
                {
                    mensagem = "Informe somente o ID ou o código de barras do exemplar."
                });
            }

            // Buscar usuário autenticado
            var usuario = await _userManager.GetUserAsync(User);

            if (usuario == null)
            {
                return Unauthorized(new
                {
                    mensagem = "Usuário autenticado não encontrado."
                });
            }

            // Buscar locatário pelo ID ou nome
            Alugatario? locatario;

            if (temIdLocatario)
            {
                locatario = await _context.Set<Alugatario>()
                    .FirstOrDefaultAsync(
                        a => a.Id == dados.AlugatarioId!.Value);
            }
            else
            {
                var nome = dados.NomeAlugatario!.Trim();

                var locatarios = await _context.Set<Alugatario>()
                    .Where(a => a.Nome != null && a.Nome.ToLower() == nome.ToLower())
                    .Take(2)
                    .ToListAsync();

                if (locatarios.Count > 1)
                {
                    return BadRequest(new
                    {
                        mensagem = "Existem vários locatários com esse nome. Informe o ID para identificar a pessoa corretamente."
                    });
                }

                locatario = locatarios.FirstOrDefault();
            }

            if (locatario == null)
            {
                return NotFound(new
                {
                    mensagem = "Locatário não encontrado."
                });
            }

            // Buscar exemplar pelo ID ou código de barras
            var consulta = _context.Set<Exemplar>()
                .Include(e => e.Livro)
                .AsQueryable();

            Exemplar? exemplar;

            if (temIdExemplar)
            {
                exemplar = await consulta.FirstOrDefaultAsync(
                    e => e.Id == dados.ExemplarId!.Value);
            }
            else
            {
                var codigo = dados.CodigoBarras!.Trim();

                exemplar = await consulta.FirstOrDefaultAsync(
                    e => e.CodigoBarras == codigo);
            }

            if (exemplar == null)
            {
                return NotFound(new
                {
                    mensagem = "Exemplar não encontrado."
                });
            }

            // Validar disponibilidade do exemplar
            if (exemplar.Status != StatusExemplar.Disponivel)
            {
                return Conflict(new
                {
                    mensagem = "O exemplar não está disponível para empréstimo."
                });
            }

            // Validar prazo de empréstimo
            if (exemplar.DiasAluguel <= 0)
            {
                return BadRequest(new
                {
                    mensagem = "O prazo de empréstimo deve ser maior que zero."
                });
            }

            // Iniciar transação
            await using var transacao =
                await _context.Database.BeginTransactionAsync(
                    IsolationLevel.Serializable);

            try
            {
                var exemplarAtual = await _context.Set<Exemplar>()
                    .FirstOrDefaultAsync(e => e.Id == exemplar.Id);

                if (exemplarAtual == null)
                {
                    return NotFound(new
                    {
                        mensagem = "Exemplar não encontrado."
                    });
                }

                if (exemplarAtual.Status != StatusExemplar.Disponivel)
                {
                    return Conflict(new
                    {
                        mensagem = "O exemplar não está disponível para empréstimo."
                    });
                }

                var possuiEmprestimoAtivo = await _context.Set<Alugueis>()
                    .AnyAsync(a => a.ExemplarId == exemplar.Id &&
                        a.Status == "Ativo");

                if (possuiEmprestimoAtivo)
                {
                    return Conflict(new
                    {
                        mensagem = "Já existe um empréstimo ativo para este exemplar."
                    });
                }

                var hoje = DateOnly.FromDateTime(DateTime.Now);
                var aluguel = new Alugueis
                {
                    AlugatarioId = locatario.Id,
                    ExemplarId = exemplar.Id,
                    DataAluguel = DateTime.UtcNow,
                    DataDevolucaoPrevista = DateOnly
                        .FromDateTime(DateTime.UtcNow)
                        .AddDays(exemplar.DiasAluguel),
                    DataDevolucaoReal = null,
                    Status = "Ativo",
                    Observacoes = dados.Observacoes,
                    UsuarioId = usuario.Id
                };

                // Atualizar status do exemplar
                exemplarAtual.Status = StatusExemplar.Emprestado;

                // Salvar empréstimo
                _context.Set<Alugueis>().Add(aluguel);

                await _context.SaveChangesAsync();

                await transacao.CommitAsync();

                // Retornar resultado
                return CreatedAtAction(
                    nameof(BuscarPorId),
                    new { id = aluguel.Id },
                    new
                    {
                        mensagem = "Empréstimo registrado com sucesso.",

                        aluguel.Id,

                        aluguel.AlugatarioId,
                        NomeLocatario = locatario.Nome,

                        aluguel.ExemplarId,
                        CodigoBarras = exemplarAtual.CodigoBarras,
                        Livro = exemplar.Livro?.Titulo,

                        aluguel.DataAluguel,
                        aluguel.DataDevolucaoPrevista,
                        aluguel.Status,
                        aluguel.Observacoes,

                        UsuarioResponsavel = usuario.Nome
                    });
            }
            catch
            {
                await transacao.RollbackAsync();
                throw;
            }
        }

        // Registrar devolução
        [HttpPut("devolver")]
        public async Task<IActionResult> Devolver(
            [FromBody] IdentificarExemplarDto dados)
        {
            bool temId = dados.ExemplarId.HasValue;
            bool temCodigo = !string.IsNullOrWhiteSpace(dados.CodigoBarras);

            if (temId == temCodigo)
            {
                return BadRequest(new
                {
                    mensagem = "Informe somente o ID do exemplar ou o código de barras."
                });
            }

            var usuario = await _userManager.GetUserAsync(User);

            if (usuario == null)
                return Unauthorized(new
                {
                    mensagem = "Usuário autenticado não encontrado."
                });

            var consulta = _context.Set<Alugueis>()
                .Include(a => a.Exemplar)
                .Where(a => a.Status == "Ativo");

            Alugueis? aluguel;

            if (temId)
            {
                aluguel = await consulta.FirstOrDefaultAsync(
                    a => a.ExemplarId == dados.ExemplarId!.Value);
            }
            else
            {
                var codigo = dados.CodigoBarras!.Trim();

                aluguel = await consulta.FirstOrDefaultAsync(
                    a => a.Exemplar != null &&
                        a.Exemplar.CodigoBarras == codigo);
            }

            if (aluguel == null)
            {
                return NotFound(new
                {
                    mensagem = "Não foi encontrado empréstimo ativo para esse exemplar."
                });
            }

            if (aluguel.Exemplar == null)
            {
                return BadRequest(new
                {
                    mensagem = "O exemplar associado não foi encontrado."
                });
            }

            await using var transacao =
                await _context.Database.BeginTransactionAsync(
                    IsolationLevel.Serializable);

            try
            {
                if (aluguel.Status != "Ativo" ||
                    aluguel.Exemplar.Status != StatusExemplar.Emprestado)
                {
                    return Conflict(new
                    {
                        mensagem = "Este empréstimo já foi devolvido."
                    });
                }

                aluguel.DataDevolucaoReal =
                    DateTime.UtcNow;

                aluguel.Status = "Devolvido";
                aluguel.UsuarioDevolucaoId = usuario.Id;
                aluguel.Exemplar.Status = StatusExemplar.Disponivel;

                await _context.SaveChangesAsync();
                await transacao.CommitAsync();

                return Ok(new
                {
                    mensagem = "Devolução registrada com sucesso.",
                    aluguel.Id,
                    aluguel.ExemplarId,
                    CodigoBarras = aluguel.Exemplar.CodigoBarras,
                    aluguel.DataDevolucaoReal,
                    aluguel.Status
                });
            }
            catch
            {
                await transacao.RollbackAsync();
                throw;
            }
        }
    }
}

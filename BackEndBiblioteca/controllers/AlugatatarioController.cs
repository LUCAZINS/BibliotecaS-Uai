using BackEndBiblioteca.Data;
using BackEndBiblioteca.models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackEndBiblioteca.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin,Usuario")]
    public class AlugatarioController : ControllerBase
    {
        private readonly BibliotecaContext _context;

        public AlugatarioController(BibliotecaContext context)
        {
            _context = context;
        }

        // Listar todos os locatários
        [HttpGet]
        public async Task<IActionResult> Listar()
        {
            var locatarios = await _context.Alugatarios.ToListAsync();

            return Ok(locatarios);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> BuscarPorId(int id)
        {
            var locatario = await _context.Alugatarios.FindAsync(id);

            if (locatario == null)
                return NotFound("Locatário não encontrado.");

            return Ok(locatario);
        }

        [HttpPost]
        public async Task<IActionResult> Criar([FromBody] Alugatario locatario)
        {
            if (string.IsNullOrEmpty(locatario.CPF))
            {
                return BadRequest(new
                {
                    mensagem = "O CPF do locatário não pode ser nulo."
                });
            }

            var verificarCPF = await _context.Alugatarios
                .FirstOrDefaultAsync(l => l.CPF == locatario.CPF);
                
            if (verificarCPF != null)
            {
                return BadRequest(new
                {
                    mensagem = "O CPF do locatário já está cadastrado."
                });
            }

            _context.Alugatarios.Add(locatario);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(BuscarPorId),
                new { id = locatario.Id },
                locatario
            );
        }

        
[HttpGet("buscarPorCpf/{cpf}")]
public async Task<IActionResult> BuscarPorCpf(string cpf)
{
    if (string.IsNullOrWhiteSpace(cpf))
    {
        return BadRequest(new
        {
            mensagem = "Informe o CPF do locatário."
        });
    }

    // Permite pesquisar com CPF formatado ou somente números.
    var cpfNormalizado = new string(
        cpf.Where(char.IsDigit).ToArray()
    );

    if (cpfNormalizado.Length != 11)
    {
        return BadRequest(new
        {
            mensagem = "O CPF deve conter 11 dígitos."
        });
    }

    var locatario = await _context.Alugatarios
        .AsNoTracking()
        .FirstOrDefaultAsync(a =>
            a.CPF == cpfNormalizado ||
            a.CPF == cpf
        );

    if (locatario == null)
    {
        return NotFound(new
        {
            mensagem = "Nenhum locatário foi encontrado com esse CPF."
        });
    }

    return Ok(locatario);
}

        [HttpPut("{id}")]
        public async Task<IActionResult> Atualizar(
            int id,
            [FromBody] Alugatario dados)
        {

            var verificarCPF = await _context.Alugatarios
                .FirstOrDefaultAsync(l => l.CPF == dados.CPF);
                
            if (verificarCPF != null)
            {
                return BadRequest(new
                {
                    mensagem = "O CPF do locatário já está cadastrado."
                });
            }

            var locatario = await _context.Alugatarios.FindAsync(id);

            if (locatario == null)
                return NotFound("Locatário não encontrado.");

            locatario.Nome = dados.Nome;
            locatario.Email = dados.Email;
            locatario.Telefone = dados.Telefone;
            locatario.Endereco = dados.Endereco;
            locatario.CPF = dados.CPF;
            locatario.DataNascimento = dados.DataNascimento;
            locatario.LivrosAlugados = dados.LivrosAlugados;

            await _context.SaveChangesAsync();

            return Ok(locatario);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Excluir(int id)
        {
            var locatario = await _context.Alugatarios.FindAsync(id);

            if (locatario == null)
                return NotFound("Locatário não encontrado.");

            _context.Alugatarios.Remove(locatario);
            await _context.SaveChangesAsync();

            return NoContent();
        }



        
        [HttpGet("{id}/estatisticas")]
        public async Task<IActionResult> BuscarEstatisticas(int id)
        {
            var locatario = await _context.Alugatarios
                .AsNoTracking()
                .FirstOrDefaultAsync(l => l.Id == id);

            if (locatario == null)
            {
                return NotFound(new
                {
                    mensagem = "Locatário não encontrado."
                });
            }



            var alugueis = await _context.Alugueis
                .AsNoTracking()
                .Where(a => a.AlugatarioId == id)
                .Include(a => a.Exemplar)
                    .ThenInclude(e => e.Livro)
                .ToListAsync();

            var livroMaisEmprestado = alugueis
                .Where(a => a.Exemplar?.Livro?.Titulo != null)
                .GroupBy(a => a.Exemplar!.Livro!.Titulo)
                .Select(g => new
                {
                    Titulo = g.Key,
                    Quantidade = g.Count()
                })
                .OrderByDescending(g => g.Quantidade)
                .ThenBy(g => g.Titulo)
                .FirstOrDefault();

            var primeiroAluguel = alugueis
                .OrderBy(a => a.DataAluguel)
                .FirstOrDefault();

            var ultimoAluguel = alugueis
                .OrderByDescending(a => a.DataAluguel)
                .FirstOrDefault();

            var emprestimosAtivos = alugueis.Count(a =>
                string.Equals(
                    a.Status,
                    "Ativo",
                    StringComparison.OrdinalIgnoreCase));

            var emprestimosDevolvidos = alugueis.Count(a =>
                string.Equals(
                    a.Status,
                    "Devolvido",
                    StringComparison.OrdinalIgnoreCase));

            return Ok(new
            {
                // Dados cadastrais
                locatario.Id,
                locatario.Nome,
                locatario.Email,
                locatario.Telefone,
                locatario.Endereco,
                locatario.CPF,
                locatario.DataNascimento,

                // Estatísticas
                TotalEmprestimos = alugueis.Count,
                EmprestimosAtivos = emprestimosAtivos,
                EmprestimosDevolvidos = emprestimosDevolvidos,

                PrimeiroEmprestimo = primeiroAluguel?.DataAluguel,
                UltimoEmprestimo = ultimoAluguel?.DataAluguel,

                LivroMaisEmprestado = livroMaisEmprestado == null
                    ? null
                    : new
                    {
                        livroMaisEmprestado.Titulo,
                        livroMaisEmprestado.Quantidade
                    }
            });
        }

    }
    

}
using BackEndBiblioteca.models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BackEndBiblioteca.Data
{
    public class BibliotecaContext
        : IdentityDbContext<UsuarioBiblioteca>
    {
        public BibliotecaContext(
            DbContextOptions<BibliotecaContext> options)
            : base(options)
        {
        }

        public DbSet<Alugatario> Alugatarios { get; set; }
        public DbSet<Alugueis> Alugueis { get; set; }
        public DbSet<CodigoEmail> CodigosEmail { get; set; }
        public DbSet<LivrosModels> Livros { get; set; }
        public DbSet<GeneroModels> Generos { get; set; }
        public DbSet<Exemplar> Exemplares { get; set; }

        protected override void OnModelCreating(
            ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Evita gêneros duplicados
            builder.Entity<GeneroModels>()
                .HasIndex(g => g.Nome)
                .IsUnique();

            // Relacionamento entre livros e gêneros
            builder.Entity<LivrosModels>()
                .HasMany(l => l.Generos)
                .WithMany(g => g.Livros)
                .UsingEntity(j =>
                    j.ToTable("LivroGeneros"));

            // Um livro pode possuir vários exemplares
            builder.Entity<Exemplar>()
                .HasOne(e => e.Livro)
                .WithMany(l => l.Exemplares)
                .HasForeignKey(e => e.LivroId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
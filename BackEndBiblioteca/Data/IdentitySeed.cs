
using BackEndBiblioteca.models;
using Microsoft.AspNetCore.Identity;

namespace BackEndBiblioteca.Data
{
    public static class IdentitySeed
    {
        public static async Task SeedAsync(
            IServiceProvider services,
            IConfiguration configuration)
        {
            using var scope = services.CreateScope();

            var roleManager = scope.ServiceProvider
                .GetRequiredService<RoleManager<IdentityRole>>();

            var userManager = scope.ServiceProvider
                .GetRequiredService<UserManager<UsuarioBiblioteca>>();

            // Cria as funções caso ainda não existam.
            string[] roles = { "Admin", "Usuario" };

            foreach (var role in roles)
            {
                if (!await roleManager.RoleExistsAsync(role))
                {
                    var resultado = await roleManager.CreateAsync(
                        new IdentityRole(role));

                    if (!resultado.Succeeded)
                    {
                        throw new Exception(
                            $"Erro ao criar a função {role}: " +
                            string.Join(", ",
                                resultado.Errors.Select(e => e.Description)));
                    }
                }
            }

            // Obtém as credenciais da configuração segura.
            var email = configuration["Admin:Email"];
            var senha = configuration["Admin:Password"];

            if (string.IsNullOrWhiteSpace(email) ||
                string.IsNullOrWhiteSpace(senha))
            {
                throw new InvalidOperationException(
                    "Configure Admin:Email e Admin:Password.");
            }

            // Não duplica o administrador se ele já existir.
            var admin = await userManager.FindByEmailAsync(email);

            if (admin == null)
            {
                admin = new UsuarioBiblioteca
                {
                    UserName = email,
                    Email = email,
                    Nome = "Administrador",
                    EmailConfirmed = true
                };

                var resultado = await userManager.CreateAsync(admin, senha);

                if (!resultado.Succeeded)
                {
                    throw new Exception(
                        "Erro ao criar administrador: " +
                        string.Join(", ",
                            resultado.Errors.Select(e => e.Description)));
                }
            }

            // Garante que a conta tenha a função Admin.
            if (!await userManager.IsInRoleAsync(admin, "Admin"))
            {
                var resultado = await userManager.AddToRoleAsync(
                    admin, "Admin");

                if (!resultado.Succeeded)
                {
                    throw new Exception(
                        "Erro ao atribuir função Admin: " +
                        string.Join(", ",
                            resultado.Errors.Select(e => e.Description)));
                }
            }
        }
    }
}

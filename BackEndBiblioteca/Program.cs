using BackEndBiblioteca.Data;
using BackEndBiblioteca.models;
using BackEndBiblioteca.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Controllers
builder.Services.AddControllers();

// Cache em memória
builder.Services.AddMemoryCache();

// Banco de dados PostgreSQL
builder.Services.AddDbContext<BibliotecaContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString(
            "ConexaoBiblioteca")));

// Identity
builder.Services
    .AddIdentityApiEndpoints<UsuarioBiblioteca>()
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<BibliotecaContext>();

builder.Services.AddAuthorization();

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Serviços de e-mail
builder.Services.AddSingleton<EmailSender>();

builder.Services.AddSingleton<
    IEmailSender<UsuarioBiblioteca>,
    IdentityEmailSender>();

// Serviços da aplicação
builder.Services.AddScoped<ConfirmacaoEmailService>();
builder.Services.AddScoped<CodigoEmailService>();
builder.Services.AddScoped<CodigoBarrasService>();

// CORS para Angular
builder.Services.AddCors(options =>
{
    options.AddPolicy("LiberarAngular", policy =>
    {
        policy
            .WithOrigins("http://localhost:4200", "http://127.0.0.1:4200")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

var app = builder.Build();

// Swagger
app.UseSwagger();
app.UseSwaggerUI();

// Pipeline HTTP
app.UseHttpsRedirection();

app.UseCors("LiberarAngular");

app.UseAuthentication();
app.UseAuthorization();

// Seed do Identity
await IdentitySeed.SeedAsync(
    app.Services,
    app.Configuration);

// Rotas
app.MapControllers();

var auth = app.MapGroup("/api/auth");
auth.MapIdentityApi<UsuarioBiblioteca>();

app.Run();
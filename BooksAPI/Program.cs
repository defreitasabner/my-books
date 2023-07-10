using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using BooksAPI.Data;
using BooksAPI.Models;
using BooksAPI.Services;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("BookConnection");
builder.Services.AddDbContext<MyBooksContext>(
    opts => opts.UseLazyLoadingProxies().UseMySql(
        connectionString,
        ServerVersion.AutoDetect(connectionString)
        )
);
builder.Services.AddDbContext<UserContext>(
    opts => opts.UseLazyLoadingProxies().UseMySql(
        connectionString,
        ServerVersion.AutoDetect(connectionString)
    )
);

builder.Services
    .AddIdentity<User, IdentityRole>()
        .AddEntityFrameworkStores<UserContext>()
            .AddDefaultTokenProviders(); 

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddScoped<AuthenticationService>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(opt =>
    opt.AddDefaultPolicy(
        builder =>
        {
            builder.WithOrigins("http://localhost:3000")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
        }
    )
);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors();

app.Run();

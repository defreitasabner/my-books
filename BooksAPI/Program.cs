using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using BooksAPI.Data;
using BooksAPI.Models;
using BooksAPI.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using BooksAPI.Authorizations;
using Microsoft.AspNetCore.Authorization;

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
builder.Services.AddScoped<TokenService>();
builder.Services.AddSingleton<IAuthorizationHandler, SignedInAuthorization>();

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
builder.Services.AddAuthentication(opts => 
{
    opts.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(opts => 
{
    opts.TokenValidationParameters = 
        new Microsoft.IdentityModel.Tokens.TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes("4hbo2ihhrjm2oihr1koj321op2j31poi2j3o")
                ),
                ValidateAudience = false,
                ValidateIssuer = false,
                ClockSkew = TimeSpan.Zero
            };

});
builder.Services.AddAuthorization(opts => 
{
    opts.AddPolicy(
        "LoginRequired",
        policy => policy.AddRequirements(new SignIn(true))
    );
}
);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.UseCors();

app.Run();

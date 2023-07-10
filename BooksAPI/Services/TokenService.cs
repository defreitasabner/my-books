using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using BooksAPI.Models;

namespace BooksAPI.Services;

public class TokenService
{
    public string GenerateToken(User user)
    {
        Claim[] claims = new Claim[]
        {
            new Claim("id", user.Id),
            new Claim("username", user.UserName)
        };

        var key = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes("4hbo2ihhrjm2oihr1koj321op2j31poi2j3o")
        );

        var signingCredentials = new SigningCredentials(
            key,
            SecurityAlgorithms.HmacSha256
        );

        var token = new JwtSecurityToken(
          expires: DateTime.Now.AddMinutes(60),
          claims: claims,
          signingCredentials: signingCredentials  
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
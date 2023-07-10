using System.ComponentModel.DataAnnotations;

namespace BooksAPI.Data.Dtos;

public class CreateUserDto
{
    [Required]
    public string Username { get; set; }

    [Required]
    public string Email { get; set; }

    [Required]
    [DataType(DataType.Password)]
    public string Password { get; set; }

    [Required]
    [Compare("Password")]
    public string PasswordCheck { get; set; }
}
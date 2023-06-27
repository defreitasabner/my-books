using System.ComponentModel.DataAnnotations;

namespace BooksAPI.Data.Dtos;

public class CreateAuthorDto
{
    [Required]
    [StringLength(200, ErrorMessage = "Author's Name could have less than 200 characters.")]
    public string Name { get; set; }
}
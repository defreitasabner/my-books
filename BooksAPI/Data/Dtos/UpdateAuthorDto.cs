using System.ComponentModel.DataAnnotations;

namespace BooksAPI.Data.Dtos;

public class UpdateAuthorDto
{
    [Required]
    [StringLength(200, ErrorMessage = "Author's 'name' couldn't have more than 200 characters.")]
    public string Name { get; set; }
}
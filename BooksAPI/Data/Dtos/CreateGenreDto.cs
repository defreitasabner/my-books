using System.ComponentModel.DataAnnotations;

namespace BooksAPI.Data.Dtos;

public class CreateGenreDto
{
    [Required]
    [StringLength(150, ErrorMessage = "Genre's name couldn't have more than 150 characters.")]
    public string Name { get; set; }
}
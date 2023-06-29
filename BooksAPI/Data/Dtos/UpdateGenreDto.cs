using System.ComponentModel.DataAnnotations;

namespace BooksAPI.Data.Dtos;

public class UpdateGenreDto
{
    [Required]
    public string Name { get; set; }
}
using System.ComponentModel.DataAnnotations;

namespace BooksAPI.Data.Dtos;

public class CreateGenreDto
{
    [Required]
    public string Name { get; set; }
}
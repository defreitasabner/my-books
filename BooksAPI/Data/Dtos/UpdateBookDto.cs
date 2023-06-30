using System.ComponentModel.DataAnnotations;

namespace BooksAPI.Data.Dtos;

public class UpdateBookDto
{
    [Required(ErrorMessage = "The field 'title' is required")]
    [StringLength(300, ErrorMessage = "The field 'title' has max length of 300 characters.")]
    public string Title { get; set; }

    [Required(ErrorMessage = "The field 'authorsId' is required")]
    public List<int> AuthorsId { get; set;}

    [Required(ErrorMessage = "The field 'genresId' is required")]
    public List<int> GenresId { get; set;}
}
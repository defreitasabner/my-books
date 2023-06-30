namespace BooksAPI.Data.Dtos;

public class ReadBookDto
{
    public int Id { get; set; }
    
    public string Title { get; set; }
    
    public ICollection<ReadAuthorDto> Authors { get; set; }

    public ICollection<ReadGenreDto> Genres { get; set; }
}
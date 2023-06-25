namespace BookAPI.Data.Dtos;

public class ReadBookDto
{
    public string Id { get; set; }
    
    public string Title { get; set; }
    
    public string Author { get; set; }

    public string Gender { get; set; }
    
    public int PageNumber { get; set; }
}
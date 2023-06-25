using Microsoft.EntityFrameworkCore;

using BookAPI.Models;

namespace BookAPI.Data;

public class BookContext : DbContext
{
    public BookContext(DbContextOptions<BookContext> opts)
        : base(opts)
    {

    }

    public DbSet<Book> Books { get; set; }
    
}
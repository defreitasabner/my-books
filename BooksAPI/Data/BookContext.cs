using Microsoft.EntityFrameworkCore;

using BooksAPI.Models;

namespace BooksAPI.Data;

public class BookContext : DbContext
{
    public BookContext(DbContextOptions<BookContext> opts)
        : base(opts)
    {

    }

    public DbSet<Book> Books { get; set; }
    
}
using Microsoft.EntityFrameworkCore;

using BooksAPI.Models;

namespace BooksAPI.Data;

public class MyBooksContext : DbContext
{
    public MyBooksContext(DbContextOptions<MyBooksContext> opts)
        : base(opts)
    {

    }

    public DbSet<Book> Books { get; set; }
    public DbSet<Author> Authors { get; set; }
}
using Microsoft.EntityFrameworkCore;

using BooksAPI.Models;

namespace BooksAPI.Data;

public class MyBooksContext : DbContext
{
    public MyBooksContext(DbContextOptions<MyBooksContext> opts)
        : base(opts)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<Book>()
            .HasMany(book => book.Authors)
            .WithMany(author => author.Books)
            .UsingEntity<BookAuthor>();

        builder.Entity<Book>()
            .HasMany(book => book.Genres)
            .WithMany(genre => genre.Books)
            .UsingEntity<BookGenre>();
    }

    public DbSet<Book> Books { get; set; }
    public DbSet<Author> Authors { get; set; }
    public DbSet<Genre> Genres { get; set; }
    public DbSet<BookAuthor> BookAuthors { get; set; }
    public DbSet<BookGenre> BookGenres { get; set; }
}
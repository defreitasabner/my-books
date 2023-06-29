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
            .UsingEntity<AuthorBook>(
                left => left.HasOne(left => left.Author).WithMany().HasForeignKey(authorbook => authorbook.AuthorId),
                right => right.HasOne(right => right.Book).WithMany().HasForeignKey(authorbook => authorbook.BookId) 
            );

        builder.Entity<Book>()
            .HasMany(book => book.Genres)
            .WithMany(genre => genre.Books)
            .UsingEntity<GenreBook>(
                left => left.HasOne(left => left.Genre).WithMany().HasForeignKey(authorbook => authorbook.GenreId),
                right => right.HasOne(right => right.Book).WithMany().HasForeignKey(authorbook => authorbook.BookId)
            );
    }

    public DbSet<Book> Books { get; set; }
    public DbSet<Author> Authors { get; set; }
    public DbSet<Genre> Genres { get; set; }
}
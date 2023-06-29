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
        // Many-to-Many with class for join entity
        builder.Entity<Author>()
            .HasMany(author => author.Books)
            .WithMany(book => book.Authors)
            .UsingEntity<Authorship>(
                right => right.HasOne<Book>().WithMany().HasForeignKey(authorship => authorship.BookId),
                left => left.HasOne<Author>().WithMany().HasForeignKey(authorship => authorship.AuthorId)
            );
        
        // Many-to-Many basic (without class to represent join table)
        builder.Entity<Book>()
            .HasMany(book => book.Genres)
            .WithMany(genre => genre.Books)
            .UsingEntity(
                "BookGenre",
                left => left.HasOne(typeof(Book)).WithMany().HasForeignKey("BookId").HasPrincipalKey(nameof(Book.Id)),
                right => right.HasOne(typeof(Genre)).WithMany().HasForeignKey("GenreId").HasPrincipalKey(nameof(Genre.Id)),
                join => join.HasKey("BookId", "GenreId")
            );
    }

    public DbSet<Book> Books { get; set; }
    public DbSet<Author> Authors { get; set; }
    public DbSet<Authorship> Authorships { get; set; }
}
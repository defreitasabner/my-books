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
            .UsingEntity<Authorship>(
                book => book.HasOne<Book>().WithMany().HasForeignKey(authorship => authorship.BookId),
                author => author.HasOne<Author>().WithMany().HasForeignKey(authorship => authorship.AuthorId)
            );
    }

    public DbSet<Book> Books { get; set; }
    public DbSet<Author> Authors { get; set; }
    public DbSet<Authorship> Authorships { get; set; }
}
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using BooksAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BooksAPI.Data;

public class UserContext : IdentityDbContext<User>
{
    public UserContext(DbContextOptions<UserContext> opts) : base(opts) {}
}
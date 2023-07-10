using Microsoft.AspNetCore.Authorization;

namespace BooksAPI.Authorizations;

public class SignIn : IAuthorizationRequirement
{
    public bool SignedIn { get; set ; }

    public SignIn(bool isSignedIn)
    {
        SignedIn = isSignedIn;
    }
}
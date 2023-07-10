using Microsoft.AspNetCore.Authorization;

namespace BooksAPI.Authorizations;

public class SignedInAuthorization : AuthorizationHandler<SignIn>
{
    protected override Task HandleRequirementAsync(
        AuthorizationHandlerContext context, 
        SignIn requirement
    )
    {
        var info = context.User.FindFirst(claim => claim.Type == "username");
        if(info == null) return Task.CompletedTask;
        context.Succeed(requirement);
        return Task.CompletedTask;
    }
}
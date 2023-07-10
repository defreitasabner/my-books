using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using AutoMapper;

using BooksAPI.Data.Dtos;
using BooksAPI.Models;
using BooksAPI.Services;

namespace BooksAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private AuthenticationService _authService;

    public UserController(AuthenticationService auth)
    {
        _authService = auth;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(CreateUserDto userDto)
    {
        await _authService.RegisterNewUser(userDto);
        return Ok("User registered successfully!");
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginUserDto userDto)
    {
        await _authService.LoginUser(userDto);
        return Ok("User login successfully!");
    }
}
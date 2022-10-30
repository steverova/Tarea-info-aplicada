using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.AccessControl;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options => options.AddPolicy("corspolicy", build =>
{
    build.WithOrigins(
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002", 
        "https://informatica-aplicada.github.io").AllowAnyHeader().AllowAnyMethod();
}));

//builder.Configuration.AddJsonFile("appsettings.json");
//var key = builder.Configuration.GetSection("Jwt").GetSection("Key").ToString();

// var key = "infoAplicadaSecretKey123!";

// builder.Services.AddAuthentication(x =>
// {

//     x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
//     x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
// }).AddJwtBearer(x =>
// {
//     x.RequireHttpsMetadata = false;
//     x.SaveToken = true;
//     x.TokenValidationParameters = new TokenValidationParameters
//     {
//         ValidateIssuerSigningKey = true,
//         IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(key)),
//         ValidateIssuer = false,
//         ValidateAudience = false
//     };
// });

var app = builder.Build();
app.UseCors("corspolicy");



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();


app.Run();

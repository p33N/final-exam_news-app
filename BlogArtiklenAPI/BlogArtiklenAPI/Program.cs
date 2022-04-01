using BlogArtiklenAPI.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var planetScaleConnectionString = builder.Configuration["ConnectionStrings:PlanetScaleConnectionString"];
builder.Services.AddDbContextPool<PlanetScaleDbContext>
    (options => options.UseMySql(planetScaleConnectionString, ServerVersion.AutoDetect(planetScaleConnectionString)));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/", () => "Hello world from API");

app.MapGet("/users", async (PlanetScaleDbContext db) =>
    await db.Users.ToListAsync());

app.MapPost("/users", async (User user, PlanetScaleDbContext db) =>
{
    db.Users.Add(user);
    await db.SaveChangesAsync();

    return Results.Created($"/users/{user.Id}", user);
});

app.MapPut("/users/{id}", async (int id, User inputUser, PlanetScaleDbContext db) =>
{
    var todo = await db.Users.FindAsync(id);

    if (todo is null) return Results.NotFound();

    todo.Name = inputUser.Name;

    await db.SaveChangesAsync();

    return Results.NoContent();
});

app.MapDelete("/todoitems/{id}", async (int id, PlanetScaleDbContext db) =>
{
    if (await db.Users.FindAsync(id) is User user)
    {
        db.Users.Remove(user);
        await db.SaveChangesAsync();
        return Results.Ok(user);
    }

    return Results.NotFound();
});

app.Run();

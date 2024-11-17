using Microsoft.AspNetCore.Mvc; // Allows us to use certain HTTP methods and Controller attributes 

[ApiController] //Tells the program that this will be a Controller route
[Route("api/[controller]")] // Sets the path for this controller to api/book, (removes the Controller from file name)
public class BookController : ControllerBase { //Tells us that this new Controller class extends ControllerBase

    // Initiating an inline memory
    public static List<Book> _books = new List<Book> {
        new Book {Id = 1, Author = "Rakibul Bhuiyan", Title="C# Backend Guide", Pages=12},
        new Book {Id = 2, Author = "Rakibul Bhuiyan", Title="Javascript Backend Guide", Pages=345}
    };

    [HttpGet]
    public ActionResult<IEnumerable<Book>> getBooks() {
        return Ok(_books);
    }

    [HttpGet("{id}")]
    public ActionResult<Book> getBookById(int Id) {
        var book = _books.FirstOrDefault(p => p.Id == Id);
        if (book != null) {
            return Ok(book);
        } else{
            return NotFound();
        }

    }

    // Creating a book
    [HttpPost]
    public ActionResult<Book> createBook([FromBody] Book book) {
        book.Id = _books.Count + 1;
        _books.Add(book);
        return CreatedAtAction(nameof(getBookById), new {Id = book.Id}, book);
    }

    // Editing a book
    [HttpPut("{id}")]
    public IActionResult Update(int Id, [FromBody] Book book) {

        var foundBook = _books.FirstOrDefault(book => book.Id == Id);
        if (foundBook == null) {
            return NotFound();
        }
        
        foundBook.Author = book.Author;
        foundBook.Pages = book.Pages;
        foundBook.Title = book.Title;

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int Id) {
        var foundBook = _books.FirstOrDefault(book => book.Id == Id);
        if (foundBook == null){
            return NotFound();
        }
        _books.Remove(foundBook);
        return NoContent();
    }   
}

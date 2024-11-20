using System.ComponentModel.DataAnnotations;

public class Book {
    public int Id {get; set;}
    [Required]
    public string Title {get; set;} = string.Empty;
    [Required]
    public string Author {get; set;} = string.Empty;
    [Required]
    public int Pages {get; set;}
}
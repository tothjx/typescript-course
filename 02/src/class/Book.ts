/*
Book class

Tulajdonságok:
    id: egyedi azonosító, string
    title: könyv címe, string
    author: szerző, string
    price: ár, number

Metódusok:
    Konstruktor a könyv létrehozásához az összes szükséges információval
*/

export class Book
{
    public bookId: string;
    public title: string;
    public author: string;
    public price: number;

    constructor (bookId: string, title: string, author: string, price: number)
    {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

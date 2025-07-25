/*
User class

Tulajdonságok:
    userId: egyedi azonosító, string
    name: név, string
    email: email cím, string

Metódusok:
    Konstruktor a felhasználó létrehozásához az összes szükséges információval
    borrowBook(library: Library, bookId: string): Könyv kölcsönzése a könyvtárból
*/

import { Book } from "./Book";
import { Library } from "./Library";

export class User
{
    public userId: string;
    public name: string;
    public email: string;
    private _books: Book[];

    constructor (userId: string, name: string, email: string) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this._books = [];
    }

    // konyv kolcsonzese a konyvtarbol
    // ez ugy lenne szep ha a konyvtar strukturajaban szerepelne
    // hogy kinel milyen konyv van de ettol itt eltekintettem
    // egyszeruen csak kiveszem a library.books-bol a konyvet
    // es bekerul a user.books-ba
    borrowBook(library: Library, bookId: string): void
    {
        let borrBook: Book = library.books.filter(i => i.bookId === bookId);

        this._books.push(borrBook);
        library.removeBookById(bookId);
    }

    // kilistazom a felhasznalo altal kikolcsonzott konyveket 
    public listBorrowedBooks(): void
    {
        console.log(
            'A felhasználónál lévő könyvek:',
            this._books
        );
    }
}

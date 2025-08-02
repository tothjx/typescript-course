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
    // es bekerul a user._books-ba
    public borrowBook(library: Library, bookId: string): void
    {
        let book: Book[] = library.books.filter(i => i.bookId === bookId);
        console.log(`${this.name} kikölcsönözte:`, book[0]);
        library.removeBookById(bookId);
        this._books.push(book[0]);
        this.listBorrowedBooks();
    }

    // kilistazom a felhasznalo altal kikolcsonzott konyveket 
    public listBorrowedBooks(): void
    {
        console.log(`${this.name} felhasználónál lévő könyvek (${this._books.length}):`, this._books);
    }
}

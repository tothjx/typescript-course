import { Book } from "./Book";
import { ILibrary } from "../interface/ILibrary";

export class Library implements ILibrary {
    public books: Book[];

    constructor() {
        this.books = [];
    }

    // konyv hozzaadasa a konyvtarhoz
    public addBook(book: Book): void
    {
        // itt illene ellenorizni a book.bookId-t hogy egyedi legyen
        this.books.push(book);
        console.log(`A könyvtár új könyvet kapott: ${book.author}: ${book.title}`);
    }

    // konyv eltavolitasa a konyvtarbol bookId alapjan
    public removeBookById(bookId: string): void
    {
        // kivesszuk a this.books-bol a konyvet
        console.log(`Törölni fogjuk a "${bookId}" id-vel rendelkező könyvet.`);
        this.books = this.books.filter(i => i.bookId !== bookId);
        console.log(`Törlés után ${this.books.length} könyv maradt a könyvtárban.`);
        this.listAllBooks();
    }

    // konyv keresese a konyvtarban bookId alapjan
    public findBookById(bookId: string): void
    {
        // nem a legszebb megoldas de
        // a find() es findIndex nem mukodik a this.books-on
        // mi lehet az oka?
        this.books.forEach((book) => {
            if (book.bookId === bookId) {
                console.log('A keresett könyv:', book);
                return book;
            }
        });
    }

    // osszes konyv listazasa
    public listAllBooks(): void
    {
        console.log('A könyvtár állománya:', this.books);
    }
}

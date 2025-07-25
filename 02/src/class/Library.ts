/*
Library class

Tulajdonságok:
    books: Könyvek listája (Book[] típusú)

Metódusok:
    addBook(book: Book): Könyv hozzáadása a könyvtárhoz
    removeBook(id: string): Könyv eltávolítása az ID alapján
    findBookById(id: string): Könyv keresése ID alapján
    listAllBooks(): Összes könyv listázása
*/

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
        console.log(
            'A könyvtár új könyvet kapott:',
            book
        );
    }

    // konyv eltavolitasa a konyvtarbol bookId alapjan
    public removeBookById(bookId: string): void
    {
        this.books = this.books.filter(i => i.bookId !== bookId);

        console.log(
            `A ${bookId} azonosítójú könyv törlése után a könyvtár állománya:`,
            this.books
        );
    }

    // konyv keresese a konyvtarban bookId alapjan
    public findBookById(bookId: string): void
    {
        console.log(
            'A keresett könyv:',
            this.books.filter(i => i.bookId === bookId)
        );
    }

    // osszes konyv listazasa
    public listAllBooks(): void
    {
        console.log(
            'A könyvtár teljes állománya:',
            this.books
        );
    }
}
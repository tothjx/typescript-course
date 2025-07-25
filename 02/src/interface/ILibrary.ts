/*
ami kell az interface-be:
    books: Könyvek listája (Book[] típusú)

    addBook(book: Book): Könyv hozzáadása a könyvtárhoz
    removeBook(id: string): Könyv eltávolítása az ID alapján
    findBookById(id: string): Könyv keresése ID alapján
    listAllBooks(): Összes könyv listázása
*/

import { Book } from "../class/Book";

export interface ILibrary {
    books: object[];
    addBook(book: Book): void;
    removeBookById(bookId: string): void;
    findBookById(bookId: string): void;
    listAllBooks(): void;
}

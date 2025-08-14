import { Book } from "../models/Book";
import { User } from "../models/User";
import { isBook, isUser } from "../utils/typeGuards";

/*
miutan megertettem a LoanManager szerepet
a tanultak alapjan beleirtam a funkcioit a Library-ba
hogy egyedi legyen a megoldas
*/
export class Library {
    // jelenlegi konyvtari allomany
    private _books: Map<number, Book> = new Map();
    // regisztralt kolcsonzo felhasznalok
    private _users: Map<number, User> = new Map();
    // jelenleg kolcsonzott konyvek
    private _loans: Map<number, Book> = new Map();

    addBook(book: Book): void {
        this._books.set(book.id, book);
        console.log(`${book.author}: ${book.title} hozzáadva a könyvtár állományához`);
    }

    addLoan(book: Book): void {
        this._loans.set(book.id, book);
        console.log(`Item added: ${book.id}`);
    }

    addUser(user: User): void {
        this._users.set(user.id, user);
        console.log(`${user.name} (${user.email ?? 'nincs e-mail'}) kölcsönzőként hozzáadva`);
    }

    removeBook(bookId: number): void {
        this._books.delete(bookId);
        this._loans.delete(bookId);
        // itt megtorik az eletszeru jelleg
        // mert kikolcsonzott konyvet nem lehetne torolni
        // de itt most nem ez a lenyeg
    }

    listBooks(): Book[] {
        return Array.from(this._books.values());
    }

    listLoans(): Book[] {
        return Array.from(this._loans.values());
    }

    borrowBook(bookId: number, userId: number): void {
        const book = this._books.get(bookId);
        const user = this._users.get(userId);

        if (isBook(book) && isUser(user) && !this.listLoans().find(b => b.id === bookId)) {
            this.addLoan(book);
            console.log(`Book ${book.title} borrowed by ${user.name}`);
        } else {
            console.log(`Cannot borrow book: ${book ? book.title : 'Book not found'} or already borrowed`);
        }
    }

    returnBook(bookId: number): void {
        if (this.listLoans().find(b => b.id === bookId)) {
            this._loans.delete(bookId);
            console.log(`Book returned: ${bookId}`);
        } else {
            console.log('Book was not borrowed or does not exist');
        }
    }

    listBorrowedBooks(): Book[] {
        return this.listLoans();
    }

    findBooksByTitle(title: string): Book[] {
        return Array.from(this._books.values()).filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    }

    getBorrowerDetails(userId: number): User | undefined {
        return this._users.get(userId);
    }
}

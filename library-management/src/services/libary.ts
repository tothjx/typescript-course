import { Book } from "../models/Book";
import { User } from "../models/User";
import { isBook, isUser } from "../utils/typeGuards";

/*
miutan megertettem a LoanManager szerepet
a tanultak alapjan beleirtam a funkcioit a Library-ba
hogy egyedi legyen a megoldas
*/
export class Library
{
    // jelenlegi konyvtari allomany
    private _books: Map<number, Book> = new Map();
    // regisztralt kolcsonzo felhasznalok
    private _users: Map<number, User> = new Map();
    // jelenleg kolcsonzott konyvek
    private _loans: Map<number, Book> = new Map();

    addBook(book: Book): void
    {
        this._books.set(book.id, book);
        console.log(`${book.id}: ${book.author} - ${book.title} >>> hozzáadva a könyvtár állományához`);
    }

    addLoan(book: Book): void
    {
        this._loans.set(book.id, book);
        this._books.delete(book.id);
        //console.log(`Item added: ${book.id}`);
    }

    addUser(user: User): void
    {
        this._users.set(user.id, user);
        console.log(`${user.id}: ${user.name} (${user.email ?? 'nincs e-mail'}) >>> kölcsönzőként hozzáadva a könyvtárhoz`);
    }

    removeBook(bookId: number): void
    {
        this._books.delete(bookId);
        this._loans.delete(bookId);
        console.log(`${bookId} id-jű könyv törölve`);
        // itt megtorik az eletszeru jelleg
        // mert kikolcsonzott konyvet nem lehetne torolni
        // de itt most nem ez a lenyeg
    }

    listBooks(): Book[]
    {
        return Array.from(this._books.values());
    }

    listLoans(): Book[]
    {
        return Array.from(this._loans.values());
    }

    listUsers(): User[]
    {
        return Array.from(this._users.values());
    }

    borrowBook(bookId: number, userId: number): void
    {
        const book = this._books.get(bookId);
        const user = this._users.get(userId);

        if (isBook(book) && isUser(user) && !this.listLoans().find(b => b.id === bookId)) {
            this.addLoan(book);
            console.log(`${user.name} kikölcsönözte >>> ${book.author}: ${book.title}`);
        } else {
            console.log(`${bookId} id-vel nem található kölcsönözhető könyv`);
        }
    }

    returnBook(bookId: number): void
    {
        const book = this.listLoans().find(b => b.id === bookId);

        if (book) {
            this._loans.delete(bookId);
            this.addBook(book);
            console.log(`${bookId} id-jű könyv visszatért a könyvtár állományába`);
        } else {
            console.log(`${bookId} id-jű könyv nincs kölcsönzés alatt`);
        }
    }

    listBorrowedBooks(): Book[]
    {
        return this.listLoans();
    }

    findBooksByAuthor(author: string): Book[]
    {
        return Array.from(this._books.values()).filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    }

    findBooksByTitle(title: string): Book[]
    {
        return Array.from(this._books.values()).filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    }

    getBorrowerDetails(userId: number): User | undefined
    {
        return this._users.get(userId);
    }

    renderBookList(listType: string = 'books'): void
    {
        let books = (listType == 'loans') ? this.listLoans() : this.listBooks();
        books.forEach(book => console.log(`${book.id}: ${book.author} - ${book.title}`));
    }

    renderUserDetails(id: number): void
    {
        let user = this.getBorrowerDetails(id);

        if (user) {
            console.log(`Kölcsönző adatai: ${user.id}: ${user.name}`);
        } else {
            console.log(`${id} id-vel kölcsönző felhasználó nem található`);
        }
    }

    renderBooksDetails(books: Book[]): void
    {
        books.forEach(book => console.log(`${book.id}: ${book.author} - ${book.title}`));
    }
}

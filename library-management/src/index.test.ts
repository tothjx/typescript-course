import { Category as cat } from './models/Category';
import { Book } from './models/Book';
import { User } from './models/User';
import { Library } from './services/libary';

describe('Library', () => {
    let lib: Library;

    beforeEach(() => {
        lib = new Library();
    });

    test('addBook should add a book to the library', () => {
        const book1: Book = {id: 1, title: 'Anyegin', author: 'Alekszandr Szergejevics Puskin', category: cat.LiteraryFiction};
        const book2: Book = {id: 2, title: 'Sötét angyal', author: 'Moldova György', category: cat.LiteraryFiction};
        const book3: Book = {id: 3, title: 'Méhednek gyümölcse', author: 'Moldova György', category: cat.LiteraryFiction};
        const book4: Book = {id: 4, title: 'Negyven prédikátor', author: 'Moldova György', category: cat.LiteraryFiction};

        lib.addBook(book1);
        lib.addBook(book2);
        lib.addBook(book3);
        lib.addBook(book4);

        const books = lib.listBooks();

        expect(books).toContain(book1);
        expect(books).toContain(book2);
        expect(books).toContain(book3);
        expect(books).toContain(book4);
    });

    test('addUser should add a user to the library', () => {
        const user1: User = {id: 1, name: 'Kelemen Éva', email: 'eva@kelemencsalad.hh'};
        const user2: User = {id: 2, name: 'Kelemen Benedek', email: 'benedek@kelemencsalad.hh'};

        lib.addUser(user1);
        lib.addUser(user2);

        const users = lib.listUsers();

        expect(users).toContain(user1);
        expect(users).toContain(user2);
    });

    test('valami kell tortenjen', () => {
        const book1: Book = {id: 1, title: 'Anyegin', author: 'Alekszandr Szergejevics Puskin', category: cat.LiteraryFiction};
        const book2: Book = {id: 2, title: 'Sötét angyal', author: 'Moldova György', category: cat.LiteraryFiction};
        const book3: Book = {id: 3, title: 'Méhednek gyümölcse', author: 'Moldova György', category: cat.LiteraryFiction};
        const book4: Book = {id: 4, title: 'Negyven prédikátor', author: 'Moldova György', category: cat.LiteraryFiction};
        const user1: User = {id: 1, name: 'Kelemen Éva', email: 'eva@kelemencsalad.hh'};
        const user2: User = {id: 2, name: 'Kelemen Benedek', email: 'benedek@kelemencsalad.hh'};
        
        lib.addBook(book1);
        lib.addBook(book2);
        lib.addBook(book3);
        lib.addBook(book4);
        lib.addUser(user1);
        lib.addUser(user2);

        const books = lib.listBooks();
        const users = lib.listUsers();
    });
});

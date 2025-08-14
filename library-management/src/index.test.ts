import { Category as cat } from './models/Category';
import { Book } from './models/Book';
import { Library } from './services/libary';

describe('Library', () => {
    let library: Library;

    beforeEach(() => {
        library = new Library();
    });

    test('addBook should add a book to the library', () => {
        const book: Book = { id: 1, title: 'Test Book', author: 'Test Author', category: cat.Crime};
        library.addBook(book);
        const books = library.listBooks();
        expect(books).toContain(book);
    });

    // tovabbi tesztek
});

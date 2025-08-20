import { Record } from "./models/Record";
import { Lang } from "./models/Lang";
import { Where } from "./models/Where";
import { Dictionary } from "./services/Dictionary";
import mockData from './__mocks__/sampleData.json';

describe('Dictionary', () => {
    let dic: Dictionary;

    beforeEach(() => {
        dic = new Dictionary();

        // sampleData 64 record-al
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData)
            })
        ) as jest.Mock;
    });

    test('init utan elerheto a dic.data', async () => {
        await dic.init();
        const data = dic.data;

        expect(data.length).toBe(64);
        expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBe(mockData.length);
        expect(data[0]).toEqual(mockData[0]);
    });

    test('kereses hoz talalatot (angol szora)', async () => {
        await dic.init();
        const data = dic.search('accomplished');

        expect(data.length).toBeGreaterThan(0);
        expect(Array.isArray(data)).toBe(true);;
    });

    test('kereses hoz talalatot (magyar szora)', async () => {
        await dic.init();
        const data = dic.search('állhat', Lang.hu, Where.middle);

        expect(data.length).toBeGreaterThan(0);
        expect(Array.isArray(data)).toBe(true);;
    });
});

/*
// async/await
test('adataj visszatérítése', async () => {
  const data = await fetchData();
  expect(data).toBe('freeCodeCamp');
});

describe('Library', () => {
    let lib: Library;

    beforeEach(() => {
        lib = new Library();
    });


    test('addBook hozzadja a book-ot a library-hoz', () => {
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

    test('addLoan hozzadja a book-ot a kolcsonzott konyvekhez es kiveszi a library-bol', () => {
        lib.addBook(book1);
        lib.addBook(book2);
        lib.addBook(book3);
        lib.addBook(book4);

        lib.addLoan(book1);

        const books = lib.listBooks();
        const loans = lib.listLoans();

        expect(books).not.toContain(book1);
        expect(loans).toContain(book1);
        expect(books.length).toBe(3);
        expect(loans.length).toBe(1);
    });

    test('addUser hozzadja a user-t a library-hoz', () => {
        lib.addUser(user1);
        lib.addUser(user2);

        const users = lib.listUsers();

        expect(users).toContain(user1);
        expect(users).toContain(user2);
    });

    test('konyvek keresese szerzo es cim alapjan', () => {
        lib.addBook(book1);
        lib.addBook(book2);
        lib.addBook(book3);
        lib.addBook(book4);

        const books = lib.listBooks();

        expect(lib.findBooksByAuthor('puskin').length).toBe(1);
        expect(lib.findBooksByAuthor('moldova').length).toBe(3);
        expect(lib.findBooksByTitle('negyven').length).toBe(1);
        expect(lib.findBooksByTitle('anyegin').length).toBe(1);
    });

    test('konyvek sikeres kolcsonzese', () => {
        lib.addBook(book1);
        lib.addBook(book2);
        lib.addBook(book3);
        lib.addBook(book4);

        lib.addUser(user1);
        lib.addUser(user2);

        lib.borrowBook(book1.id, user1.id);
        lib.borrowBook(book2.id, user2.id);

        const books = lib.listBooks();
        const loans = lib.listLoans();

        expect(books.length).toBe(2);
        expect(loans.length).toBe(2);
    });

    test('konyvek sikeres visszaadasa', () => {
        lib.addBook(book1);
        lib.addBook(book2);
        lib.addBook(book3);
        lib.addBook(book4);

        lib.addUser(user1);
        lib.addUser(user2);

        // kolcsonzes
        lib.borrowBook(book1.id, user1.id);
        lib.borrowBook(book2.id, user2.id);

        // visszaadas
        lib.returnBook(1);
        lib.returnBook(2);

        const books = lib.listBooks();
        const loans = lib.listLoans();

        expect(books.length).toBe(4);
        expect(loans.length).toBe(0);
    });

    test('nem letezo konyv visszaadasa', () => {
        lib.addBook(book1);
        lib.addBook(book2);

        // visszaadas
        lib.returnBook(10);

        const books = lib.listBooks();
        const loans = lib.listLoans();

        expect(books.length).toBe(2);
        expect(loans.length).toBe(0);
    });

    test('nem letezo konyvek kolcsonzese', () => {
        lib.addBook(book1);
        lib.addBook(book2);
        lib.addBook(book3);
        lib.addBook(book4);

        lib.addUser(user1);
        lib.addUser(user2);

        // nem letezo konyvek kolcsonzese
        lib.borrowBook(20, user1.id);
        lib.borrowBook(25, user2.id);

        const books = lib.listBooks();
        const loans = lib.listLoans();

        // ezek kolcsonosen kizarjak ugyan egymast
        // de valahol meg kell tanulni a szintaktikat
        expect(books.length).not.toBe(2);
        expect(loans.length).not.toBe(2);
        expect(books.length).toBe(4);
        expect(loans.length).toBe(0);
    });

    test('konyvek torlese az allomanybol', () => {
        lib.addBook(book1);
        lib.addBook(book2);
        lib.addBook(book3);
        lib.addBook(book4);

        lib.removeBook(book1.id);
        lib.removeBook(book2.id);

        const books = lib.listBooks();

        expect(books.length).toBe(2);
    });

    test('listBooks visszaadja konyvtarban levo konyveket', () => {
        lib.addBook(book1);
        lib.addBook(book2);

        const books = lib.listBooks();

        expect(books.length).toBe(2);
    });

    test('listLoans visszaadja a kolcsonzott konyveket', () => {
        lib.addBook(book1);
        lib.addBook(book2);

        lib.addUser(user1);
        lib.addUser(user2);

        lib.borrowBook(book1.id, user1.id);
        lib.borrowBook(book2.id, user2.id);

        const loans = lib.listLoans();

        expect(loans.length).toBe(2);
    });

    test('listUsers visszadja a kolcsonzoket', () => {
        lib.addUser(user1);
        lib.addUser(user2);

        const users = lib.listUsers();

        expect(users.length).toBe(2);
    });

    test('getBorrowerDetails visszadja a kolcsonzo adatait', () => {
        lib.addUser(user1);

        const user = lib.getBorrowerDetails(user1.id);

        expect(user).toEqual(user1);
    });

    test('getBorrowerDetails nem adja vissza a nem letezo kolcsonzo adatait', () => {
        const user = lib.getBorrowerDetails(7);

        expect(user).toEqual(undefined);
    });

    test('renderBookList konzolra irja konyvtari allomany reszleteit', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

        lib.addBook(book1);
        lib.addBook(book2);
        lib.addBook(book3);
        lib.addBook(book4);

        lib.renderBookList();

        expect(logSpy).toHaveBeenCalled();

        logSpy.mockRestore();
    });

    test('renderBookList konzolra irja kolcsonzott konyvek reszleteit', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

        lib.addBook(book1);
        lib.addBook(book2);

        lib.addUser(user1);
        lib.addUser(user2);

        lib.borrowBook(book1.id, user1.id);
        lib.borrowBook(book2.id, user2.id);

        lib.renderBookList('loans');

        expect(logSpy).toHaveBeenCalled();

        logSpy.mockRestore();
    });

    test('renderBooksDetails konzolra irja konyvtari allomany listajat', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

        lib.addBook(book1);
        lib.addBook(book2);
        lib.addBook(book3);
        lib.addBook(book4);

        lib.renderBookList();

        expect(logSpy).toHaveBeenCalled();

        logSpy.mockRestore();
    });

    test('renderUserDetails konzolra irja a kolcsonzoadatait', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

        lib.renderUserDetails(user1.id);

        expect(logSpy).toHaveBeenCalled();

        logSpy.mockRestore();
    });
});
*/
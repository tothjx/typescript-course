import { Category as cat} from "./models/Category";
import { Book } from "./models/Book";
import { User } from "./models/User";
import { Library } from "./services/Libary";
import { util as u} from "./utils/util"

// konyvtar
const lib = new Library();

// felhasznalok - ebben a kontextusban kolcsonzo szemelyek
const user1 = new User(1, 'Szabó János', 'szabo.janos@semmise.hu');
const user2 = new User(2, 'Nagy Éva', 'nagy.eva@semmise.hu');
const user3 = new User(3, 'Kis Eszter');
const user4 = new User(4, 'Kovács József');

// konyvek
const book01 = new Book(1, 'Anyegin', 'Alekszandr Szergejevics Puskin', cat.LiteraryFiction);
const book02 = new Book(2, 'Sötét angyal', 'Moldova György', cat.LiteraryFiction);
const book03 = new Book(3, 'Méhednek gyümölcse', 'Moldova György', cat.LiteraryFiction);
const book04 = new Book(4, 'Negyven prédikátor', 'Moldova György', cat.LiteraryFiction);
const book05 = new Book(5, 'Az apáca', 'Denis Diderot', cat.LiteraryFiction);
const book06 = new Book(6, 'Decameron', 'Giovanni Boccaccio', cat.LiteraryFiction);
const book07 = new Book(7, 'Sorstalanság', 'Kertész Imre', cat.Biography);
const book08 = new Book(8, 'Vaják sorozat (1-8)', 'Andrzej Sapkowski', cat.Fantasy);
const book09 = new Book(9, 'A dűne', 'Frank Herbert', cat.ScienceFiction);
const book10 = new Book(10, 'KEEC - A Nagy Világ-Regatta', 'J. T. Chipendale', cat.ScienceFiction);
const book11 = new Book(11, 'A kapitány lánya', 'Alekszandr Szergejevics Puskin', cat.LiteraryFiction);
const book12 = new Book(12, 'Korunk hőse', 'Mihail Jurjevics Lermontov', cat.LiteraryFiction);
const book13 = new Book(15, 'A méh', 'Báró Ambrózy Béla', cat.Science);
const book14 = new Book(13, 'Winnetou (1-4)', 'Karl May', cat.HistoricalFiction);
const book15 = new Book(14, 'A fáraó átka', 'Ráth-Végh István', cat.Culture);
const book16 = new Book(16, 'JavaScript - The Definitive Guide', 'David Flanagan', cat.Science);

u.section('Könyvek hozzáadása a könyvtárhoz:');
lib.addBook(book01);
lib.addBook(book02);
lib.addBook(book03);
lib.addBook(book04);
lib.addBook(book05);
lib.addBook(book06);
lib.addBook(book07);
lib.addBook(book08);
lib.addBook(book09);
lib.addBook(book10);
lib.addBook(book11);
lib.addBook(book12);
lib.addBook(book13);
lib.addBook(book14);
lib.addBook(book15);
lib.addBook(book16);

// itt keresünk mert később kikölcsönzik a könyveket
u.section('Könyv(ek) keresése szerző alapján:');
console.log('Könyv(ek) keresése szerző alapján: "moldova"');
lib.renderBooksDetails(lib.findBooksByAuthor('moldova'));
console.log('Könyv(ek) keresése szerző alapján: "puskin"');
lib.renderBooksDetails(lib.findBooksByAuthor('puskin'));

u.section('Könyv(ek) keresése cím alapján:');
console.log('Könyv(ek) keresése cím alapján: "negyven"');
lib.renderBooksDetails(lib.findBooksByTitle('negyven'));
console.log('Könyv(ek) keresése cím alapján: "decameron"');
lib.renderBooksDetails(lib.findBooksByTitle('decameron'));

u.section('Kölcsönző fellhasználók hozzáadása a könyvtárhoz:');
lib.addUser(user1);
lib.addUser(user2);
lib.addUser(user3);
lib.addUser(user4);

u.section('Könyvtárban lévő könyvek listázása:');
lib.renderBookList();

u.section('Könyvek kölcsönzése:');
lib.borrowBook(1, 1);
lib.borrowBook(2, 1);
lib.borrowBook(3, 1);
lib.borrowBook(4, 2);
lib.borrowBook(5, 3);
lib.borrowBook(6, 4);

u.section('Könyvtárban lévő könyvek listázása (kölcsönzés után):');
lib.renderBookList();

u.section('Kísérlet nem létező könyvek kölcsönzésére:');
lib.borrowBook(1, 2);
lib.borrowBook(2, 3);

u.section('Kölcsönzött könyvek listázása:');
lib.renderBookList('loans');

u.section('Könyvek törlése az állományból:');
lib.removeBook(13);
lib.removeBook(14);
lib.removeBook(15);
lib.removeBook(16);

u.section('Könyvtárban lévő könyvek listázása (törlések után):');
lib.renderBookList();

u.section('Könyvek visszaadása:');
lib.returnBook(1);
lib.returnBook(2);

u.section('Könyvtárban lévő könyvek listázása (könyvek visszaadása után):');
lib.renderBookList();

u.section('Kölcsönzött könyvek listázása (könyvek visszaadása után):');
lib.renderBookList('loans');

u.section('Kölcsönzők adatai:');
lib.renderUserDetails(1);
lib.renderUserDetails(2);
lib.renderUserDetails(3);
lib.renderUserDetails(4);

u.section('Kísérlet nem létező kölcsönző adatainak kinyerésére:');
lib.renderUserDetails(11);
lib.renderUserDetails(12);

import { Category as cat} from "./models/Category";
import { Book } from "./models/Book";
import { User } from "./models/User";
import { Library } from "./services/libary";

const LINE = '----------------------------------------------------------------';
// konyvtar
const lib = new Library();

function line() {console.log(LINE);}

// felhasznalok - ebben a kontextusban kolcsonzo szemelyek
let user1 = new User(1, 'Szabó János', 'szabo.janos@semmise.hu');
let user2 = new User(2, 'Nagy Éva', 'nagy.eva@semmise.hu');
let user3 = new User(3, 'Kis Eszter');
let user4 = new User(3, 'Kovács József');

// konyvek
let book01 = new Book( 1, 'Anyegin', 'Alekszandr Szergejevics Puskin', cat.LiteraryFiction);
let book02 = new Book( 2, 'Sötét angyal', 'Moldova György', cat.LiteraryFiction);
let book03 = new Book( 3, 'Méhednek gyümölcse', 'Moldova György', cat.LiteraryFiction);
let book04 = new Book( 4, 'Negyven prédikátor', 'Moldova György', cat.LiteraryFiction);
let book05 = new Book( 5, 'Az apáca', 'Denis Diderot', cat.LiteraryFiction);
let book06 = new Book( 6, 'Decameron', 'Giovanni Boccaccio', cat.LiteraryFiction);
let book07 = new Book( 7, 'Sorstalanság', 'Kertész Imre', cat.Biography);
let book08 = new Book( 8, 'Vaják sorozat (1-8)', 'Andrzej Sapkowski', cat.Fantasy);
let book09 = new Book( 9, 'A dűne', 'Frank Herbert', cat.ScienceFiction);
let book10 = new Book(10, 'KEEC - A Nagy Világ-Regatta', 'J. T. Chipendale', cat.ScienceFiction);
let book11 = new Book(11, 'A kapitány lánya', 'Alekszandr Szergejevics Puskin', cat.LiteraryFiction);
let book12 = new Book(12, 'Korunk hőse', 'Mihail Jurjevics Lermontov', cat.LiteraryFiction);
let book14 = new Book(13, 'Winnetou (1-4)', 'Karl May', cat.HistoricalFiction);
let book15 = new Book(14, 'A fáraó átka', 'Ráth-Végh István', cat.Culture);
let book13 = new Book(15, 'A méh', 'Báró Ambrózy Béla', cat.Science);
let book16 = new Book(16, 'JavaScript - The Definitive Guide', 'David Flanagan', cat.Science);

line();
// konyvek hozzaadasa a konyvtarhoz
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
line();

// kolcsonzok hozzaadasa a konyvtarhoz
lib.addUser(user1);
lib.addUser(user2);
lib.addUser(user3);
lib.addUser(user4);
line();

lib.listBooks();
/*
import { Book } from "./models/Book";
import { Borrower } from "./models/User";
import { Fiction, NonFiction } from "./models/Category";
import { Library } from "./services/libary";

const library = new Library();

// Kategóriák létrehozása
const fictionCategory = new Fiction("Fiction", "Novel");
const nonFictionCategory = new NonFiction("Non-Fiction", "History");

// Könyvek létrehozása a megfelelő kategóriával
const book1: Book = { 
  id: 1, 
  title: "The Great Gatsby", 
  author: "F. Scott Fitzgerald", 
  category: fictionCategory // Fiction példány
};

const book2: Book = { 
  id: 2, 
  title: "War and Peace", 
  author: "Leo Tolstoy", 
  category: fictionCategory // Esetleg másik kategória példányát is használhatnánk
};

// Kölcsönzők létrehozása
const borrower1: Borrower = { id: 1, name: "John Doe" };
const borrower2: Borrower = { id: 2, name: "Jane Doe" };

// Könyvek hozzáadása a könyvtárhoz
library.addBook(book1);
library.addBook(book2);

// Kölcsönzők hozzáadása a könyvtárhoz
library.addBorrower(borrower1);
library.addBorrower(borrower2);

// Könyvek kölcsönzése
library.borrowBook(1, 1); // John Doe kölcsönzi "The Great Gatsby"-t
library.borrowBook(2, 2); // Jane Doe kölcsönzi "War and Peace"-t

// Kölcsönzött könyvek listázása
console.log("Kölcsönzött könyvek:");
library.listBorrowedBooks().forEach(book => console.log(`- ${book.title} by ${book.author}`));

// Egy könyv visszavitel
library.returnBook(1);
console.log("Visszavitel után kölcsönzött könyvek:");
library.listBorrowedBooks().forEach(book => console.log(`- ${book.title} by ${book.author}`));

// Könyv keresése cím alapján
console.log("Keresés 'War' címszóra:");
library.findBooksByTitle("War").forEach(book => console.log(`- ${book.title} by ${book.author}`));

// Kölcsönző adatainak lekérdezése
console.log("Kölcsönző adatai (ID: 1):");
const borrowerDetails = library.getBorrowerDetails(1);
if (borrowerDetails) {
  console.log(`Név: ${borrowerDetails.name}`);
}
*/


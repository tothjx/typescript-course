import { Book } from '../dist/class/Book.js';
import { User } from '../dist/class/User.js';
import { Library } from '../dist/class/Library.js';

// felhasznalok
let user01 = new User('01', 'Szabó János', 'szabo.janos@semmise.hu');
let user02 = new User('02', 'Nagy Éva', 'nagy.eva@semmise.hu');
let user03 = new User('03', 'Kis Eszter', 'kis.eszter@semmise.hu');
let user04 = new User('04', 'Kovács József', 'kovacs.jozsef@semmise.hu');

// konyvek
let book01 = new Book('01', 'Anyegin', 'Alekszandr Szergejevics Puskin', 2500);
let book02 = new Book('02', 'Sötét angyal', 'Moldova György', 3000);
let book03 = new Book('03', 'Méhednek gyümölcse', 'Moldova György', 2000);
let book04 = new Book('04', 'Negyven prédikátor', 'Moldova György', 2000);
let book05 = new Book('05', 'Az apáca', 'Denis Diderot', 1500);
let book06 = new Book('06', 'Decameron', 'Giovanni Boccaccio', 6000);
let book07 = new Book('07', 'Sorstalanság', 'Kertész Imre', 3500);
let book08 = new Book('08', 'Vaják sorozat (1-8)', 'Andrzej Sapkowski', 20500);
let book09 = new Book('09', 'A dűne', 'Frank Herbert', 3500);
let book10 = new Book('10', 'KEEC - A Nagy Világ-Regatta', 'J. T. Chipendale', 2500);
let book11 = new Book('11', 'A kapitány lánya', 'Alekszandr Szergejevics Puskin', 2000);
let book12 = new Book('12', 'Korunk hőse', 'Mihail Jurjevics Lermontov', 2500);
let book14 = new Book('13', 'Winnetou (1-4)', 'Karl May', 6000);
let book15 = new Book('14', 'A fáraó átka', 'Ráth-Végh István', 3000);
let book13 = new Book('15', 'A méh', 'Báró Ambrózy Béla', 5000);
let book16 = new Book('16', 'JavaScript - The Definitive Guide', 'David Flanagan', 26500);

// konyvtar
let lib = new Library();

// konyvtar feltoltese
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

// leselejtezunk 2 könyvet mert elavultak
lib.removeBookById('15');
lib.removeBookById('16');
line();

// megkeressuk a '01' bookId-vel rendelkezo konyvet
lib.findBookById('01');
line();

// konyv kolcsonzese
user01.borrowBook(lib, '01');
user02.borrowBook(lib, '02');
user02.borrowBook(lib, '03');
user02.borrowBook(lib, '04');
user03.borrowBook(lib, '05');
user04.borrowBook(lib, '06');
line();



function line() {
    console.log('========================================');
}

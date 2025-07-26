var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    // konyv hozzaadasa a konyvtarhoz
    Library.prototype.addBook = function (book) {
        // itt illene ellenorizni a book.bookId-t hogy egyedi legyen
        this.books.push(book);
        console.log("A k\u00F6nyvt\u00E1r \u00FAj k\u00F6nyvet kapott: ".concat(book.author, ": ").concat(book.title));
    };
    // konyv eltavolitasa a konyvtarbol bookId alapjan
    Library.prototype.removeBookById = function (bookId) {
        // kivesszuk a this.books-bol a konyvet
        console.log("T\u00F6r\u00F6lni fogjuk a \"".concat(bookId, "\" id-vel rendelkez\u0151 k\u00F6nyvet."));
        this.books = this.books.filter(function (i) { return i.bookId !== bookId; });
        console.log("T\u00F6rl\u00E9s ut\u00E1n ".concat(this.books.length, " k\u00F6nyv maradt a k\u00F6nyvt\u00E1rban."));
        this.listAllBooks();
    };
    // konyv keresese a konyvtarban bookId alapjan
    Library.prototype.findBookById = function (bookId) {
        // nem a legszebb megoldas de
        // a find() es findIndex nem mukodik a this.books-on
        // mi lehet az oka?
        this.books.forEach(function (book) {
            if (book.bookId === bookId) {
                console.log('A keresett könyv:', book);
                return book;
            }
        });
    };
    // osszes konyv listazasa
    Library.prototype.listAllBooks = function () {
        console.log('A könyvtár állománya:', this.books);
    };
    return Library;
}());
export { Library };
//# sourceMappingURL=Library.js.map
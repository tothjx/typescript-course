var User = /** @class */ (function () {
    function User(userId, name, email) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this._books = [];
    }
    // konyv kolcsonzese a konyvtarbol
    // ez ugy lenne szep ha a konyvtar strukturajaban szerepelne
    // hogy kinel milyen konyv van de ettol itt eltekintettem
    // egyszeruen csak kiveszem a library.books-bol a konyvet
    // es bekerul a user._books-ba
    User.prototype.borrowBook = function (library, bookId) {
        var book = library.books.filter(function (i) { return i.bookId === bookId; });
        console.log("".concat(this.name, " kik\u00F6lcs\u00F6n\u00F6zte:"), book[0]);
        library.removeBookById(bookId);
        this._books.push(book[0]);
        this.listBorrowedBooks();
    };
    // kilistazom a felhasznalo altal kikolcsonzott konyveket 
    User.prototype.listBorrowedBooks = function () {
        console.log("".concat(this.name, " felhaszn\u00E1l\u00F3n\u00E1l l\u00E9v\u0151 k\u00F6nyvek (").concat(this._books.length, "):"), this._books);
    };
    return User;
}());
export { User };
//# sourceMappingURL=User.js.map
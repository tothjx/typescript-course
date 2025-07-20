/*
Person object továbbgondolása:
    - 20 és 80 éves életkor közötti személy elfogadható, egyébként hibát dobunk
    - hobbi(ka)t nem kötelező megadni, a többi tulajdonságot viszont igen
    - a hobbi(ka)t array típussal kell megadni, ha van(nak)
    - a nemet enum típussal kell megadni (hagyományosan 2 nemet használunk)
    - használni kell privát tulajdonságot és metódust is
*/
var CURRENT_YEAR = new Date().getFullYear();
var MALE = 'male';
var FEMALE = 'female';
var GREET_TEXT_FEMALE = 'Csodálatosan nézel ki ma is...';
var MSG_HOBBIES = 'Ezek nagyszerű hobbik: ';
var MSG_HOBBY = 'Ez nagyszerű hobbi: ';
var MSG_NO_HOBBY = 'Elkeseredve látom h nincs semmilyen hobbid. Próbáld ki a programozást!';
// fiktiv szabaly h legyen vmi egyedi validalas
var ERR_BIRTH_YEAR = "A sz\u00FClet\u00E9si \u00E9v ".concat(CURRENT_YEAR - 80, " \u00E9s ").concat(CURRENT_YEAR - 20, " k\u00F6z\u00F6tti kell legyen!");
var Sex;
(function (Sex) {
    Sex["Male"] = "male";
    Sex["Female"] = "female";
})(Sex || (Sex = {}));
var Person = /** @class */ (function () {
    function Person(firstName, familyName, birthYear, sex, profession, isLeader, employer, hobbies) {
        this.birthYear = birthYear;
        // ha tul fiatal vagy tul idos
        // akkor hibat dobunk
        if (!this.checkBirthYear()) {
            throw new Error(ERR_BIRTH_YEAR);
        }
        this.firstName = firstName;
        this.familyName = familyName;
        this.sex = sex;
        this.isLeader = isLeader,
            this.profession = profession;
        this.employer = employer;
        this.hobbies = hobbies;
        this._setAge();
    }
    Person.prototype.checkBirthYear = function () {
        var age = CURRENT_YEAR - this.birthYear;
        if (age < 20 || age > 80) {
            return false;
        }
        return true;
    };
    Person.prototype._setAge = function () {
        // nok eseteben egyseges a kor
        if (this.sex === Sex.Female) {
            return this._age = 25;
        }
        return this._age = CURRENT_YEAR - this.birthYear;
    };
    Person.prototype.getAge = function () {
        return this._age;
    };
    Person.prototype.getFullName = function () {
        return "".concat(this.familyName, " ").concat(this.firstName);
    };
    Person.prototype.getGreetingStr = function () {
        var dummyText = '';
        if (this.sex === Sex.Female) {
            dummyText = GREET_TEXT_FEMALE;
        }
        return "Hello ".concat(this.getFullName(), "! ").concat(dummyText);
    };
    Person.prototype.getHobbiesStr = function () {
        if (typeof (this.hobbies) == 'undefined' || this.hobbies.length === 0) {
            return MSG_NO_HOBBY;
        }
        var lst = (this.hobbies.length > 1) ? MSG_HOBBIES : MSG_HOBBY;
        for (var i in this.hobbies) {
            lst += this.hobbies[i] + (parseInt(i) === this.hobbies.length - 1 ? '' : ', ').toString();
        }
        return lst;
    };
    return Person;
}());
//# sourceMappingURL=app.js.map
/*
Person object továbbgondolása:
    - 20 és 80 éves életkor közötti személy elfogadható, egyébként hibát dobunk
    - hobbi(ka)t nem kötelező megadni, a többi tulajdonságot viszont igen
    - a hobbi(ka)t array típussal kell megadni, ha van(nak)
    - a nemet enum típussal kell megadni (hagyományosan 2 nemet használunk)
    - használni kell privát tulajdonságot és metódust is
*/

const CURRENT_YEAR = new Date().getFullYear();
const MALE = 'male';
const FEMALE = 'female';
const DUMMY_TEXT_FEMALE = 'Csodálatosan nézel ki ma is...';
const MSG_HOBBIES = 'Ezek nagyszerű hobbik: ';
const MSG_HOBBY = 'Ez nagyszerű hobbi: ';
const MSG_NO_HOBBY = 'Elkeseredve látom h nincs semmilyen hobbid. Próbáld ki a programozást!';
// fiktiv szabaly h legyen vmi egyedi validalas
const ERR_BIRTH_YEAR = `A születési év ${CURRENT_YEAR - 80} és ${CURRENT_YEAR - 20} közötti kell legyen!`;

enum Sex {
    Male = MALE,
    Female = FEMALE
}

class Person
{
    public firstName: string;
    public familyName: string;
    public profession: string;
    public employer: string;
    public hobbies?: string[];
    public sex: Sex;
    public isLeader: boolean;
    public birthYear: number;
    private _age: number;

    constructor (
        firstName: string,
        familyName: string,
        birthYear: number,
        sex: Sex,
        profession: string,
        isLeader: boolean,
        employer: string,
        hobbies?: string[]
    ) {
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

    checkBirthYear(): boolean
    {
        let age = CURRENT_YEAR - this.birthYear;

        if (age < 20 || age > 80) {
            return false;
        }

        return true;
    }

    _setAge(): number
    {
        // nok eseteben egyseges a kor
        if (this.sex === Sex.Female) {
            return this._age = 25;
        }

        return this._age = CURRENT_YEAR - this.birthYear;
    }

    getAge(): number
    {
        return this._age;
    }

    getFullName(): string
    {
        return `${this.familyName} ${this.firstName}`;
    }

    getGreetingStr(): string
    {
        let dummyText: string;

        if (this.sex === Sex.Female) {
            dummyText = DUMMY_TEXT_FEMALE;
        } else {
            dummyText = '';
        }

        return `Hello ${this.getFullName()}! ${dummyText}`;
    }

    getHobbiesStr(): string
    {
        if (typeof(this.hobbies) == 'undefined' || this.hobbies.length === 0) {
            return MSG_NO_HOBBY;
        }

        let lst: string = (this.hobbies.length > 1) ? MSG_HOBBIES : MSG_HOBBY;

        for (let i in this.hobbies) {
            lst += this.hobbies[i] + (parseInt(i) === this.hobbies.length - 1 ? '' : ', ').toString();
        }

        return lst;
    }
}

import { LogItem } from "../decorators/LogItem";
// import { Category } from "../models/Category";
import { User } from "../models/User";
import { Event } from "../models/Event";
import { Reg } from "../models/Reg";
import { Category } from "models/Category";

// rendezvenyek kezeleset vegzo szerviz
export class EventReg
{
    // esemenyek
    private _events: Event[];
    // resztvevo felhasznalok
    private _users: User[];
    // regisztraciok
    private _registrations: Reg[];

    public constructor()
    {
        this._events = [];
        this._users = [];
        this._registrations = [];
    }

    /**
     * resztvevo hozzaadasa
     */
    public addUser(user: User): void
    {
        this._users.push(user);
    }

    /**
     * resztvevo torlese
     */
    public delUserById(id: number): void
    {
        this._users = this._users.filter(user => user.id !== id);
    }

    /**
     * esemeny hozzaadasa
     */
    @LogItem
    public addEvent(event: Event): void
    {
        this._events.push(event);
    }

    /**
     * esemeny torlese
     */
    public delEventById(id: number): void
    {
        this._events = this._events.filter(event => event.id !== id);
    }

    /**
     * felhasznalo regisztralasa az esemenyhez
     */
    public addReg(reg: Reg): void
    {
        this._registrations.push(reg);
    }

    public delRegById(id: number): void
    {
        this._registrations = this._registrations.filter(reg => reg.id !== id);
    }

    /**
     * osszes esemeny listazasa
     */
    public getAllEvents(): Event[]
    {
        return this._events;
    }

    /**
     * osszes felhasznalo listazasa
     */
    public getAllUsers(): User[]
    {
        return this._users;
    }

    /**
     * osszes regisztracio listazasa
     */
    public getAllRegistrations(): Reg[]
    {
        return this._registrations;
    }

    /**
     * osszes esemeny listazasa tipusonkent
     */
    public getEventsByCategory(category: Category): Event[]
    {
        return this._events.filter(event => event.category == category);
    }

    // ezek csak a getterek demonstralasara lesznek itt

    get users(): User[]
    {
        return this._users;
    }

    get events(): Event[]
    {
        return this._events;
    }

    get registrations(): Reg[]
    {
        return this._registrations;
    }

}

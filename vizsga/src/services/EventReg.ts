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
        //
    }

    /**
     * resztvevo torlese
     */
    public delUser(id: number): void
    {
        //
    }

    /**
     * esemeny hozzaadasa
     */
    @LogItem
    public addEvent(event: Event): void
    {
        //
    }

    /**
     * esemeny torlese
     */
    public delEvent(): void
    {
        //
    }

    /**
     * felhasznalo regisztralasa az esemenyhez
     */
    public registrateUserToEvent(idUser: number, idEvent: number): void
    {
        //
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
}

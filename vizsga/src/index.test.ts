import { Category } from "./models/Category";
import { User } from "./models/User";
import { Event } from "./models/Event";
import { Reg } from "./models/Reg";
import { EventReg } from "./services/EventReg";

describe('EventReg', () => {
    let er: EventReg;

    beforeEach(() => {
        er = new EventReg();
    });

    const user1: User = {id: 1, name: 'Szabó János', email: 'szabo.janos@semmise.hu'};
    const user2: User = {id: 2, name: 'Nagy Éva', email: 'nagy.eva@semmise.hu'};
    const user3: User = {id: 3, name: 'Kis Eszter'};
    const user4: User = {id: 4, name: 'Kovács József'};

    const event1: Event = {id: 1, name: 'Éva születésnapja', startDate: new Date('2025-12-05T12:00:00'), endDate: new Date('2025-12-05T16:00:00'), category: Category.Birthday};
    const event2: Event = {id: 2, name: 'Scorpions koncert', startDate: new Date('2025-12-06T20:00:00'), endDate: new Date('2025-12-06T22:00:00'), category: Category.Concert};
    const event3: Event = {id: 3, name: 'Gomba-fesztivál', startDate: new Date('2025-12-06T08:00:00'), endDate: new Date('2025-12-07T16:00:00'), category: Category.Festival};
    const event4: Event = {id: 4, name: 'Szimpla berúgás a haverokkal', startDate: new Date('2025-12-10T12:00:00'), endDate: new Date('2025-12-10T22:00:00'), category: Category.Other};
    const event5: Event = {id: 5, name: 'Masszívabb berúgás a haverokkal', startDate: new Date('2025-12-11T12:00:00'), endDate: new Date('2025-11-05T22:00:00'), category: Category.Other};
    const event6: Event = {id: 6, name: 'Összetett berúgás a haverokkal', startDate: new Date('2025-12-12T12:00:00'), endDate: new Date('2025-12-12T22:00:00'), category: Category.Other};

    test('user hozzaadasa', () => {
        er.addUser(user1);
        er.addUser(user2);

        const users = er.getAllUsers();

        expect(users).toContain(user1);
        expect(users).toContain(user2);
        expect(users.length).toBe(2);
    });

    test('event hozzaadasa', () => {
        er.addEvent(event1);
        er.addEvent(event2);

        const events = er.getAllEvents();

        expect(events).toContain(event1);
        expect(events).toContain(event2);
        expect(events.length).toBe(2);
    });

    test('user torlese', () => {
        er.addUser(user1);
        er.addUser(user2);
        er.delUserById(1);
        const users = er.getAllUsers();

        expect(users.length).toBe(1);
    });

    test('event torlese', () => {
        er.addEvent(event1);
        er.addEvent(event2);
        er.delEventById(1);

        const events = er.getAllEvents();

        expect(events.length).toBe(1);
    });

    test('regisztracio hozzaadasa', () => {
        let reg1 = new Reg(1, 1, 1);
        let reg2 = new Reg(2, 1, 2);
        let reg3 = new Reg(3, 1, 3);
        let reg4 = new Reg(4, 1, 1);
        let reg5 = new Reg(5, 1, 2);

        er.addUser(user1);
        er.addUser(user2);

        er.addEvent(event1);
        er.addEvent(event2);

        er.addReg(reg1);
        er.addReg(reg2);
        er.addReg(reg3);
        er.addReg(reg4);
        er.addReg(reg5);

        const regs = er.getAllRegistrations();

        expect(regs).toContain(reg1);
        expect(regs).toContain(reg2);
        expect(regs).toContain(reg3);
        expect(regs).toContain(reg4);
        expect(regs).toContain(reg5);
        expect(regs.length).toBe(5);
    });

    test('regisztracio torlese', () => {
        let reg1 = new Reg(1, 1, 1);
        let reg2 = new Reg(2, 1, 2);
        let reg3 = new Reg(3, 1, 3);
        let reg4 = new Reg(4, 1, 1);

        er.addUser(user1);
        er.addUser(user2);

        er.addEvent(event1);
        er.addEvent(event2);

        er.addReg(reg1);
        er.addReg(reg2);
        er.addReg(reg3);
        er.addReg(reg4);

        er.delRegById(1);
        er.delRegById(2);

        const regs = er.getAllRegistrations();

        expect(regs).not.toContain(reg1);
        expect(regs).not.toContain(reg2);
        expect(regs).toContain(reg3);
        expect(regs).toContain(reg4);
        expect(regs.length).toBe(2);
    });

    test('event-ek kategoria szerint', () => {
        er.addEvent(event1);
        er.addEvent(event2);
        er.addEvent(event3);
        er.addEvent(event4);
        er.addEvent(event5);
        er.addEvent(event6);

        const events = er.getEventsByCategory(Category.Other);
        
        expect(events).toContain(event4);
        expect(events).toContain(event5);
        expect(events).toContain(event6);
        expect(events.length).toBe(3);
    });
});

import { Category } from "./models/Category";
import { User } from "./models/User";
import { Event } from "./models/Event";
import { Reg } from "./models/Reg";
import { EventReg } from "./services/EventReg";
// import { config as cfg } from "./utils/config";

let er = new EventReg();

// felhasznalok >>> regisztraciora kepes szemelyek
const user1 = new User(1, 'Szabó János', 'szabo.janos@semmise.hu');
const user2 = new User(2, 'Nagy Éva', 'nagy.eva@semmise.hu');
const user3 = new User(3, 'Kis Eszter');
const user4 = new User(4, 'Kovács József');

// esemenyek
const event1 = new Event(1, 'Éva születésnapja', new Date('2025-12-05T12:00:00'), new Date('2025-12-05T16:00:00'), Category.Birthday);
const event2 = new Event(2, 'Scorpions koncert', new Date('2025-12-06T20:00:00'), new Date('2025-12-06T22:00:00'), Category.Concert);
const event3 = new Event(3, 'Gomba-fesztivál', new Date('2025-12-06T08:00:00'), new Date('2025-12-07T16:00:00'), Category.Festival);
const event4 = new Event(4, 'Szimpla berúgás a haverokkal', new Date('2025-12-10T12:00:00'), new Date('2025-12-10T22:00:00'), Category.Other);
const event5 = new Event(5, 'Masszívabb berúgás a haverokkal', new Date('2025-12-11T12:00:00'), new Date('2025-11-05T22:00:00'), Category.Other);
const event6 = new Event(6, 'Összetett berúgás a haverokkal', new Date('2025-12-12T12:00:00'), new Date('2025-12-12T22:00:00'), Category.Other);

// felhasznalok hozzaadasa
er.addUser(user1);
er.addUser(user2);
er.addUser(user3);
er.addUser(user4);

// esemenyek hozzadasa
er.addEvent(event1);
er.addEvent(event2);
er.addEvent(event3);
er.addEvent(event4);
er.addEvent(event5);
er.addEvent(event6);

// felhasznalok listaja
console.log(er.getAllUsers());

// esemenyek listaja
console.log(er.getAllEvents());

// felhasznalo torlese
er.delUserById(4);

// berugas torlese
er.delEventById(4);

// felhasznalok listaja torles utan
console.log(er.getAllUsers());

// esemenyek listaja torles utan
console.log(er.getAllEvents());

// regisztraciok hozzadasa
er.addReg(new Reg(1, 1, 1));
er.addReg(new Reg(2, 1, 2));
er.addReg(new Reg(3, 1, 3));
er.addReg(new Reg(4, 2, 1));
er.addReg(new Reg(5, 3, 2));

// regisztraciok listaja
console.log('regisztraciok:');
console.log(er.getAllRegistrations());

// regisztracio torlese
er.delRegById(1);
er.delRegById(2);

// regisztraciok listaja 2 reg torlese utan
console.log('regisztraciok 2 reg torlesse utan:');
console.log(er.getAllRegistrations());

// esemenyek listazasa katagoria alapjan (egyeb)
console.log(er.getEventsByCategory(Category.Other));

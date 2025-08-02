import { Product } from './dist/models/Product.js';
import { Order } from './dist/models/Order.js';
import { User } from './dist/models/User.js';
import { getUnid } from './dist/services/getUnid.js';

// felhasznalok
let user01 = new User(getUnid(), 'Szabó János', 'szabo.janos@semmise.hu');
let user02 = new User(getUnid(), 'Nagy Éva', 'nagy.eva@semmise.hu');
let user03 = new User(getUnid(), 'Kis Eszter', 'kis.eszter@semmise.hu');
let user04 = new User(getUnid(), 'Kovács József', 'kovacs.jozsef@semmise.hu');

console.log('USERS:', [user01, user02, user03, user04]);

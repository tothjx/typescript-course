import { Product } from './dist/models/Product.js';
import { Order } from './dist/models/Order.js';
import { User } from './dist/models/User.js';
import { InventoryService } from './dist/services/InventoryService.js';
import { UserService } from './dist/services/UserService.js';

// felhasznalok
let usr01 = new User('01', 'Szabó János', 'szabo.janos@semmise.hu');
let usr02 = new User('02', 'Nagy Éva', 'nagy.eva@semmise.hu');
let usr03 = new User('03', 'Kis Eszter', 'kis.eszter@semmise.hu');
let usr04 = new User('04', 'Kovács József', 'kovacs.jozsef@semmise.hu');

// termekek
let prd01 = new Product('01', 'színes ceruza', 600, 'piros');
let prd02 = new Product('02', 'toll', 900, 'kerámia-betétes');
let prd03 = new Product('03', 'gitár-hangoló', 8000, '');
let prd04 = new Product('04', 'baseball-sapka', 12000, '');
let prd05 = new Product('05', 'egér', 8000, '');
let prd06 = new Product('06', 'billentyűzet', 16000, '');
let prd07 = new Product('07', 'mobiltelefon', 125000, '');
let prd08 = new Product('08', 'ásványvíz', 180, '');
let prd09 = new Product('09', 'egérpad', 4000, '');
let prd10 = new Product('10', 'dobozos sör', 1000, 'alkoholmentes, brrr');
let prd11 = new Product('11', 'öngyújtó', 250, 'nem zippo');
let prd12 = new Product('12', 'műanyag vödör', 500, '');
let prd13 = new Product('13', 'felmosó-szett', 2000, '');
let prd14 = new Product('14', 'tolltartó', 3000, '');
let prd15 = new Product('15', 'gyapjú sál', 2000, '');
let prd16 = new Product('16', 'android tablet', 80000, '');

console.log(
    'USERS:',
    [usr01, usr02, usr03, usr04]
);

console.log(
    'PRODUCTS:',
    [
        prd01, prd02, prd03, prd04,
        prd05, prd06, prd07, prd08,
        prd09, prd10, prd11, prd12,
        prd13, prd14, prd15, prd16
    ]
);

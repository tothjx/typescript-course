"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_js_1 = require("./models/Product.js");
const User_js_1 = require("./models/User.js");
const InventoryService_js_1 = require("./services/InventoryService.js");
const UserService_js_1 = require("./services/UserService.js");
const getID_js_1 = require("./services/getID.js");
// felhasznalok
let usr01 = new User_js_1.User((0, getID_js_1.getID)(), 'Szabó János', 'szabo.janos@semmise.hu');
let usr02 = new User_js_1.User((0, getID_js_1.getID)(), 'Nagy Éva', 'nagy.eva@semmise.hu');
let usr03 = new User_js_1.User((0, getID_js_1.getID)(), 'Kis Eszter', 'kis.eszter@semmise.hu');
let usr04 = new User_js_1.User((0, getID_js_1.getID)(), 'Kovács József', 'kovacs.jozsef@semmise.hu');
// termekek
let prd01 = new Product_js_1.Product((0, getID_js_1.getID)(), 'színes ceruza', 600, 'piros');
let prd02 = new Product_js_1.Product((0, getID_js_1.getID)(), 'toll', 900, 'kerámia-betétes');
let prd03 = new Product_js_1.Product((0, getID_js_1.getID)(), 'gitár-hangoló', 8000, '');
let prd04 = new Product_js_1.Product((0, getID_js_1.getID)(), 'baseball-sapka', 12000, '');
let prd05 = new Product_js_1.Product((0, getID_js_1.getID)(), 'egér', 8000, '');
let prd06 = new Product_js_1.Product((0, getID_js_1.getID)(), 'billentyűzet', 16000, '');
let prd07 = new Product_js_1.Product((0, getID_js_1.getID)(), 'mobiltelefon', 125000, '');
let prd08 = new Product_js_1.Product((0, getID_js_1.getID)(), 'ásványvíz', 180, '');
let prd09 = new Product_js_1.Product((0, getID_js_1.getID)(), 'egérpad', 4000, '');
let prd10 = new Product_js_1.Product((0, getID_js_1.getID)(), 'dobozos sör', 1000, 'alkoholmentes, brrr');
let prd11 = new Product_js_1.Product((0, getID_js_1.getID)(), 'öngyújtó', 250, 'nem zippo');
let prd12 = new Product_js_1.Product((0, getID_js_1.getID)(), 'műanyag vödör', 500, '');
let prd13 = new Product_js_1.Product((0, getID_js_1.getID)(), 'felmosó-szett', 2000, '');
let prd14 = new Product_js_1.Product((0, getID_js_1.getID)(), 'tolltartó', 3000, '');
let prd15 = new Product_js_1.Product((0, getID_js_1.getID)(), 'gyapjú sál', 2000, '');
let prd16 = new Product_js_1.Product((0, getID_js_1.getID)(), 'android tablet', 80000, '');
// keszlet
let invService = new InventoryService_js_1.InventoryService();
// user-ek
let usrService = new UserService_js_1.UserService();
// keszlet feltoltese
invService.addProduct(prd01);
invService.addProduct(prd02);
invService.addProduct(prd03);
invService.addProduct(prd04);
invService.addProduct(prd05);
invService.addProduct(prd06);
invService.addProduct(prd07);
invService.addProduct(prd08);
invService.addProduct(prd09);
invService.addProduct(prd10);
invService.addProduct(prd11);
invService.addProduct(prd12);
invService.addProduct(prd13);
invService.addProduct(prd14);
invService.addProduct(prd15);
invService.addProduct(prd16);
// felhasznalok listazasa
console.log('USERS:', [usr01, usr02, usr03, usr04]);
// keszlet listazasa
invService.listInventory();
// termek keresese
invService.searchProductByIdOrName('toll');
// user-ek service-hez adasa
// utobb feleslegesnek bizonyult
usrService.addUser(usr01);
usrService.addUser(usr02);
usrService.addUser(usr03);
usrService.addUser(usr04);
// user-ek listazasa
usrService.listUsers();
// rendelesek
usrService.order(usr01, [prd13, prd14, prd15, prd16], invService);
usrService.order(usr02, [prd01, prd02], invService);
usrService.order(usr03, [prd03, prd04, prd05], invService);
usrService.order(usr04, [prd06, prd07, prd08], invService);
// status allitasa - publikus metódusokkal
// Az InventoryService-ben kellene publikus metódus a status frissítéshez
// Egyelőre kommentezzük ki ezeket:
// invService._orders[0].updateStatus(Status.UNDER_PROCESSING);
// invService._orders[1].updateStatus(Status.DELIVERED);
// keszlet es rendelesek allapota a rendelesek leadasa utan
// 12 termek rendelese utan a keszlet 4 termek marad
invService.listInventory();
invService.listOrders();

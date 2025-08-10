import { TodoItem } from "./models/TodoItem.js";
import { TodoList } from "./services/TodoList.js";
import { getNumID } from "./services/util.js";

// uj lista
let tdList = new TodoList();

// uj item-ek
// nem akartam bonyolitani egy id-ket tartalmazo array letrehozasaval
// azert vegyesek az id-k
let item01 = new TodoItem(1, {dueDate: new Date('2015-12-05T12:00:10')});
let item02 = new TodoItem(2, {dueDate: new Date('2016-12-05T12:00:10')});
let item03 = new TodoItem(getNumID(), {message: 'Lorem ipsum dolor sit amet.'});
let item04 = new TodoItem(getNumID(), {message: 'Sed do eiusmod tempor incididunt.'});
let item05 = new TodoItem(getNumID(), {dueDate: new Date('2019-12-05T12:00:10')});
let item06 = new TodoItem(getNumID(), {dueDate: new Date('2020-12-05T12:00:10')});
let item07 = new TodoItem(7, {message: 'Ut enim ad minim veniam.'});
let item08 = new TodoItem(8, {message: 'Duis aute irure dolor esse.'});

// listahoz adas
tdList.addItem(item01);
tdList.addItem(item02);
tdList.addItem(item03);
tdList.addItem(item04);
tdList.addItem(item05);
tdList.addItem(item06);
tdList.addItem(item07);
tdList.addItem(item08);

console.log('Lista a feltöltés után:', tdList);

// torlesek
tdList.delItemById(7);
tdList.delItemByKey(8);
tdList.delItemById(1);
tdList.delItemByKey(2);


console.log('Lista a törlések után:', tdList);

// todo-k listazasa
tdList.listItems();

import { TodoItem } from "./models/TodoItem.js";
import { TodoList } from "./services/TodoList.js";

let tdList = new TodoList();

let item01 = new TodoItem(1, {dueDate: new Date('2015-12-05T12:00:10')});
let item02 = new TodoItem(2, {dueDate: new Date('2016-12-05T12:00:10')});
let item03 = new TodoItem(3, {message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'});
let item04 = new TodoItem(4, {message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'});
let item05 = new TodoItem(5, {dueDate: new Date('2019-12-05T12:00:10')});
let item06 = new TodoItem(6, {dueDate: new Date('2020-12-05T12:00:10')});
let item07 = new TodoItem(7, {message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'});
let item08 = new TodoItem(8, {message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.'});

tdList.addItem(item01);
tdList.addItem(item02);
tdList.addItem(item03);
tdList.addItem(item04);
tdList.addItem(item05);
tdList.addItem(item06);
tdList.addItem(item07);
tdList.addItem(item08);

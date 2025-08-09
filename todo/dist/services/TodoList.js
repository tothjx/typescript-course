"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
const LogItem_1 = require("../decorators/LogItem");
class TodoList {
    constructor() {
        this.items = new Map();
    }
    addItem(item) {
        if (this._checkItem(item)) {
            this.items.set(item.id, item);
            // ez mar nem kell > a decorator elvegzi
            // console.log(`Item added: ${item.id}`);
        }
        else {
            throw new Error(`Hibás TodoItem: ${item.id}`);
        }
    }
    _checkItem(item) {
        if (item.content.hasOwnProperty('message') || item.content.hasOwnProperty('dueDate')) {
            return true;
        }
        console.log(item.hasOwnProperty('message'));
        console.log(item.hasOwnProperty('dueDate'));
        console.log('ITEM:', item);
        return false;
    }
    delItem() {
        //
    }
    listItems() {
        //
    }
}
exports.TodoList = TodoList;
__decorate([
    LogItem_1.LogItem
], TodoList.prototype, "addItem", null);

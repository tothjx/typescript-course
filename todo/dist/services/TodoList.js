var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LogItem } from "../decorators/LogItem.js";
export class TodoList {
    constructor() {
        this._items = new Map();
    }
    addItem(item) {
        //this.items.set(item.id, item);
        if (this._checkItem(item)) {
            this._items.set(item.id, item);
            console.log(`id = ${item.id}`);
        }
        else {
            throw new Error(`Hibás TodoItem: ${item.id}`);
        }
    }
    delItemByKey(key) {
        this._items.delete(key);
        console.log('Törölve > key =', key);
    }
    delItemById(id) {
        for (const [key, value] of this._items) {
            if (value.id === id) {
                this._items.delete(key);
                console.log('Törölve > id =', id);
            }
        }
    }
    listItems() {
        console.log('TODO-lista:');
        for (const [key, value] of this._items) {
            // nem tudtam szetszedni a content-et
            console.log('listaelem:', this._items.get(key));
        }
    }
    // a todoContent definialasa utan ez mar teljesen felesleges
    // ugyanis csak ez a 2 tipus lehet benne
    // de akkor milyen tipusort kellene beepiteni?
    _checkItem(item) {
        if (item.content.hasOwnProperty('message')) {
            return true;
        }
        if (item.content.hasOwnProperty('dueDate')) {
            return true;
        }
        return false;
    }
}
__decorate([
    LogItem
], TodoList.prototype, "addItem", null);

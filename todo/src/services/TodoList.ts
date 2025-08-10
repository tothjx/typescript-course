import { TodoItem, todoContent } from "../models/TodoItem";
import { LogItem } from "../decorators/LogItem.js";

export class TodoList<T> {
    private _items: Map<number, TodoItem<todoContent>> = new Map();

    @LogItem
    public addItem(item: TodoItem<todoContent>): void
    {
        //this.items.set(item.id, item);

        if (this._checkItem(item)) {
            this._items.set(item.id, item);
            console.log(`id = ${item.id}`);
        } else {
            throw new Error(`Hibás TodoItem: ${item.id}`);
        }
    }

    public delItemByKey(key: number): void
    {
        this._items.delete(key);
        console.log('Törölve > key =', key);
    }

    public delItemById(id: number): void
    {
        for (const [key, value] of this._items) {
            if (value.id === id) {
                this._items.delete(key);
                console.log('Törölve > id =', id);
            }
        }
    }

    public listItems(): void
    {
        console.log('TODO-lista:');

        for (const [key, value] of this._items) {
            // nem tudtam szetszedni a content-et
            console.log('listaelem:', this._items.get(key));
        }
    }

    // a todoContent definialasa utan ez mar teljesen felesleges
    // ugyanis csak ez a 2 tipus lehet benne
    // de akkor milyen tipusort kellene beepiteni?
    private _checkItem(item: TodoItem<todoContent>): boolean
    {
        if (item.content.hasOwnProperty('message')) {
            return true;
        }

        if (item.content.hasOwnProperty('dueDate')) {
            return true;
        }

        return false;
    }
}
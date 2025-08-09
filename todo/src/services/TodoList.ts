import { LogItem } from "../decorators/LogItem";
import { TodoItem } from "../models/TodoItem";

export class TodoList<T> {
    private items: Map<number, TodoItem<T>> = new Map();

    @LogItem
    public addItem(item: TodoItem<T>): void
    {
        if (this._checkItem(item)) {
            this.items.set(item.id, item);
            // ez mar nem kell > a decorator elvegzi
            // console.log(`Item added: ${item.id}`);
        } else {
            throw new Error(`Hibás TodoItem: ${item.id}`);
        }
    }

    private _checkItem(item: TodoItem<T>): boolean | Error
    {
        if (item.content.hasOwnProperty('message') || item.content.hasOwnProperty('dueDate')) {
            return true;
        }

        console.log(item.hasOwnProperty('message'));
        console.log(item.hasOwnProperty('dueDate'));

        console.log('ITEM:', item);

        return false;
    }

    public delItem(): void
    {
        //
    }

    public listItems(): void
    {
        //
    }
}
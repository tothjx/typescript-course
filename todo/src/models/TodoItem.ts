import {types} from '../services/types';

export class TodoItem<T> {
    public id: number;
    public content: T;

    constructor(id: number, content: T) {
        this.id = id;
        this.content = content;
    }
}

import { types } from "services/types";
export type todoContent = types.typeMsg | types.typeDate;

export class TodoItem<T extends todoContent> {
    public id: number;
    public content: T;

    constructor(id: number, content: T) {
        this.id = id;
        this.content = content;
    }
}

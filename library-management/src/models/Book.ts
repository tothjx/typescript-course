import { IBook } from "../interfaces/IBook";
import { Category } from "./Category";

export class Book implements IBook {
    id: number;
    title: string;
    author: string;
    category: Category;

    constructor(id: number, title: string, author: string, category: Category) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.category = category;
    }
}

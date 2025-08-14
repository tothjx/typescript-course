import { Category } from "models/Category";

export interface IBook {
    id: number;
    title: string;
    author: string;
    category: Category;
    price?: number;
}

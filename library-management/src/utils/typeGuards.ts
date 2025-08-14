import { Book } from "../models/Book";
import { User } from "../models/User";

export function isBook(obj: any): obj is Book {
    return obj &&
        typeof obj.id === 'number' &&
        typeof obj.title === 'string' &&
        typeof obj.author === 'string';
}

export function isUser(obj: any): obj is User {
    return obj &&
        typeof obj.id === 'number' &&
        typeof obj.name === 'string';
}

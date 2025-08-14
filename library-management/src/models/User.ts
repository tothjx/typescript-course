import { IUser } from "interfaces/IUser";

export class User implements IUser {
    id: number;
    name: string;
    email?: string;

    constructor(id: number, name: string, email?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

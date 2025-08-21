import { Category } from "./Category";

// esemeny
export class Event
{
    public id: number;
    public name: string;
    public startDate: Date;
    public endDate: Date;
    public category: Category

    constructor(id: number, name: string, startDate: Date, endDate: Date)
    {
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

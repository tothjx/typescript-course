import { IProduct } from "@interfaces/IProduct";

export class Product implements IProduct
{
    public id: string;
    public name: string;
    public price: number;
    public description?: string;

    constructor (id: string, name: string, price: number, description: string = '')
    {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description =  description;
    }
}

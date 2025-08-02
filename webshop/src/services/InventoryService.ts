import { Product } from "models/Product";

export class InventoryService
{
    public products: Product[];

    constructor()
    {
        this.products = [];
    }
}

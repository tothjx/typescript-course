import { Product } from "./Product";
import { Order } from "./Order";
import { InventoryService } from "../services/InventoryService";
import { getID } from "../services/getID";

export class User
{
    public id: string;
    public name: string;
    public email: string;

    constructor (id: string, name: string, email: string)
    {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public makeOrder(products: Product[], is: InventoryService): void
    {
        products.forEach((product: Product) => {
            is.removeProductById(product.id);
        });

        let newOrder: Order = new Order(getID(), this.id, products);
        is.addOrder(newOrder);
    }
}

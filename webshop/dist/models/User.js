import { Order } from "./Order.js";
import { getID } from "../services/getID.js";
export class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    makeOrder(products, is) {
        products.forEach((product) => {
            is.removeProductById(product.id);
        });
        let newOrder = new Order(getID(), this.id, products);
        is.addOrder(newOrder);
    }
}

import { User } from "../models/User";
import { Product } from "../models/Product";
import { InventoryService } from "./InventoryService";

export class UserService
{
    private _users: User[];

    constructor() {
        this._users = [];
    }

    public addUser(user: User): void
    {
        this._users.push(user);
    }

    public order(user: User, products: Product[], is: InventoryService): void
    {
        // termekek ellenorzese
        products.forEach((product: Product) => {
            if (!is.checkProduct(product)) {
                throw new Error(`A termék jelenleg nem elérhető: ${product.name}`);
            };
        });

        // nincs hianyzo termek > mehet a rendeles
        user.makeOrder(products, is);
    }

    public listUsers(): void
    {
        console.log('service users:', this._users);
    }
}

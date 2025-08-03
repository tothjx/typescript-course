import { Order } from "models/Order";
import { Product } from "models/Product";

export class InventoryService
{
    public products: Product[];
    private _orders: Order[];

    constructor()
    {
        this.products = [];
        this._orders = [];
    }

    public checkProduct(product: Product): boolean
    {
        const res = this.products.filter(i => i.id === product.id);
        return res.length > 0;
    }

    public addProduct(product: Product): void
    {
        this.products.push(product);
    }

    public removeProductById(id: string): void
    {
        this.products = this.products.filter(i => i.id !== id);
    }

    public searchProductByIdOrName(str: string): void
    {
        if(this.products.length > 0) {
            // teljes egyezoseg
            // const res = this.products.find(i => (i.id === str || i.name === str));
            // a nevben reszleges egyezoseget vizsgalunk
            const res = this.products.filter(i => i.id === str || i.name.includes(str));
            console.log(`Kereső-kifejezés: ${str} (${res.length} találat)`);
            console.log(res);
        }
    }

    public addOrder(order: Order): void
    {
        this._orders.push(order);
    }

    public listInventory(): void
    {
        console.log('INVENTORY:', this.products);
    }

    public listOrders(): void
    {
        console.log('ORDERS:', this._orders);
    }
}

import { Product } from "@models/Product";

enum Status {
    NEW = 'új',
    UNDER_PROCESSING = 'feldolgozás alatt',
    DELIVERED = 'kiszállítva'
}

export class Order
{
    public id: string;
    public products: Product[];
    private _status: Status;

    constructor(id: string, products: Product[])
    {
        this.id = id;
        this.products = products;
        this._status = Status.NEW;
    }

    protected updateStatus(newStatus: Status): void
    {
        this._status = newStatus;
    }

    public sumPrices(): number
    {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    } 
}

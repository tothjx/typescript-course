"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
class InventoryService {
    constructor() {
        this.products = [];
        this._orders = [];
    }
    checkProduct(product) {
        const res = this.products.filter(i => i.id === product.id);
        return res.length > 0;
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProductById(id) {
        this.products = this.products.filter(i => i.id !== id);
    }
    searchProductByIdOrName(str) {
        if (this.products.length > 0) {
            // teljes egyezoseg
            // const res = this.products.find(i => (i.id === str || i.name === str));
            // a nevben reszleges egyezoseget vizsgalunk
            const res = this.products.filter(i => i.id === str || i.name.includes(str));
            console.log(`Kereső-kifejezés: ${str} (${res.length} találat)`);
            console.log(res);
        }
    }
    addOrder(order) {
        this._orders.push(order);
    }
    listInventory() {
        console.log('INVENTORY:', this.products);
    }
    listOrders() {
        console.log('ORDERS:', this._orders);
    }
}
exports.InventoryService = InventoryService;

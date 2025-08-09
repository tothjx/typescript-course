"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.Status = void 0;
var Status;
(function (Status) {
    Status["NEW"] = "\u00FAj";
    Status["UNDER_PROCESSING"] = "feldolgoz\u00E1s alatt";
    Status["DELIVERED"] = "kisz\u00E1ll\u00EDtva";
})(Status || (exports.Status = Status = {}));
class Order {
    constructor(id, idUser, products) {
        this.id = id;
        this.products = products;
        this.idUser = idUser;
        this._status = Status.NEW;
    }
    updateStatus(newStatus) {
        this._status = newStatus;
    }
    sumPrices() {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }
}
exports.Order = Order;

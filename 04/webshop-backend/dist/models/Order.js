var Status;
(function (Status) {
    Status["NEW"] = "\u00FAj";
    Status["UNDER_PROCESSING"] = "feldolgoz\u00E1s alatt";
    Status["DELIVERED"] = "kisz\u00E1ll\u00EDtva";
})(Status || (Status = {}));
var Order = /** @class */ (function () {
    function Order(id, products) {
        this.id = id;
        this.products = products;
        this._status = Status.NEW;
    }
    Order.prototype.updateStatus = function (newStatus) {
        this._status = newStatus;
    };
    Order.prototype.sumPrices = function () {
        return this.products.reduce(function (sum, product) { return sum + product.price; }, 0);
    };
    return Order;
}());
export { Order };

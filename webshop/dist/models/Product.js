var Product = /** @class */ (function () {
    function Product(id, name, price, description) {
        if (description === void 0) { description = ''; }
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
    return Product;
}());
export { Product };

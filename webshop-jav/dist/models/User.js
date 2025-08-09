"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Order_1 = require("./Order");
const getID_1 = require("../services/getID");
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    makeOrder(products, is) {
        products.forEach((product) => {
            is.removeProductById(product.id);
        });
        let newOrder = new Order_1.Order((0, getID_1.getID)(), this.id, products);
        is.addOrder(newOrder);
    }
}
exports.User = User;

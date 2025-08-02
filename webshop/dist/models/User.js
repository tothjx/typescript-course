import { Order } from "./Order.js";
var User = /** @class */ (function () {
    function User(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    User.prototype.makeOrder = function (id, products) {
        return new Order(id, products);
    };
    return User;
}());
export { User };

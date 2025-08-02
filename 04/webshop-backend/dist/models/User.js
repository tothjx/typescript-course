import { Order } from "@models/Order";
import { getUnid } from "@services/getUnid";
var User = /** @class */ (function () {
    function User(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    User.prototype.makeOrder = function (products) {
        var id = getUnid();
        return new Order(id, products);
    };
    return User;
}());
export { User };

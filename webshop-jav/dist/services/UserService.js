"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    constructor() {
        this._users = [];
    }
    addUser(user) {
        this._users.push(user);
    }
    order(user, products, is) {
        // termekek ellenorzese
        products.forEach((product) => {
            if (!is.checkProduct(product)) {
                throw new Error(`A termék jelenleg nem elérhető: ${product.name}`);
            }
            ;
        });
        // nincs hianyzo termek > mehet a rendeles
        user.makeOrder(products, is);
    }
    listUsers() {
        console.log('service users:', this._users);
    }
}
exports.UserService = UserService;

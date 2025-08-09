"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getID = getID;
const LENGTH_DEFAULT = 32;
function getID(length = LENGTH_DEFAULT) {
    let out = '';
    let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (length < 4 || length > 64) {
        length = LENGTH_DEFAULT;
    }
    for (let i = 0; i <= length - 1; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length);
        out += characters.substring(randomNumber, randomNumber + 1);
    }
    return out;
}

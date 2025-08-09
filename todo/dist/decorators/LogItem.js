"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogItem = LogItem;
function LogItem(target, propertyKey, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Új bejegyzés hozzáadva...`);
        originalMethod.apply(this, args);
    };
}

// https://exercism.org/tracks/javascript/exercises/fruit-picker

import { checkStatus, checkInventory } from "./grocer.js";

const c = console.log.bind(console);

function isServiceOnline() {
    return checkStatus((status) => status === "ONLINE");
}

function pickFruit(variety, quantity, callback) {
    const object = {
        variety,
        quantity,
    };
    checkInventory(object, callback);
}

function purchaseInventoryIfAvailable(err, isAvailable) {
    if (err) {
        throw new Error(err);
    }
    if (err == null && isAvailable == true) {
        return "PURCHASE"
    }
    if (err == null && isAvailable == false) {
        return "NOOP"
    }
}

function pickAndPurchaseFruit(variety, quantity) {
    return pickFruit(variety, quantity, purchaseInventoryIfAvailable);
}

c(pickFruit('strawberry', 5, () => 'PURCHASE'));

// c(purchaseInventoryIfAvailable(null, true));


c(pickAndPurchaseFruit("apple", 20, "PURCHASE"));
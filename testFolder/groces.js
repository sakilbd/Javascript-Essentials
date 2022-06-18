/**
 * STORE STATUS API
 */

let storeStatus = 'OFFLINE';

export function setStatus(status) {
    storeStatus = status;
}

export function resetStatus() {
    storeStatus = 'OFFLINE';
}


export function checkStatus(callback) {
    return callback(storeStatus);
}



let lastInventoryQuery = undefined;
let inventoryResponse = undefined;


export function setResponse(...nextResponse) {
    inventoryResponse = nextResponse;
}


export function getLastQuery() {
    return lastInventoryQuery;
}


export function resetQuery() {
    lastInventoryQuery = undefined;
    inventoryResponse = ['undefined response'];
}


export default function checkInventory(query, callback) {
    lastInventoryQuery = query;
    return callback.apply(null, inventoryResponse);
}
// https: //leetcode.com/problems/apply-discount-every-n-orders/

const c = console.log.bind(console);

var Cashier = function(n, discount, products, prices) {
    this.n = n;
    this.discount = discount;

    this.clientCount = 1;
    this.nCount = this.n;
    this.priceMap = new Map();
    for (let i in products) {
        this.priceMap.set(products[i], prices[i]);
    }
};

/**
 * @param {number[]} product
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function(product, amount) {
    let calculateBill = 0;
    product.forEach((item, i) => {
        calculateBill += this.priceMap.get(item) * amount[i];
    });
    c("calculateBill : " + calculateBill);
    c("clienCount : " + this.clientCount);
    c("nCount : " + this.nCount);
    if (this.clientCount == this.nCount) {
        this.nCount += this.n >= 2 ? this.n : 1;

        calculateBill = calculateBill * ((100 - this.discount) / 100);
    }

    this.clientCount++;
    return calculateBill;
};

var obj = new Cashier(
    1,
    50, [1, 2, 3, 4, 5, 6, 7], [100, 200, 300, 400, 300, 200, 100]
);
var param_1 = obj.getBill([1, 2], [1, 2]);
c(param_1);
var param_1 = obj.getBill([3, 7], [10, 10]);
c(param_1);
var param_1 = obj.getBill([1, 2, 3, 4, 5, 6, 7], [1, 1, 1, 1, 1, 1, 1]);
c(param_1);
var param_1 = obj.getBill([4], [10]);
c(param_1);
var param_1 = obj.getBill([7, 3], [10, 10]);
c(param_1);
var param_1 = obj.getBill([7, 5, 3, 1, 6, 4, 2], [10, 10, 10, 9, 9, 9, 7]);
c(param_1);
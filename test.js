// https: //leetcode.com/problems/online-stock-span/description/
const c = console.log.bind(console);

var StockSpanner = function() {
    this.arr = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    this.arr.push(price);
    let array = this.arr;
    let idx = array.length;
    let count = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        // c("item :" + array[i])
        if (array[i] <= price) {
            if (idx == i + 1) {
                idx = i;
                count++;
                // return 1;
            } else {
                break;
            }

            // idx = i;
            // return 1
        }
    }

    // array.reverse();
    return count;
    return this.arr;
};

var obj = new StockSpanner();
// var param_1 = obj.next()

let _arr = [32, 82, 73, 99, 91];

_arr.forEach((item) => {
    var param_1 = obj.next(item);
    c(param_1);
});
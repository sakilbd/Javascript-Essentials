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
    let idx = -1;
    let length =
        array.reverse().filter((item, i) => {
            // c("item :" + item)
            if (item <= price) {
                if (idx == i - 1) {
                    idx = i;

                    return 1;
                }

                // idx = i;
                // return 1

            }
        }).length
    array.reverse();
    return length;
    return this.arr;
};

var obj = new StockSpanner();
// var param_1 = obj.next()

let _arr = [32, 82, 73, 99, 91];

_arr.forEach((item) => {
    var param_1 = obj.next(item);
    c(param_1);
});
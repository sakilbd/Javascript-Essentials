const c = console.log.bind(console);


var StockSpanner = function() {
    this.arr = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {

    let length = this.arr.filter((item, i) => item < price).length + 1;
    this.arr.push(price);
    return length;
    return this.arr;
};

var obj = new StockSpanner()
    // var param_1 = obj.next()


let _arr = [100, 80, 60, 70, 75, 85]

_arr.forEach(item => {
    var param_1 = obj.next(item)
    c(param_1)
})
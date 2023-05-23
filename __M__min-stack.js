// https://leetcode.com/problems/min-stack/
const c = console.log.bind(console);

var MinStack = function() {
    this.arr = []
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.arr.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const pop = this.arr.pop();

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const top = this.arr.pop();
    this.arr.push(top);
    return top
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    const copyArray = [...this.arr]
    const min = copyArray.sort((a, b) => {
        return a - b;
    })

    return min[0];
};

var obj = new MinStack();
obj.push(-2);
obj.push(-3)
    // obj.pop();
var param_3 = obj.top();
c("top :" + param_3)
c(obj)
var param_4 = obj.getMin();

c("min : " + param_4)
// https://leetcode.com/problems/design-a-stack-with-increment-operation/description/

const c = console.log.bind(console);

/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.maxElem = maxSize;

    this.stack = [];


};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {

    this.stack.length < this.maxElem ? this.stack.push(x) : ''; // as push should not be done if stack.length >maxElem.

};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    return this.stack.length == 0 ? -1 : this.stack.pop();



};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {

    let size = this.stack.length;


    if (k > size) {

        for (let i in this.stack) {

            this.stack[i] += val


        }
    } else {

        for (let i = 0; i < k; i++) {
            this.stack[i] += val
        }
    }

};

var obj = new CustomStack(3);
obj.push(1);
obj.push(2);
obj.push(3);

var param_2 = obj.pop();
obj.increment(3, 2);

// c(param_2)
c(obj)
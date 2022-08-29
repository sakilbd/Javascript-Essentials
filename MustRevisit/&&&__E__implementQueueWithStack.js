// https://leetcode.com/problems/implement-queue-using-stacks/
const c = console.log.bind(console);

var MyQueue = function() {
    this.array = []
};


MyQueue.prototype.push = function(x) {
    this.array.push(x)
};


MyQueue.prototype.pop = function() {
    if (this.array.length > 0) {
        return this.array.shift()
    }
    return false
};


MyQueue.prototype.peek = function() {
    if (this.array.length > 0) {
        return this.array[0]
    }
};


MyQueue.prototype.empty = function() {
    return this.array.length === 0
};
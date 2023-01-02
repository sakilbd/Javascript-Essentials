// https://leetcode.com/problems/shuffle-an-array/description/

const c = console.log.bind(console);

var Solution = function(nums) {
    this.original = nums;
    // return nums;
};

Solution.prototype.reset = function() {
    return this.original;
};

Solution.prototype.shuffle = function() {
    let unshuffled = this.original;
    let shuffled = unshuffled
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);


    return shuffled;
};

let nums = [1, 2, 3];

var obj = new Solution(nums);
// c(obj);
var param_1 = obj.reset();
var param_2 = obj.shuffle();
c(param_1);
c(param_2);
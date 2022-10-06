// https://leetcode.com/problems/rearrange-array-elements-by-sign/
const c = console.log.bind(console);

var rearrangeArray = function(nums) {
    let posNumbers = [];
    let negNumbers = []
    for (let i of nums) {
        Math.sign(i) == -1 ? negNumbers.push(i) : posNumbers.push(i);
    }
    let res = []
    for (let i in posNumbers) {
        res.push(posNumbers[i]);
        res.push(negNumbers[i])
    }
    return res;
};

c(rearrangeArray([3, 1, -2, -5, 2, -4]))
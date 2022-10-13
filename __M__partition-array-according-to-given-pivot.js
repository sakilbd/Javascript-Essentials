// https://leetcode.com/problems/partition-array-according-to-given-pivot/

const c = console.log.bind(console);


var pivotArray = function(nums, pivot) {
    let left = []
    let right = []
    let pvt = [];
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        nums[i] < pivot ? left.push(nums[i]) : nums[i] != pivot ? right.push(nums[i]) : '';
        nums[i] == pivot ? pvt.push(nums[i]) : ''
    }
    // return right;
    return [...left, ...pvt, ...right];

};


c(pivotArray([9, 12, 5, 10, 14, 3, 10], 10))
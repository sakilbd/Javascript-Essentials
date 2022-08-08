// https://leetcode.com/problems/missing-number/


const c = console.log.bind(console);

var missingNumber = function(nums) {
    let numsSorted = nums.sort((a, b) => a - b);
    let maxRange = numsSorted[nums.length - 1];

    if (nums[0] != 0) {
        return 0;
    } else {
        for (let i = 1; i < numsSorted.length; i++) {
            if (nums[i] - 1 != nums[i - 1]) {
                return i;
            }
        }
    }
    return nums.length;
    // return numsSorted;
};

let testArr = [];
for (let p = 0; p < 10000; p++) {
    if (p == 8965) {} else {
        testArr.push(p);
    }
}

c(missingNumber(testArr));
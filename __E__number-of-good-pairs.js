// https://leetcode.com/problems/number-of-good-pairs/description/

const c = console.log.bind(console);

var numIdenticalPairs = function(nums) {
    let count = 0;
    let i = 0;
    while (i < nums.length) {
        let lastIndex = nums.lastIndexOf(nums[i]);
        if (lastIndex !== i) {
            count++;
            nums[lastIndex] = -nums[i];
            // c(nums)
        } else {
            i++;
        }
    }
    return count;
};

c(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
c(numIdenticalPairs([1, 1, 1, 1]));
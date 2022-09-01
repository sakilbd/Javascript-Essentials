// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
const c = console.log.bind(console);

var searchRange = function(nums, target) {
    let startIndex = -1;
    let endIndex = -1;
    for (let i in nums) {
        if (nums[i] == target) {
            startIndex = i;
            break;
        }
    }
    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] == target) {
            endIndex = i;
            break;
        }
    }
    if (startIndex == -1 && endIndex == -1) {
        return [-1, -1];
    }
    return [parseInt(startIndex), endIndex];
};

c(searchRange([5, 7, 7, 8, 8, 10], 6));
c(searchRange([1], 1));
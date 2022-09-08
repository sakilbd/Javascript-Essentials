// https://leetcode.com/problems/jump-game/
const c = console.log.bind(console);
//done by me passed all test cases except two 
var canJump = function(nums) {
    if (nums.length == 1) {
        return true;
    }
    let heightValue = 0;
    let count = 0;
    for (let i in nums) {
        count -= 1;
        if (nums[i] >= heightValue) {
            heightValue = nums[i];
            count = heightValue;
        }
        if (count == 0) {
            // c(nums[i])
            heightValue = nums[i];
            count = heightValue;
            if (heightValue == 0) {
                if (i == nums.length - 1) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        // c("count :" + count)
    }
    return true;
};

// c(canJump([3, 2, 1, 0, 4]));
// c(canJump([2, 3, 1, 1, 4]));
// c(canJump([1, 2, 0, 1, 0, 4]));
// c(canJump([2, 2, 0, 3, 0, 0, 4]));
c(canJump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]))
// https://leetcode.com/problems/jump-game/

const c = console.log.bind(console);
//trying to solve the last test case..
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
            // c(i);
            // c(nums[i])
            // heightValue = nums[i];
            // count = heightValue;
            if (i == nums.length - 1) {
                return true;
            }
            if (nums[i] == 0) {
                return checkBackward(i, nums, heightValue);
            }
        }
        // c("count :" + count)
    }
    return true;
};
let checkBackward = (i, nums, highest) => {
    // let heightValue = 0;

    let j = i - 1;
    let check = true;
    let count = 0;
    let heightValue = 0;
    let arrFinishCheck = false;
    while (nums[j] < highest) {
        let _break = 0;
        for (let k = j; k < nums.length; k++) {
            // c(k)
            count -= 1;
            if (nums[k] >= heightValue) {
                heightValue = nums[k];
                count = heightValue;
            }
            if (k == nums.length - 1) {
                // _break = 1;
                arrFinishCheck = true;
                return "what";
            }
            if (count == 0) {

                // c(nums[i])
                heightValue = nums[k];
                count = heightValue;
                if (k == nums.length - 1) {
                    _break = 1;
                    check = true;
                    break;
                }
                if (nums[i] == 0) {
                    // _break = 1
                    // check = false;
                    checkBackward(j - 1, nums, highest)
                        // break;
                }
            }
            // c("count :" + count)
        }
        if (_break == 1) {
            return check;
        }
        j--;
    }

};

c(canJump([3, 2, 1, 0, 4]));
c(canJump([2, 3, 1, 1, 4]));
c(canJump([1, 2, 0, 1, 0, 4]));
c(canJump([2, 2, 0, 3, 0, 0, 4]));
c(canJump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]));
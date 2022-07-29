// https://leetcode.com/problems/move-zeroes/

const c = console.log.bind(console);

var moveZeroes = function(nums) {

    let count = nums.length;
    let indexCheck = 0;
    while (count--) {
        for (let i = indexCheck; i < nums.length; i++) {
            if (nums[i] == 0) {
                let zero = nums.splice(i, 1);
                // c(nums);
                indexCheck = i;
                nums.push(zero[0]);
                break;
            }

        }
    }
    return nums;
};



c(moveZeroes([0, 1, 0, 3, 12]));
c(moveZeroes([2, 1]));
c(moveZeroes([0, 0, 1]));
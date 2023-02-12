// https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/description/

const c = console.log.bind(console);


var numOfPairs = function(nums, target) {
    let count = 0;
    nums.forEach((item1, j) => {
        nums.forEach((item, i) => {
            if (i != j) {
                if (item1 + item == target) {
                    count++;
                }
            }
        });
    });
    return count
        // return count;
};



c(numOfPairs(["777", "7", "77", "77"], '7777'))
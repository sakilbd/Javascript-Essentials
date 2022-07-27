// https://leetcode.com/problems/longest-consecutive-sequence/submissions/
const c = console.log.bind(console);
test cases with minus value not working and last index not counting
var longestConsecutive = function(nums) {
    if (nums.length == 0) {
        return 0;
    }
    let sortedNum = nums.sort((a, b) => a - b);
    // return sortedNum;
    let resArrayCount = [];
    let itemCount = 0;
    sortedNum.forEach((item, i) => {

        if (sortedNum[i + 1]) {
            // c(sortedNum[i + 1]);
            // c((nums[i + 1] - (nums[i])));
            if (((sortedNum[i + 1] - (item)) == 1)) {
                // c((nums[i + 1] - (nums[i])));
                // c(i);
                itemCount++;
            } else {
                resArrayCount.push(itemCount);
                itemCount = 0;
                // c("else");
            }
        }
    });
    if (resArrayCount.length == 0) { //if all elements are in sequence or last all elements are in sequence 
        resArrayCount.push(itemCount);
    }
    c(resArrayCount);
    // if (resArrayCount[0] == 0) {
    //     return 0
    // }
    return resArrayCount.sort((a, b) => b - a)[0] + 1;

};

// c(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

// c(longestConsecutive([100, 4, 200, 1, 3, 2, 6, 7, 8, 9, 10]));
// c(longestConsecutive([0]));
c(longestConsecutive([0, 1, 2, 3, 4, 6, 7, 8, 10]))
c(longestConsecutive([0, -1, -3]))
// https://leetcode.com/problems/longest-consecutive-sequence/submissions/
const c = console.log.bind(console);
// test cases with minus value not working and last index not counting
var longestConsecutive = function(nums) {
    if (nums.length == 0) {
        return 0;
    }
    let sortedNum = [...new Set(nums.sort((a, b) => a - b))];
    c(sortedNum);

    let resArrayCount = [];
    let arrays = [];
    let itemCount = 0;
    let array = [];
    sortedNum.forEach((item, i) => {
        // c(sortedNum[i + 1]);
        // c(Math.abs((Math.abs(sortedNum[i + 1]) - Math.abs(item))));
        // if (sortedNum[i + 1]) {
        // c(i);
        // c(sortedNum[i + 1]);
        // c((nums[i + 1] - (nums[i])));

        if (Math.abs(Math.abs(sortedNum[i + 1]) - Math.abs(sortedNum[i])) == 1) {
            // c((nums[i + 1] - (nums[i])));
            // c(i);
            array.push(item);
            // c(array);
            itemCount++;
        } else {
            // c(array)
            arrays.push(array);
            resArrayCount.push(itemCount);

            arrays = [];
            itemCount = 0;
            // c("else");
        }
        // }
    });
    // c(itemCount);
    if (resArrayCount.length == 0) { //if all elements are in sequence or last all elements are in sequence 
        resArrayCount.push(itemCount);
    }
    // c(resArrayCount);
    c(arrays);
    // if (resArrayCount[0] == 0) {
    //     return 0
    // }
    return resArrayCount.sort((a, b) => b - a)[0];

};

// c(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

// // c(longestConsecutive([100, 4, 200, 1, 3, 2, 6, 7, 8, 9, 10]));
// c(longestConsecutive([0]));
// // c(longestConsecutive([0, 1, 2, 3, 4, 6, 7, 8, 10]))
// c(longestConsecutive([3, 0, -1, -2, -3, ]))

// // c(longestConsecutive([]));
// c(longestConsecutive([1, 2, 0, 1]));

c(longestConsecutive([-7, -1, 3, -9, -4, 7, -3, 2, 4, 9, 4, -9, 8, -7, 5, -1, -7]));
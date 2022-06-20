// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
// Medium
// 80. Remove Duplicates from Sorted Array II

const c = console.log.bind(console);


var removeDuplicates = function(nums) {
    let sortedArray = {};

    nums.forEach((item, i) => {
        sortedArray[item] = 0;
    })
    let expectedNums = [];
    Object.keys(sortedArray).map(item => {
        expectedNums.push(parseInt(item));
    });
    nums.sort((a, b) => a - b);
    let finalArray = [];
    expectedNums.sort((a, b) => a - b).forEach((newItem, i) => {
            var count = 1;
            nums.forEach((item, i) => {
                    if (count <= 2) {
                        if (newItem == item) {
                            count++;
                            finalArray.push(item);
                            // c(finalArray);
                            // c("count :" + count);
                        }
                    }
                })
                // count = 0;
        })
        // return finalArray;
    const k = finalArray.length;
    finalArray.forEach((item, i) => {
        nums[i] = item;
    })
    return k;
};

c(removeDuplicates([1, 1, 1, 2, 2, 3]))
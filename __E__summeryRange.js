// https://leetcode.com/problems/summary-ranges/

const c = console.log.bind(console);

var summaryRanges = function(nums) {
    let resArray = [];
    let arr = [nums[0]];
    for (let i = 0; i < nums.length; i++) {
        if (i + 1) {
            nums[i + 1] - nums[i] == 1 ? "" : arr.push(nums[i]);
        }
        if (arr.length == 2) {
            resArray.push([...new Set(arr)]);
            arr = [];
            arr.push(nums[i + 1]);
        }
        // c(arr);
    }

    return resArray.map((item) => {
        if (item.length == 1) {
            return `${item[0]}`;
        } else {
            return `${item[0]}->${item[1]}`;
        }
    });
    return resArray;
};

c(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
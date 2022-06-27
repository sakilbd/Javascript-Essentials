// https://leetcode.com/problems/find-all-duplicates-in-an-array/
const c = console.log.bind(console);
// my solution with TLE 
// var findDuplicates = function(nums) {
//     let numsObject = {};

//     nums.forEach((item) => {
//         // c(item);

//         numsObject[item] = 0;
//     });

//     Object.keys(numsObject).map((item) => {
//         let count = 0;
//         nums.forEach((numItem) => {
//             if (item == numItem) {
//                 count++;
//                 numsObject[numItem] = count;
//             }
//             // c(numsObject[numItem]++);
//         });
//     });
//     var finalArray = [];
//     Object.keys(numsObject).map((item) => {
//         numsObject[item] == 2 ? finalArray.push(parseInt(item)) : '';
//     });
//     return finalArray;
// };

// Optimal solution without TLE
var findDuplicates = function(nums) {
    let i = 0;
    while (i < nums.length) {
        const j = nums[i] - 1;
        if (nums[i] !== nums[j]) {
            const temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        } else {
            i++;
        }
    }

    const duplicates = [];
    for (i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            duplicates.push(nums[i]);
        }
    }

    return duplicates;
};

c(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
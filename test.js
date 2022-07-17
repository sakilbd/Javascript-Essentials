// https://leetcode.com/problems/rotate-array/

// const c = console.log.bind(console);

// var rotate = function(nums, k) {
//     let i = 1;
//     let j = nums.length - 1;
//     let temp = 0;
//     // nums.reverse();
//     // return nums;
//     while (i <= k) {
//         temp = nums[j];
//         while (j > 0) {
//             if (j >= 1) {
//                 // [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
//                 // c(nums[j])
//                 // c(nums[j - 1])
//                 nums[j] = nums[j - 1];
//                 // c(nums[j])
//                 // c(nums[j - 1])

//             }
//             j--;
//         }
//         nums[0] = temp;
//         j = nums.length - 1;
//         i++;
//         // c(nums);
//         // break;
//     }

//     return nums;
// };


// var rotate = function(nums, k) {
//     while (k--) {
//         nums.unshift();
//     }
//     return nums.pop();
// };


// c(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(process.cwd());
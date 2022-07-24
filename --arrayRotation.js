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




const c = console.log.bind(console);
// //also time limit exceedes
// var rotate = function(nums, k) {
//     while (k--) {
//         nums.unshift();
//     }
//     return nums.pop();
// };

var rotate = function(nums, k) {
    const len = nums.length
    k = (k % len)
        // return k;

    let end = nums.splice(len - k)
        // return end;


    nums.splice(0, 0, ...end);
    return nums;
};



c(rotate([1, 2, 3, 4, 5, 6, 7], 3));
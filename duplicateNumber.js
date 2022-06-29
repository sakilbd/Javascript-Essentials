const c = console.log.bind(console);
// https://leetcode.com/problems/find-the-duplicate-number/

//accepted with 450ms timecomplexity
var findDuplicate = function(nums) {
    const sorted = nums.sort((a, b) => a - b);
    const set = [...new Set(sorted)];
    const object = {}

    set.forEach(item => {
        object[item] = 0;
    })
    sorted.forEach(item => {
        object[item]++;
    })
    let result = 0
    Object.keys(object).map(item => {
        object[item] >= 2 ? result = item : '';
    })

    return result;
};

//optimal solution from community
// var findDuplicate = function(nums) {
//     let n = nums.length;
//     let arr = [];
//     for (let i = 0; i < nums.length; i++) {
//         arr.push(nums[i]);
//     }
//     for (let i = 0; i < nums.length; i++) {
//         arr[nums[i]] = arr[nums[i]] + n;
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (Math.floor(arr[i] / n) > 1) {
//             return i;
//         }
//     }
// };

c(findDuplicate([1, 3, 4, 2, 2]))
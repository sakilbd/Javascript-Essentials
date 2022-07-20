// https://leetcode.com/problems/maximum-number-of-pairs-in-array/submissions/


const c = console.log.bind(console);

//accepted on first attempted done by me
// var numberOfPairs = function(nums) {
//     let num = [...new Set(nums)];
//     // return num;
//     let obj = {};
//     for (let i in num) {
//         obj[num[i]] = 0;
//     }
//     for (let i in nums) {

//         obj[nums[i]]++;
//     }
//     let resArray = Object.values(obj).map((item) => {
//         return item;
//     })
//     let pairCount = 0;
//     let nonPairCount = 0;
//     for (let i of resArray) {
//         pairCount += Math.floor(i / 2);
//         if (i % 2 != 0) {
//             nonPairCount++;
//         }
//     }
//     return [pairCount, nonPairCount];
// };

//dumbass solution by me at hanged head :D 

// optimal fucking solution 
// const numberOfPairs = function(nums) {
//     nums.sort((a, b) => a - b)

//     let i = 0
//     let count = 0
//     let rem = 0

//     while (i < nums.length) {
//         if (nums[i] === nums[i + 1]) {
//             count++
//             i++
//         } else {
//             rem++
//         }

//         i++
//     }

//     return [count, rem]
// };


c(numberOfPairs([1, 1]));
c(numberOfPairs([1, 3, 2, 1, 3, 2, 2]));
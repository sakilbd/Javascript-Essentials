// https://leetcode.com/problems/longest-increasing-subsequence/

const c = console.log.bind(console);

var lengthOfLIS = function(nums) {
    let resArray = Array(nums.length).fill(1);

    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                resArray[i] = Math.max(resArray[i], 1 + resArray[j])
                    // c(Math.max(1, 1 + resArray[j]));

            }


        }

    }
    return resArray.sort((a, b) => b - a)[0];
};




// optimized with less time complexity
// var lengthOfLIS = function(nums) {

//     if(!nums.length) return 0;

//     // dynamic length because JavaScript is awesome like that :)
//     // hence we don't need to track of the current running length of tails
//     const tails = [];
// //  [10,9,2,5,3,7,101,18]  
//     tails[0] = nums[0];

//     for(let i = 1; i < nums.length; i++) {

//         // replace current nums[i] with head if it's smaller
//         if(nums[i] < tails[0]) {
//             tails[0] = nums[i];     
//         // if current nums[i] is bigger than the largest value we've recorded
//         // we can extend our tails by current nums[i]
//         } else if(nums[i] > tails[tails.length-1]) {
//             tails.push(nums[i]);
//         } else {
//             // using binary search to find the insertion point of current nums[i]
//             // return r because we're looking to replace index of tail that's greater than nums[i]
//             let l = 0;
//             let r = tails.length-1;
//             while(l < r) {
//                 const mid = Math.floor((l+r)/2 )
//                 if(tails[mid] >= nums[i]) {
//                     r = mid
//                 } else {
//                     l = mid + 1;
//                 }
//             }
//             tails[r] = nums[i];
//         }

//     }

//     return tails.length;

// };


// c(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))

c(lengthOfLIS([1, 2, 4, 3]))
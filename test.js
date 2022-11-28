// https://leetcode.com/problems/4sum/

const c = console.log.bind(console);


//by me and google -_-
const combination = (arr, target) => {
    const result = [];
    result.length = 4; //n=2
    let res = [];

    function combine(input, len, start) {
        if (len === 0) {
            // console.log(result); //process here the result
            // c("fuck")
            const calc = [...result];
            // c(calc)
            // c(res);
            result.reduce((a, b) => a + b) === target ? res.push(calc.sort((a, b) => a - b)) : '';
            return;
        }
        let inputLength = input.length - len;
        for (let i = start; i <= inputLength; i++) {
            result[result.length - len] = input[i];
            combine(input, len - 1, i + 1);
        }
    }
    combine(arr, result.length, 0);
    return res;
};

var fourSum = function(nums, target) {
    let res = combination(nums, target);
    return Array.from(new Set(res.map(JSON.stringify)), JSON.parse)
};



//from community 

// var fourSum = function(nums, target) {
//     nums = nums.sort((a, b) => a - b)
//     var ans = []
//     for(var m = 0; m < nums.length - 3; m++){
//         if(nums[m] > target && target > 0) return ans
//         for(var i = m + 1; i < nums.length - 2; i++){
//             for(var j = i + 1, k = nums.length - 1; j < k;){
//                 if(nums[m] + nums[i] + nums[j] + nums[k] === target){
//                     ans.push([nums[m] , nums[i] , nums[j] , nums[k]])
//                     j++
//                     k--
//                     var sign = false
//                     while(nums[j] === nums[j - 1]){
//                         if(j === k - 1) {
//                             sign = true
//                             break
//                         }
//                         j++
//                     }
//                     while(nums[k] === nums[k + 1]){
//                         if(j === k - 1) {
//                             sign = true
//                             break
//                         }
//                         k--
//                     }
//                     if(sign){
//                         break
//                     }
//                 }else if(nums[m] + nums[i] + nums[j] + nums[k] < target){
//                     j++
//                 }else{
//                     k--
//                 }
//             }
//             if(nums[i + 1] === nums[i]) i++

//             while(nums[i + 1] === nums[i] && i < nums.length - 2){
//                 i++
//             }
//         }
//         while(nums[m + 1] === nums[m] && m < nums.length - 3){
//             m++
//         }
//     }
//     return ans
// };

//from community 
c(fourSum([1, 0, -1, 0, -2, 2], 0));

c(fourSum([2, 2, 2, 2, 2], 8));

c(fourSum([-5, 5, 4, -3, 0, 0, 4, -2], 4))
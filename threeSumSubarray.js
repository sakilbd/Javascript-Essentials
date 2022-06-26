// https: //leetcode.com/problems/3sum/submissions/


// my Solution gets Invalid array eroor at line 10
const c = console.log.bind(console);

// var threeSum = function(nums) {
//     var arr = [...nums];
//     var len = arr.length,
//         subs = Array(Math.pow(2, len)).fill(0);
//     // return subs;
//     var finalArray = [];
//     subs.map((_, i) => {
//         var j = -1,
//             k = i,
//             res = [];
//         while (++j < len) {
//             k & 1 && res.push(arr[j]); //k & 1  means k % 2
//             k = k >> 1; // k>>1 means k/2
//         }
//         return res.length == 3 ? finalArray.push(res) : 0;
//     }); //slice(1) removes the first array form list which is empty here

//     var arrayWithZero = [];
//     finalArray.forEach((item) => {
//         item.reduce((a, b) => a + b) == 0 ? arrayWithZero.push(item) : "";
//     });
//     var final = [];
//     arrayWithZero.forEach((item) => {
//         final.push(item.sort());
//     });

//     var j = 0;

//     var result = [];

//     var newArray = [...final];
//     var temp = [0, 0, 0];
//     // return final;

//     let k = 0;
//     let l = 0;
//     var object = {};

//     newArray.map((item, i) => {
//         object[item] = 0;
//     });
//     // return object;

//     Object.keys(object).map((item, i) => {

//         result.push(createArray(item));

//     });

//     function createArray(string) {
//         var y = string.toString().split(',').map(Number);
//         return y;
//     }
//     return result;


// };


// optimized solution 
var threeSum = function(nums) {
    let resultArr = [];
    const sortedArr = nums.sort((a, b) => a - b);
    // return sortedArr;
    let i = 0;
    for (i = 0; i < sortedArr.length - 2; i++) {
        if (sortedArr[i] > 0) {
            break;
        }
        if (i > 0 && sortedArr[i] === sortedArr[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = sortedArr.length - 1;
        while (left < right) {
            const sum = sortedArr[i] + sortedArr[left] + sortedArr[right];
            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                resultArr.push([sortedArr[i], sortedArr[left], sortedArr[right]]);
                while (left < right && sortedArr[left] === sortedArr[left + 1]) {
                    left++;
                }
                while (left < right && sortedArr[right] === sortedArr[right - 1]) {
                    right--;
                }
                left++;
                right--;
            }
        }
    }
    return resultArr;
};




// c(threeSum([-1, 0, 1, 0]));
c(threeSum([-1, 0, 1, 2, -1, -4]));
// c(threeSum([3, 0, -2, -1, 1, 2]));
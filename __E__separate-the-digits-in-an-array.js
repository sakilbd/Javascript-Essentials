// https://leetcode.com/problems/separate-the-digits-in-an-array/description/
const c = console.log.bind(console);

//by me 
// var separateDigits = function(nums) {
//     let resArray = [];

//     nums.map((number) => {
//         const splitedArray = number.toString().split("");
//         resArray = [...resArray, ...splitedArray];
//     });
//     return resArray;
// };

//help from community 
var separateDigits = function(nums) {
    let str = "";
    for (let i = 0; i < nums.length; i++) {
        str += nums[i];
    }
    return str.split('');
};

c(separateDigits([13, 25, 83, 77]));
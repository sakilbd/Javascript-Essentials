//https://leetcode.com/problems/single-number/
//136.Single Number
//260. Single Number III

const c = console.log.bind(console);



var singleNumber = function(nums) {
    const numObject = {};
    nums.map((item, i) => {
        return numObject[item] = 0;
    })
    Object.keys(numObject).map((item) => {
        for (let x of nums) {
            x == item ? numObject[item] = numObject[item] + 1 : '';
            // numObject[item] = 1;
        }

    })
    let finalResult = [];

    Object.keys(numObject).map((item) => {
        if (numObject[item] == 1) {
            finalResult.push(item);
        }
    })
    return finalResult;
};



//optimized solution 
// var singleNumber = function(nums) {
//     let obj = {}
//     for (let i = 0; i < nums.length; i++) {
//         if (obj[nums[i]]) {
//             delete obj[nums[i]];
//         } else {
//             obj[nums[i]] = 1;
//         }
//     }
//     return Object.keys(obj)[0];
// };

c(singleNumber([1, 2, 1, 3, 2, 5]))
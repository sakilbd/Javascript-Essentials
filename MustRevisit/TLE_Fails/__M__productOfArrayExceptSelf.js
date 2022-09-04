// https://leetcode.com/problems/product-of-array-except-self/

const c = console.log.bind(console);


//done by me gets TLE
var productExceptSelf = function(nums) {
    // let res = []
    // let array = [...nums]
    return nums.map((item, i) => {
        let array = [...nums];
        array.splice(i, 1);
        return (array.reduce((a, b) => a * b));
        // c(array)
        // c(i)
    });
    // return res;
};


// from community 
// var productExceptSelf = function(nums) {
//     const result = [];
//     let productSoFar = 1;
//     for (let i = 0; i < nums.length; i++) {
//         result[i] = productSoFar
//         productSoFar *= nums[i]
//     }
//     productSoFar = 1
//     for (let j = nums.length-1; j >= 0; j--) {
//         result[j] *= productSoFar
//         productSoFar *= nums[j]
//     }
//     return result;
// };
c(productExceptSelf([1, 2, 3, 4]))
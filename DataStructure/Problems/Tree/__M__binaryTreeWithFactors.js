// https://leetcode.com/problems/binary-trees-with-factors/



const c = console.log.bind(console);


//done by me with some test cases failed.
// var numFactoredBinaryTrees = function(arr) {
//     let resArray = Array(arr.length).fill(1);
//     let arrCp = [...arr].sort((a, b) => a - b);
//     return arrCp;
//     let left, right;
//     for (let i = 1; i < arr.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (arrCp[i] % arrCp[j] == 0) {
//                 // c(i)
//                 left = arrCp[j];
//                 let devide = arrCp[i] / arrCp[j];
//                 right = devide;
//                 // c(right)
//                 let checkAvailability = arrCp.includes(right);
//                 // c("chk " + checkAvailability);
//                 if (left * right == arrCp[i] && checkAvailability == true) {
//                     resArray[i]++;
//                 } else if (left * left == arrCp[i]) {
//                     resArry[i]++;
//                 }
//             }
//             // else{
//             //     left*
//             // }
//         }
//     }
//     return resArray.reduce((a, b) => a + b);
// };


// got from community

function numFactoredBinaryTrees(arr) {
    arr.sort((a, b) => a - b);
    const state = [];
    let counter = 0;
    const MOD = 10 ** 9 + 7
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        let sum = 1;
        for (let k = 0; k < i; k++) {
            const needs = val / arr[k];
            if (map.has(needs)) sum = sum + state[k] * state[map.get(needs)];
        }
        map.set(val, i);
        counter = (counter + sum) % MOD;
        state[i] = sum;
    }
    return counter;
}
// let array = []
// for (let i = 0; i < 1000; i++) {
//     array.push(i);
// }
// c(array)
// c(numFactoredBinaryTrees([2, 4]))
// c(numFactoredBinaryTrees(array))
c(numFactoredBinaryTrees([18, 3, 6, 2]));
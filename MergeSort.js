// https://leetcode.com/problems/count-of-smaller-numbers-after-self/
// 315. Count of Smaller Numbers After Self



const c = console.log.bind(console);


// var countSmaller = function(nums) {
//     let finalArr = [];
//     for (let i = 0; i < nums.length; i++) {
//         let count = 0;
//         for (let j = i + 1; j < nums.length; j++) {
//             nums[i] > nums[j] ? count++ : '';
//         }
//         finalArr.push(count);
//     }

//     return finalArr;

// }

//uper submission time limit exceedes.

let counts;

var countSmaller = function(nums) {
    let tuples = nums.map((num, idx) => ({ 'key': num, 'index': idx }));
    // return tuples.length;
    counts = new Array(nums.length).fill(0);

    mergeSort(tuples);
    // return counts;
};

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    // split
    let mid = Math.ceil(arr.length / 2) - 1;

    let left = mergeSort(arr.slice(0, mid + 1));

    let right = mergeSort(arr.slice(mid + 1, arr.length));

    // merge
    let lp = 0;
    let rp = 0;
    let lessThanCount = 0;
    let sorted = [];
    c("left.length :" + right.length);
    while (lp < left.length) {
        if (rp >= right.length) {
            sorted.push(left[lp]);
            counts[left[lp++].index] += lessThanCount;
        } else if (left[lp].key > right[rp].key) {
            lessThanCount++;
            sorted.push(right[rp++]);
        } else {
            counts[left[lp].index] += lessThanCount;
            sorted.push(left[lp++])
        }
    }
    while (rp < right.length) {
        sorted.push(right[rp++]);
    }

    return sorted;
}

c(countSmaller([5, 2, 6, 1]))
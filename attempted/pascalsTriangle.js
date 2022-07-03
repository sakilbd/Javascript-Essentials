// 118. Pascal's Triangle
// https://leetcode.com/problems/pascals-triangle/
const c = console.log.bind(console);
var generate = function(numRows) {
    let arr = [];
    for (let i = 1; i <= numRows; i++) {
        const newArray = new Array(i).fill(1);
        arr.push(newArray);
    }

    for (let i in arr) {
        // var q = 1;
        // c(arr[i].length);
        let j = i + 1;
        while (j <= arr[i].length + 1) {
            c(j);
            j++;
        }
    }
};

c(generate(5));
// https://leetcode.com/problems/4sum/

const c = console.log.bind(console);

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
        for (let i = start; i <= input.length - len; i++) {
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

c(fourSum([1, 0, -1, 0, -2, 2], 0));

c(fourSum([2, 2, 2, 2, 2], 8));

c(fourSum([-5, 5, 4, -3, 0, 0, 4, -2], 4))
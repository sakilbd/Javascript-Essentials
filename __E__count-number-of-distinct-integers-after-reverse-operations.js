// https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/

const c = console.log.bind(console);

var countDistinctIntegers = function(nums) {

    let numsCopy = [...nums];
    numsCopy.forEach(item => {
        nums.push(parseInt(item.toString().split('').reverse().join('')));
    })
    return [...new Set(nums)].length;

};

c(countDistinctIntegers([1, 13, 10, 12, 31]));
c(countDistinctIntegers([2, 2, 2]));
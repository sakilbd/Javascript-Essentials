// https://leetcode.com/problems/majority-element/submissions/

const c = console.log.bind(console);

var majorityElement = function(nums) {
    const map = {};
    let count = nums.length / 2;
    // return count;
    for (let i of nums) {
        map[i] = 0;
    }
    for (let i of nums) {
        map[i]++;
    }
    let res = ''
    Object.keys(map).forEach((key, i) => {
        if (map[key] >= count) {
            res = key;
        }
    })
    return res;
};

c(majorityElement([2, 2, 1, 1, 1, 2, 2]));
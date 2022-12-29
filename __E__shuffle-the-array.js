// https://leetcode.com/problems/shuffle-the-array/description/
const c = console.log.bind(console)


var shuffle = function(nums, n) {
    let left = nums.splice(0, n)
    let res = [];
    left.forEach((item, i) => {
        res.push(item);
        res.push(nums[i])
    })

    return res;

};


c(shuffle([2, 5, 1, 3, 4, 7], 3))
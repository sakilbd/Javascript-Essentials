// https://leetcode.com/problems/single-element-in-a-sorted-array/

const c = console.log.bind(console)
var singleNonDuplicate = function(nums) {
    let map = new Map();
    for (let i of nums) {
        map.set(i, map.get(i) ? map.get(i) + 1 : 1)
    }
    for (let [key, value] of map) {
        if (value == 1) return key
    }
};


c(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]))
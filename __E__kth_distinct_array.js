// https://leetcode.com/submissions/detail/806721568/
const c = console.log.bind(console);

var kthDistinct = function(arr, k) {
    let map = new Map();
    for (let i of arr) {
        map.get(i) ? map.set(i, map.get(i) + 1) : map.set(i, 1);
    }
    let finalArray = [];
    map.forEach((item, key) => {
        item == 1 ? finalArray.push(key) : ''
    })

    return finalArray[k - 1] ? finalArray[k - 1] : "";

};


c(kthDistinct(["d", "b", "c", "b", "c", "a"], 3))
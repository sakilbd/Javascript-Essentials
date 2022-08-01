const c = console.log.bind(console);

var majorityElement = function(nums) {
    let map = new Map();
    let appearCount = nums.length / 3;
    // return appearCount;
    for (let i of nums) {
        map.set(i, 0);
    }
    for (let i of nums) {
        map.set(i, map.get(i) + 1);
    }
    let res = [];
    let newArray = [...new Set(nums)]
    for (let i = 0; i < newArray.length; i++) {
        if (map.get(newArray[i]) > appearCount) {
            res.push(newArray[i]);
            // break;
        }

    }

    return res;
};

c(majorityElement([3, 2, 3]))
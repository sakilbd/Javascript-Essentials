const c = console.log.bind(console);
var majorityElement = function(nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
        // c(obj)
    }

    // let ans = []
    // for (let key in obj) {
    //     if (obj[key] > nums.length / 3) {
    //         ans.push(+key)
    //     }
    // }
    return obj;
};


c(majorityElement([1, 2, 3, 4, 5, 1, 2, 4, 5, 6]))
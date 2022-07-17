//no time complexity error 
const c = console.log.bind(console)
var rotate = function(nums, k) {
    const len = nums.length
    k = (k % len)
        // return k;

    let end = nums.splice(len - k)
        // return end;


    nums.splice(0, 0, ...end);
    return nums;
};


c(rotate([1, 2, 3, 4, 5, 6, 7, 8], 3));
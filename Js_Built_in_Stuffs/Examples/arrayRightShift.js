//time complexity error on submission
var rotate = function(nums, k) {
    while (k--) {
        nums.unshift();
    }
    return nums.pop();
};
const c = console.log.bind(console)



c(rotate([1, 2, 3, 4, 5, 6, 7, 8], 3));
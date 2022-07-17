var rotate = function(nums, k) {
    while (k--) {
        nums.unshift();
    }
    return nums.pop();
};


c(rotate([1, 2, 3, 4, 5, 6, 7], 3));
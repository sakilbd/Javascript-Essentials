const c = console.log.bind(console);
var differenceOfSum = function(nums) {
    let itemAddition = nums.reduce((a, b) => a + b, 0);
    let digitSum = 0;
    nums.forEach((item) => {
        digitSum += parseInt(item
            .toString()
            .split("")
            .reduce((total, elem) => parseInt(total) + parseInt(elem)));


    });
    return itemAddition - digitSum
};

c(differenceOfSum([1, 15, 6, 3]));
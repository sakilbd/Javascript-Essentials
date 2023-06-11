// https://leetcode.com/problems/left-and-right-sum-differences/description/

const c = console.log.bind(console);

var leftRightDifference = function(nums) {
    const length = nums.length;
    let leftSum = [0];
    let rightSum = [0];
    let sum = 0;
    nums.forEach((item, i) => {
        if (i < length - 1) leftSum.push(sum + item);
        sum += item;
    });
    sum = 0;
    nums.reverse().forEach((item, i) => {
        if (i < length - 1) rightSum.push(sum + item);
        sum += item;
    });

    return rightSum;
};

c(leftRightDifference([10, 4, 8, 3]));

function rightSum(array) {
    let rightSum = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        rightSum += array[i];
    }
    return rightSum;
}



c(rightSum([10, 4, 8, 3]))
const c = console.log.bind(console)

const p = [1, 2, 3, 4]

// c(p.splice(0, 2));
var maximumUniqueSubarray = function(nums) {
    let seen = [],
        tempSum = 0,
        maxSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!seen.includes(nums[i])) {
            seen.push(nums[i]);
            // c(seen);
            tempSum += nums[i];
            // c("tempSUm" + tempSum);
            if (tempSum > maxSum) maxSum = tempSum;
        } else {
            let idx = seen.indexOf(nums[i]);
            seen.splice(0, idx + 1);
            // c(seen);
            if (seen.length == 0) {
                tempSum = 0;
            } else {
                tempSum = seen.reduce((acc, num) => acc + num);
            }
            seen.push(nums[i]);
            tempSum += nums[i];
        }
    }
    return maxSum;
}

c(maximumUniqueSubarray([4, 2, 4, 5, 6]))
    // c(
    //     maximumUniqueSubarray([
    //         28, 7320, 3661, 3458, 8708, 7632, 7434, 4643, 2694, 2619, 4665, 896, 2550,
    //         4881, 7080, 3373, 3160, 4852, 4296, 1764, 9745, 432, 9191, 7257, 5325, 1612,
    //     ])
    // );
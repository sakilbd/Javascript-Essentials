// https://leetcode.com/problems/find-peak-element/submissions/

// need to solve some test cases
const c = console.log.bind(console);

//accepted by me 
var findPeakElement = function(nums) {
    const numClone = [...nums];
    const set = [...new Set(numClone.sort((a, b) => a - b))]
        // return set;
        // return nums;
    let result = []
    for (let i = set.length - 1; i > 0; i--) {
        // if (nums[nums.indexOf(set[i]) + 1]) {

        // }
        if (nums[nums.indexOf(set[i]) + 1] || !nums[nums.indexOf(set[i]) + 1]) {
            if (nums[nums.indexOf(set[i]) - 1] || !nums[nums.indexOf(set[i]) - 1]) {
                if (nums[nums.indexOf(set[i])] > nums[nums.indexOf(set[i]) + 1] && nums[nums.indexOf(set[i])] > nums[nums.indexOf(set[i]) - 1]) {
                    result.push(set[i]);
                } else if (nums[nums.indexOf(set[i])] > nums[nums.indexOf(set[i]) + 1] || nums[nums.indexOf(set[i])] > nums[nums.indexOf(set[i]) - 1]) {
                    result.push(set[i]);
                }
            }
        }
    }
    const finalResult = result.sort((a, b) => a - b);
    return nums.indexOf(finalResult[finalResult.length - 1]) == -1 ? 0 : nums.indexOf(finalResult[finalResult.length - 1]);
};


//simplified solution needs to be understood
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = resolve(nums, left, right);
    return result;
};

function resolve(nums, left, right) {
    if (nums.length < 2) {
        return 0;
    }
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (mid == 0 && nums[mid] > nums[mid + 1]) return left;
        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;
        if (nums[mid - 1] > nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}



console.time();
c(findPeakElement([1, 2, 3]))
console.timeEnd();
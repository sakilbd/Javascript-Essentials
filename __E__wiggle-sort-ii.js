// https://leetcode.com/problems/wiggle-sort-ii/

const c = console.log.bind(console);
var wiggleSort = function(nums) {
    nums.sort((a, b) => a - b);
    let left = [];
    let right = [];
    if (nums.length % 2 === 0) {
        left = left.concat(nums.slice(0, nums.length / 2));
        right = right.concat(nums.slice(nums.length / 2, nums.length));
    } else {
        left = left.concat(nums.slice(0, nums.length / 2 + 1));
        right = right.concat(nums.slice(nums.length / 2 + 1, nums.length));
    }
    if (left[left.length - 1] == right[0]) {
        left.reverse();
        right.reverse();
    }
    nums.length = 0;
    left.forEach((item, i) => {
        nums.push(item);
        right[i] ? nums.push(right[i]) : "";
    });
    return nums;
};

//from community 
var wiggleSort = function(nums) {
    const tmp = [...nums],
        n = nums.length;
    tmp.sort((a, b) => a - b);
    let mid = Math.ceil(n / 2),
        last = n;
    for (let i = 0; i < n; i++)
        i % 2 === 0 ? nums[i] = tmp[--mid] : nums[i] = tmp[--last];

    return nums
};
c(wiggleSort([1, 5, 1, 1, 6, 4]));
c(wiggleSort([1, 1, 1, 2, 2, 2]));
c(wiggleSort([4, 5, 5, 6]));
// https://leetcode.com/problems/two-out-of-three/description/

const c = console.log.bind(console);

var twoOutOfThree = function(nums1, nums2, nums3) {

    let result = [];
    let count = 0;

    let allElements = [...nums1, ...nums2, ...nums3];

    let unique = [...new Set(allElements)];

    // return nums1.includes(1);
    for (let item of unique) {
        nums1.includes(item) && count++;
        nums2.includes(item) && count++;
        nums3.includes(item) && count++;
        if (count >= 2) {
            result.push(item)
        }
        count = 0;
    }
    return result
};

c(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));

c(twoOutOfThree([3, 1], [2, 3], [1, 2]));
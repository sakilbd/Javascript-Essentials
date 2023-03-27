const c = console.log.bind(console);


var twoOutOfThree = function(nums1, nums2, nums3) {

    // let largestArr = []
    // let largestArrSize = 0;
    // if (nums1.length >= nums2.length) {
    //     largestArr = [...nums1]
    //     largestArrSize = nums1.length
    // } else {
    //     largestArr = [...nums2]
    //     largestArrSize = nums2.length
    // }
    // if (nums3.length >= largestArr.length) {
    //     largestArr = [...nums3]
    //     largestArrSize = nums3.length
    // }

    // return largestArrSize;

    let allElements = [...nums1, ...nums2, ...nums3]

    let unique = [...new Set(allElements)];

    return unique;


};




c(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]))

c(twoOutOfThree([3, 1], [2, 3], [1, 2]))
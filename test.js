const c = console.log.bind(console);


var numberOfPairs = function(nums1, nums2, diff) {
    for (let i in nums1) {
        for (let j = i + 1; j < nums1.length; j++) {
            c(nums1[i], nums1[j])
        }
    }
};


c(numberOfPairs([3, 2, 5], [2, 2, 1], 1))
const c = console.log.bind(console);

var intersection = function(nums1, nums2) {
    const numOne = nums1.sort((a, b) => a - b);
    const numTwo = nums2.sort((a, b) => a - b);
    // c(numOne);
    // c(numTwo)
    const res = [];

    if (numOne.length >= numTwo.length) {
        numTwo.forEach((itemTwo) => {
            let p = 0;
            while (p < numOne.length) {
                if (itemTwo == numOne[p]) {
                    res.push(itemTwo);
                    numOne.splice(p, 1);
                    break;
                }
                p++;
            }
        });
    } else {
        numOne.forEach((itemTwo) => {
            let p = 0;
            while (p < numTwo.length) {
                if (itemTwo == numTwo[p]) {
                    res.push(itemTwo);
                    numTwo.splice(p, 1);
                    break;
                }
                p++;
            }
        });
    }

    return res;
};


c(intersection([1, 2, 2, 1], [2, 2]));
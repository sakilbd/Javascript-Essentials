// https://leetcode.com/problems/intersection-of-two-arrays/submissions/


const c = console.log.bind(console);

//solution by me(Accepted) 
var intersection = function(nums1, nums2) {
    const numOne = [...new Set(nums1)].sort((a, b) => a - b);
    const numTwo = [...new Set(nums2)].sort((a, b) => a - b);
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

    return [...new Set(res)];
};


// optimal solution 
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1)

    const set2 = new Set(nums2)
        // return [...set2];
    return [...set1].filter(n => set2.has(n))
};

// c(intersection([5, 0, 0, 6, 1, 6, 2, 2, 4], [4, 7, 9, 7, 6, 7]));
c(intersection([1, 2, 2, 1], [2, 2]));
// c(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
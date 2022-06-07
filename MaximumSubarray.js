//https://leetcode.com/problems/maximum-subarray/
//LeetCode problem 53(Maximum Subarray)

function getSubArrays(arr) {
    var len = arr.length,
        subs = Array(Math.pow(2, len)).fill(0);
    // return subs;
    var addArr = [];
    subs.map((_, i) => {

        var j = -1,
            k = i

        var res = [];
        while (++j < len) {
            k & 1 && res.push(arr[j]); //k & 1  means k % 2
            k = k >> 1; // k>>1 means k/2
            // console.log("printing K" + k + " " + "printing i" + i);

        }
        console.log(res);
        var add = 0;
        res.map((item, k) => {

            add = add + item;
        })

        addArr.push(add);

    });
    console.log(addArr);
    const finalResult = addArr.sort();
    console.log(finalResult);
    return finalResult[addArr.length - 1];


}

// console.log((getSubArrays([5, 4, -1, 7, 8])));

// final Solution 

var maxSubArray = function(nums) {
    if (nums.length == 0) return 0;
    let result = Number.MIN_SAFE_INTEGER;

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result = Math.max(sum, result);
        sum = sum < 0 ? 0 : sum;
        console.log(sum);
    }
    return result;
};

console.log(maxSubArray([-2, -1, -3, -4, -1, -2, -1, -5, -4]));
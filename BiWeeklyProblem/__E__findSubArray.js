// https://leetcode.com/contest/biweekly-contest-86/problems/find-subarrays-with-equal-sum/

const c = console.log.bind(console);
//some test cases passed .. need to find array item index accuratly for duplicate elements please ..
var findSubarrays = function(nums) {
    return getSubArrays(nums);
};

function getSubArrays(arr) {
    if (arr.length <= 2) {
        return false;
    }
    let newArr = [...new Set(arr)];
    if (newArr.length == 1) {
        return true;
    }
    var len = arr.length,
        subs = Array(Math.pow(2, len)).fill(0),
        result = [];

    let set = new Set();
    let indexSet = new Set();

    // return subs;
    for (let i in subs) {
        var j = -1,
            k = i,
            res = [];
        while (++j < len) {

            k & 1 && res.push(arr[j]); //k & 1  means k % 2

            k = k >> 1; // k>>1 means k/2

        }

        res.length == 2 ? result.push(res) : "";
        if (res.length == 2) {
            var indexOf = arr.indexOf(res[0]);
            var addition = res[0] + res[1];
            if (set.has(addition) && !indexSet.has(indexOf)) {
                return true;
            }
            set.add(addition);
            indexSet.add(indexOf);

        }

        // return result.push(res);
    } //slice(1) removes the first array form list which is empty here
    // return indexSet;
    // return set;
    // return result;
    // return set;
    return false;
}
c(findSubarrays([0, 0, 0])); //not passed 
c(findSubarrays([4, 2, 4])); //passsed 
c(findSubarrays([1, 2, 3, 4, 5])); //passed
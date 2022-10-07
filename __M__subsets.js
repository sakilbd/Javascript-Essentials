// https://leetcode.com/problems/subsets/
function subsets(nums) {
    var len = nums.length,
        subs = Array(Math.pow(2, len)).fill(0);
    // return subs;
    return subs.map((_, i) => {

        var j = -1,
            k = i,
            res = [];
        while (++j < len) {
            k & 1 && res.push(nums[j]); //k & 1  means k % 2
            k = k >> 1; // k>>1 means k/2
        }
        return res;
    }); //slice(1) removes the first numsay form list which is empty here
}

console.log(JSON.stringify(subsets([1, 2, 3])));
// https://leetcode.com/problems/combination-sum-iv/
// https://www.youtube.com/watch?v=dw2nMCxG0ik


const c = console.log.bind(console);




var combinationSum4 = function(nums, target) {
    const dp = [];
    nums.sort((n1, n2) => n1 - n2);
    nums.forEach(n => { dp[n] = 1; });
    for (let i = 1; i <= target; ++i) {
        let count = 0;
        for (let j = 0; j < nums.length && nums[j] < i; ++j) {
            count += dp[i - nums[j]];
        }
        dp[i] = dp[i] ? dp[i] + count : count;
    }
    return dp[target];
};


c(combinationSum4([1, 2, 3], 4))
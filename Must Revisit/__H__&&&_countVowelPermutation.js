// https://leetcode.com/problems/count-vowels-permutation/
const c = console.log.bind(console);

const mod = 1e9 + 7;
const countVowelPermutation = (n) => {
    let dp = Array(5).fill(1); // base condition a e i o u, each 1 way
    for (let i = 1; i < n; i++) {
        let ndp = Array(5).fill(0);
        ndp[0] = dp[1]; // a -> e
        ndp[1] = (dp[0] + dp[2]) % mod; // e -> a/i
        ndp[2] = (dp[0] + dp[1] + dp[3] + dp[4]) % mod; // i -> a/e/o/u
        ndp[3] = (dp[2] + dp[4]) % mod; // o -> i/u
        ndp[4] = dp[0]; // u -> a
        dp = ndp;
    }
    let res = 0;
    for (const e of dp) {
        res += e;
        if (res >= mod) res -= mod;
    }
    return res;
};

c(countVowelPermutation(5));
//583. Delete Operation for Two Strings
// https://leetcode.com/problems/delete-operation-for-two-strings/


const p = console.log.bind(console);
const minDistance = function(word1, word2) {
    const [len1, len2] = [word1.length, word2.length];
    const dp = [...new Array(len1 + 1)].map(() => new Array(len2 + 1).fill(0));

    for (let i = 1; i <= len1; i += 1) {
        for (let j = 1; j <= len2; j += 1) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    const maxSub = dp[len1][len2];

    return len1 - maxSub + len2 - maxSub;
};

p(minDistance("leetcode", "etco"));
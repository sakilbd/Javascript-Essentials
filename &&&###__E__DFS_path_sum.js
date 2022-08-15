// https://leetcode.com/problems/path-sum/
let root = {
    val: 5,
    left: {
        val: 1,
        left: null,
        right: null,
    },
    right: {
        val: 8,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: {
            val: 9,
            left: null,
            right: null,
        },
    },
};

const c = console.log.bind(console);

var hasPathSum = function(root, sum) {
    return dfs(root, 0, sum);
};

var dfs = function(curr, currentSum, targetSum) {
    if (!curr) {
        return false;
    }

    currentSum += curr.val;

    if (curr.left === null && curr.right === null) {
        return currentSum === targetSum;
    }

    return dfs(curr.left, currentSum, targetSum) || dfs(curr.right, currentSum, targetSum);
}


c(hasPathSum(root, 6))
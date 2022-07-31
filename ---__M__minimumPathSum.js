// https://leetcode.com/problems/minimum-path-sum/
const c = console.log.bind(console);

var minPathSum = function(grid) {
    // const dp = Array.from(Array(grid.length), () => new Array(grid[0].length));
    // return dp;
    let res = 0;
    grid[0].forEach(item => {
        res += item;
    })
    for (let i = 1; i < grid.length; i++) {

        res += grid[i][grid[0].length - 1];

    }
    return res;
};


c(minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]))


c(minPathSum([
    [1, 2],
    [1, 1]
])); //expected answer 3 but appears 4
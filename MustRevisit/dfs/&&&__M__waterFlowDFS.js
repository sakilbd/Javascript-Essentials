// https://leetcode.com/problems/pacific-atlantic-water-flow/submissions/

const c = console.log.bind(console);

var pacificAtlantic = function(matrix) {
    if (matrix.length === 0 || matrix === null) return []
    let atlantic = new Array(matrix.length).fill(0).map(row => new Array(matrix[0].length).fill(0))
    let pacific = new Array(matrix.length).fill(0).map(row => new Array(matrix[0].length).fill(0))
    let result = []
        // set ocean flow
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            dfs(matrix, 0, j, pacific, -Infinity)
            dfs(matrix, i, 0, pacific, -Infinity)
            dfs(matrix, matrix.length - 1, j, atlantic, -Infinity)
            dfs(matrix, i, matrix[0].length - 1, atlantic, -Infinity)
        }
    }
    // console.log(atlantic, pacific)
    // check cells if both oceans can flow
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (atlantic[i][j] === 1 && pacific[i][j] === 1) {
                result.push([i, j])
            }
        }
    }
    return result
};

function dfs(matrix, i, j, ocean, previous) {
    //bounds and ocean flow-ability
    if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[i].length || matrix[i][j] < previous) {
        return
    }
    if (ocean[i][j] === 1) return // been here already

    ocean[i][j] = 1 // flowing
    dfs(matrix, i + 1, j, ocean, matrix[i][j])
    dfs(matrix, i - 1, j, ocean, matrix[i][j])
    dfs(matrix, i, j + 1, ocean, matrix[i][j])
    dfs(matrix, i, j - 1, ocean, matrix[i][j])
}

c(
    pacificAtlantic([
        [1, 2, 2, 3, 5],
        [3, 2, 3, 4, 4],
        [2, 4, 5, 3, 1],
        [6, 7, 1, 4, 5],
        [5, 1, 1, 2, 4],
    ])
);
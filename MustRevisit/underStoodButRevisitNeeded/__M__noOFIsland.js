// https://leetcode.com/problems/number-of-islands/

const p = console.log.bind(console);


var numIslands = function(grid) {
    let result = 0;
    let row = grid.length;
    let col = grid[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == 1) {
                findAdjacentIsland(grid, i, j, row, col);
                result++;
            }
            // break;
        }
        // break;
    }
    return result;
};

let findAdjacentIsland = (grid, i, j, r, c) => { //which is fucking DFS
    // p("what")
    if (i < 0 || j < 0 || i >= r || j >= c || grid[i][j] != '1') {
        return;
    }

    grid[i][j] = '2';
    findAdjacentIsland(grid, i - 1, j, r, c);
    findAdjacentIsland(grid, i + 1, j, r, c);
    findAdjacentIsland(grid, i, j - 1, r, c);
    findAdjacentIsland(grid, i, j + 1, r, c);
    // return grid;
}

p(
    numIslands([
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
    ])
);
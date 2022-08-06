// https://leetcode.com/problems/reshape-the-matrix/

const c = console.log.bind(console);
var matrixReshape = function(mat, r, c) {
    let elemCount = mat.length * mat[0].length;
    // return elemCount;

    // return grid;
    let oneDarray = [];
    mat.map((item) => {
        item.map((item) => {
            oneDarray.push(item);
        });
    });
    // return oneDarray;
    if (elemCount == r * c) {
        var grid = [...Array(r)].map((e) => Array(c).fill(0));
    } else {
        var grid = [...Array(mat.length)].map((e) => Array(mat[0].length).fill(0));
    }

    for (let i in grid) {
        for (let j in grid[i]) {
            grid[i][j] = oneDarray[0];
            oneDarray.splice(0, 1);
        }
    }

    return grid;
    // return oneDarray;
};

c(
    matrixReshape(
        [
            [1, 2],
            [3, 4],
        ],
        1,
        4
    )
);

c(
    matrixReshape(
        [
            [1, 2],
            [3, 4],
        ],
        2,
        8
    )
);
c(
    matrixReshape(
        [
            [1, 2],
            [3, 4],
        ],
        2,
        2
    )
);
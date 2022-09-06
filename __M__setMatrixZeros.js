// https://leetcode.com/problems/set-matrix-zeroes/

const c = console.log.bind(console);

//done by me accepted 160ms
var setZeroes = function(matrix) {
    for (let m in matrix) {
        for (let n in matrix[0]) {
            if (matrix[m][n] == 0) {
                zeroFill(m, n, matrix, 1, m, n);
                zeroFill(m, n, matrix, 2, m, n);
                zeroFill(m, n, matrix, 3, m, n);
                zeroFill(m, n, matrix, 4, m, n);
            }
        }
    }
    // return matrix;
    for (let m in matrix) {
        for (let n in matrix[0]) {
            if (matrix[m][n] == "p") {
                matrix[m][n] = 0;
            }
        }
    }
    return matrix;
};

let zeroFill = (i, j, matrix, logic, p, q) => {
    // return matrix[0].length;

    if (j < 0 || j > matrix[0].length - 1) {
        return;
    }
    if (i < 0 || i > matrix.length - 1) {
        return;
    }
    if ((i != p || j != q) && matrix[i][j] == 0) {
        return;
    }

    // c(matrix[i][j])
    matrix[i][j] = "p";

    if (logic == 1) {
        if (matrix[i][j] != 0) {
            zeroFill(parseInt(i) - 1, j, matrix, logic, p, q);
        }
    }
    if (logic == 2) {
        if (matrix[i][j] != 0) {
            zeroFill(parseInt(i) + 1, j, matrix, logic, p, q);
        }
    }
    if (logic == 3) {
        if (matrix[i][j] != 0) {
            zeroFill(i, parseInt(j) - 1, matrix, logic, p, q);
        }
    }
    if (logic == 4) {
        if (matrix[i][j] != 0) {
            zeroFill(i, parseInt(j) + 1, matrix, logic, p, q);
        }
    }

    // return matrix;
};


//from community 
// var setZeroes = function(matrix) {
//     let colFlag = Array(matrix[0].length)
//     for (let i = 0; i < matrix.length; i++) {
//         if (matrix[i].includes(0)) {
//             for (let j = 0; j < matrix[0].length; j++) {
//                 if (matrix[i][j] == 0) colFlag[j] = true
//                 matrix[i][j] = 0
//             }
//         }
//     }
//     for (let j = 0; j < colFlag.length; j++) {
//         if (colFlag[j]) {
//             for (let i = 0; i < matrix.length; i++) {
//                 matrix[i][j] = 0
//             }
//         }
//     }
// };

// c(
//   setZeroes([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ])
// );

c(
    setZeroes([
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5],
    ])
);
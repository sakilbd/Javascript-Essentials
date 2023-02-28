// https://leetcode.com/problems/matrix-block-sum/description/


const c = console.log.bind(console);

//done by me with 250 ms .. but community solution has answers with 80ms execution time
var matrixBlockSum = function(mat, k) {
    let i = 0,
        j = 0;
    let arr = [];
    let res = [];

    while (i <= mat.length - 1 && j <= mat[0].length - 1) {
        for (i = 0; i < mat.length; i++) {
            for (j = 0; j < mat[0].length; j++) {
                let rowLowerLimit = i - k < 0 ? 0 : i - k;
                let rowUpperLimit = i + k > mat.length - 1 ? mat.length - 1 : i + k;
                let colLowerLimit = j - k < 0 ? 0 : j - k;
                let colUpperLimit =
                    j + k > mat[0].length - 1 ? mat[0].length - 1 : j + k;
                let additionValue = 0;
                for (let row = rowLowerLimit; row <= rowUpperLimit; row++) {
                    for (let col = colLowerLimit; col <= colUpperLimit; col++) {
                        additionValue += mat[row][col];
                    }
                }
                arr.push(additionValue);
            }
        }
    }
    while (arr.length > 0) {
        let chunk = arr.splice(0, mat[0].length);
        res.push(chunk);
    }
    return res;
};

c(
    matrixBlockSum(
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ],
        1
    )
);

c(matrixBlockSum([
    [72],
    [69],
    [55],
    [50],
    [80]
], 2));
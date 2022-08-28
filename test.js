// https://leetcode.com/problems/sort-the-matrix-diagonally/

const c = console.log.bind(console);

var diagonalSort = function(mat) {
    let arr = [];
    let tempArr = [];
    let m = mat.length;
    let n = mat[0].length;
    let j = 0;
    let i = 0;

    while (i < m) {
        j = j + i;
        while (j < n) {
            tempArr.push(mat[i][j]);

            j++;
        }
        arr.push(tempArr);
        tempArr = [];

        j = 0;
        i++;
    }

    let modArr = [];

    for (let i in arr) {
        if (i < 1) {
            c('1');
            for (let j in arr[i]) {
                tempArr.push([arr[i][j]]);
            }
        } else {
            c('2')
            for (let q in arr[i]) {
                arr[q].push([arr[i][q]]);
            }
        }
        c(tempArr);
        modArr.push(tempArr);
        tempArr = [];
    }
    // return modArr;
    // return arr;
    return arr;
};

c(
    diagonalSort([
        [3, 3, 1, 1],
        [2, 2, 1, 6],
        [1, 1, 1, 2],
    ])
);
// https://leetcode.com/problems/valid-sudoku/

const c = console.log.bind(console);

var isValidSudoku = function(board) {
    var resArray = [...Array(9)].map((item) => Array());
    // return resArray;
    let i = 0;

    if (i > 2 && i < 6) {
        i += 3;
        j += 3;
        iRange += 3;
        jRange += 3;
        resArrayIndex++;
    }

    function sudokuBuilder(arr, p, j, resArrayIdx) {
        let iRange = p + 3;
        let jRange = j + 3;
        for (let i = p; i < iRange; i++) {
            // c(i);
            for (let k = j; k < jRange; k++) {
                if (arr[i][k] != '.') {
                    resArray[resArrayIdx].push(arr[i][k]);
                }
            }
        }
    }
    let iIdx = 0;
    let jIdx = 0;

    resArray.forEach((item, key) => {
        if (jIdx >= 8) {
            jIdx = 0;
        }
        if (key < 3) {
            sudokuBuilder(board, iIdx, jIdx, key);
            jIdx += 3;
        } else if (key >= 3 && key < 6) {
            iIdx = 3;

            // c(key)
            // sudokuBuilder(board, iIdx, jIdx, key);
            sudokuBuilder(board, iIdx, jIdx, key);

            jIdx += 3;
        } else if (key >= 6 && key < 9) {
            iIdx = 6;

            // c(key)
            // sudokuBuilder(board, iIdx, jIdx, key);
            sudokuBuilder(board, iIdx, jIdx, key);

            jIdx += 3;
        }
    });
    // sudokuBuilder(board, 0, 0, 3, 3);

    // i = i - 3;

    return resArray;
};

c(
    isValidSudoku([
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ])
);
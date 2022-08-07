// https://leetcode.com/problems/valid-sudoku/

const c = console.log.bind(console);

var isValidSudoku = function(board) {
    var resArray = [...Array(9)].map((item) => Array());
    // return resArray;
    let i = 0;
    let borderArrays = [...Array(4)].map(item => Array())

    for (let i in board) {
        if (board[i][0] != ".") {
            borderArrays[0].push(board[i][0])
        }
    }
    for (let i in board) {
        if (board[i][board[i].length - 1] != ".") {

            borderArrays[1].push(board[i][board[i].length - 1])
        }
    }
    for (let i in board[0]) {
        if (board[0][i] != ".") {
            borderArrays[2].push(board[0][i])
        }
    }
    for (let i in board[board.length - 1]) {
        if (board[board.length - 1][i] != '.') {
            borderArrays[3].push(board[board.length - 1][i])
        }

    }
    // borderArrays[2].push(board[0]);
    // borderArrays[3].push([board[board.length - 1]].split());
    // borderArrays[0].push(lerfItemArray);
    // return borderArrays;
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
                if (arr[i][k] != ".") {
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

            sudokuBuilder(board, iIdx, jIdx, key);

            jIdx += 3;
        } else if (key >= 6 && key < 9) {
            iIdx = 6;

            sudokuBuilder(board, iIdx, jIdx, key);

            jIdx += 3;
        }
    });


    let checkBoarderArray = numRepeatCheck(borderArrays);

    if (checkBoarderArray == false) {
        return false;
    }
    let checkWholeNineArray = numRepeatCheck(resArray);
    return checkWholeNineArray == false ? false : true;


}

const numRepeatCheck = (resArray) => {
    for (let i in resArray) {

        if ([...new Set(resArray[i])].length != resArray[i].length) return false;
    }
}


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
        ["8", ".", ".", ".", "8", ".", ".", "7", "9"],
    ])
);
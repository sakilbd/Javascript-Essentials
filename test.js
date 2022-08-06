const c = console.log.bind(console);

var isValidSudoku = function(board) {

    let arr = [...Array(9)].map(e => Array(0));
    // return arr;

    for (let i in board) {
        let j = 0;
        while (j < board[i].length) {
            if (j < 3) {
                arr[i].push(board[i][j])
            }
            if (j > 3 && j < 6) {
                arr[i].push(board[i][j])
            }
            if (j > 6) {
                arr[i].push(board[i][j])
            }
            j++
            c(j)
                // break;
        }
    }
    return arr;
    // return board;
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
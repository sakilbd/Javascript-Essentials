// https://leetcode.com/problems/transpose-matrix/



const c = console.log.bind(console);

var transpose = function(matrix) {
    let resArray = [];
    let j = 0;
    for (let j = 0; j < matrix[0].length; j++) {
        let tempArray = []
        for (let i = 0; i < matrix.length; i++) {
            tempArray.push(matrix[i][j])
        }
        resArray.push(tempArray);
    }
    return resArray;
};

c(transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))
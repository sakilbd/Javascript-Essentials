const c = console.log.bind(console);

var searchMatrix = function(matrix, target) {
    let matCopy = [...matrix];
    let leftIndex = 0;
    let rightIndex = matrix.length - 1;

    let mid = Math.ceil((matrix.length - 1) / 2);

    let eachMatrixLength = matrix[0].length;
    // return matrix[mid][eachMatrixLength - 1]
    if (matrix[mid].includes(target) === true) {
        return true;
    } else if (matrix.length == 1) {
        return false;
    }

    if (matrix[mid][eachMatrixLength - 1] > target) {
        rightIndex = mid - 1;
        matCopy.splice(-mid);
    } else {
        leftIndex = mid + 1;
        matCopy.splice(0, mid);
    }
    // return matrix[mid][eachMatrixLength - 1]
    // c(rightIndex);
    return searchMatrix(matCopy, target);
    // return matCopy;
};

c(
    searchMatrix(
        [
            [1, 3, 5, 7],
            [8, 9, 10, 11],
            [12, 13, 14, 15],
            [16, 17, 18, 19],
            [20, 21, 22, 23],
            [24, 25, 26, 27],
        ],
        21
    )
);
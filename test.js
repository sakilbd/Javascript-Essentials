// https://leetcode.com/problems/search-a-2d-matrix-ii/

const c = console.log.bind(console);

var searchMatrix = function(matrix, target) {
    try {
        matrix.forEach(item => {

            for (let i = 0; i < item.length; i++) {

                if (item[i] == target) {

                    throw "shit"
                }
            }

        })
    } catch (err) {
        if (err == 'shit') {
            return true;
        }
    }
    return false;
};


c(searchMatrix([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], 20))
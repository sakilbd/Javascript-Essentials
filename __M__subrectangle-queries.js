// https: //leetcode.com/problems/subrectangle-queries/description/

const c = console.log.bind(console);

var SubrectangleQueries = function(rectangle) {
    this.rect = rectangle


};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function(
    row1,
    col1,
    row2,
    col2,
    newValue
) {
    for (let row = row1; row <= row2; row++) {
        for (let col = col1; col <= col2; col++) {
            this.rect[row][col] = newValue
        }
    }
    for (let row = row1; row < row2; row++) {
        for (let col = col1; col < col2; col++) {
            this.rect[row][col] = newValue
        }
    }
    // return this.rect
};

/**
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function(row, col) {

    return this.rect[row][col];
};

var obj = new SubrectangleQueries([
    [1, 2, 1],
    [4, 3, 4],
    [3, 2, 1],
    [1, 1, 1],
]);
var param_2 = obj.getValue(0, 2);
c(obj.updateSubrectangle(0, 0, 3, 2, 5));
var param_2 = obj.getValue(0, 2);
var param_2 = obj.getValue(3, 1);
c(obj.updateSubrectangle(3, 0, 3, 2, 10));
var param_2 = obj.getValue(3, 1)
var param_2 = obj.getValue(0, 2)
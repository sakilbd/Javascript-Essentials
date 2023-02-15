// https://leetcode.com/problems/sort-the-students-by-their-kth-score/

const c = console.log.bind(console);


var sortTheStudents = function(score, k) {
    return score.sort((a, b) => b[k] - a[k])
};


c(sortTheStudents([
    [10, 6, 9, 1],
    [7, 5, 11, 2],
    [4, 8, 3, 15]
], 2))
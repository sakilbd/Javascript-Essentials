// https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/
const c = console.log.bind(console);

// solution by me
var nearestValidPoint = function(x, y, points) {
    let validPoints = [];
    points.forEach((item) => {
        item[0] == x || item[1] == y ? validPoints.push(item) : "";
    });

    const manhattanDistance = validPoints.map(item => {
        return Math.abs(x - item[0]) + Math.abs(y - item[1])
    })
    const smallestManhattanDistance = [...new Set(manhattanDistance)].sort((a, b) => a - b)[0];
    const res = []
    for (let i in manhattanDistance) {
        if (manhattanDistance[i] == smallestManhattanDistance) {
            res.push(validPoints[i]);
            break;
        }
    }
    return points.indexOf(res[0]);

    return validPoints;
};

//simple solution but execution time is similar to mine
// const nearestValidPoint = (x, y, points) => {
//     let closestDist = Infinity;
//     let idx = -1;
//     for (let i = 0; i < points.length; i++)
//         if (x == points[i][0] || y == points[i][1]) {
//             const dist = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
//             if (dist < closestDist) {
//                 closestDist = dist;
//                 idx = i;
//             }
//         }
//     return idx;
// };
// c(
//     nearestValidPoint(3, 4, [
//         [1, 2],
//         [3, 1],
//         [2, 4],
//         [2, 3],
//         [4, 4],
//     ])
// );
// c(nearestValidPoint(3, 4, [
//     [3, 4]
// ]));

c(nearestValidPoint(23,
    6, [
        [21, 23],
        [26, 9],
        [19, 8],
        [18, 6],
        [25, 27],
        [11, 7],
        [30, 22],
        [27, 1],
        [28, 20],
        [10, 14],
        [24, 25],
        [6, 20],
        [6, 31],
        [14, 29],
        [23, 19],
        [9, 17],
        [5, 5],
        [23, 12],
        [24, 8],
        [23, 23],
        [10, 4],
        [13, 16],
        [4, 6],
        [2, 19],
        [28, 7],
        [2, 22],
        [26, 30],
        [20, 11],
        [26, 4],
        [22, 3]
    ]))
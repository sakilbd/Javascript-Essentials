// https: //leetcode.com/problems/k-closest-points-to-origin/submissions/
const c = console.log.bind(console);

var kClosest = function(points, k) {
    const res = points.sort((a, b) => {
        // c('b1', b[1]);
        // c('b0', b[0]);
        // c('a1', a[1]);
        // c('a0', a[0]);
        return (a[0] * a[0] + a[1] * a[1]) - (b[0] * b[0] + b[1] * b[1]);
    });

    return res.splice(0, k);
};
c(kClosest([
        [3, 3],
        [5, -1],
        [-2, 4]
    ], 2), )
    // c(
    //     kClosest(
    //         [
    //             [3, 3],
    //             [5, -1],
    //             [-2, 4],
    //             [-1, 2],
    //             [-4, 1],
    //             [-3, 1],
    //         ],
    //         2
    //     )
    // );
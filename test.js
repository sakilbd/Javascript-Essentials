const c = console.log.bind(console);

var kClosest = function(points, k) {
    const res = points.sort();
    return points.reverse();
    return res.splice(0, k);



};
c(kClosest([
    [3, 3],
    [5, -1],
    [-2, 4]
], 2), )
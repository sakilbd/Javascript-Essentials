const c = console.log.bind(console);


var maxPoints = function(points) {
    let map = new Map();
    let linePoints = [];
    const collinear = (x1, x2, x3, y1, y2, y3) => {
        return (y1 - y2) * (x1 - x3) == (y1 - y3) * (x1 - x2);
    }
    let i = 0;
    while (i < points.length) {
        map.set(points[i], points[i + 1])

        i++
        // return false;
    }


    return map;
    return points;
};


c(maxPoints([
    [1, 1],
    [3, 2],
    [5, 3],
    [4, 1],
    [2, 3],
    [1, 4]
]))
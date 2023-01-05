// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description/

const c = console.log.bind(console);

//by my 4000ms around SHIT
var findMinArrowShots = function(points) {
    points.sort((a, b) => {
        return a[0] - b[0]
            // return -Math.abs(a[0] - a[1]) + Math.abs(b[0] - b[1]);
    });
    // return points;
    const between = (x, min, max) => {
        return x >= min && x <= max;
    };
    let temp = points;
    let count = 0;
    while (temp.length != 0) {
        let [start, end] = temp[0];
        let copy = [];
        let countFlag = 0;
        for (let i = 0; i < temp.length; i++) {
            let [s, e] = temp[i];
            if (between(s, start, end) && between(e, start, end)) {
                start = s;
                end = e;
                countFlag = 1

            } else if (!between(s, start, end) && between(e, start, end)) {
                end = e;
                countFlag = 1
            } else if (between(s, start, end) && !between(e, start, end)) {
                start = s
                countFlag = 1
            } else {
                copy.push(temp[i]);
            }

        }
        if (countFlag) count++;
        temp = [...copy];

    }
    return count
};



// by community around 400ms which is around least 
var findMinArrowShots = function(points) {
    let arrows = points.length // maximum amount of arrows
    if (!arrows) return 0
    points.sort((a, b) => a[1] - b[1]) // sort by intervals end
    let aim = points[0] // pick first interval as "shooting range"
    for (let i = 1; i < points.length; i++) {
        let current = points[i]
        if (current[0] <= aim[1]) { // if they overlap we can use less arrows
            arrows--
            aim[0] = current[0] // [1,6] + [2,8] -> [6,8]  reduce shooting range
        } else {
            aim = current // continue with new shooting range
        }
    }
    return arrows
};


c(
    findMinArrowShots([
        [10, 16],
        [2, 8],
        [1, 6],
        [7, 12],
    ])
);

c(findMinArrowShots([
    [3, 9],
    [7, 12],
    [3, 8],
    [6, 8],
    [9, 10],
    [2, 9],
    [0, 9],
    [3, 9],
    [0, 6],
    [2, 8]
]))
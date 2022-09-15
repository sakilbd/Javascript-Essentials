// https://leetcode.com/problems/perfect-rectangle/
const c = console.log.bind(console);

var isRectangleCover = function(rectangles) {
    let map = {};
    rectangles.forEach((item, i) => {
        map[item.join("")] = generateRectanglePoints(item);
    });
    return map;
    Object.keys(map).forEach((squre) => {
        c(map[squre].splice(-1));

        map[squre].forEach((plot) => {
            // c(plot);
            // c("squre :" + squre);
            resizeMap(map, plot);
            // for (let i = 0; i < Object.keys(map).length; i++) {
            //     c(map[Object.keys(map)[i]]);
            //     for (let j = 0; j < 4; j++) {
            //         c(map[Object.keys(map)[i]][j]);
            //     }
            //     c(map[Object.keys(map)[i]]);
            //     // c(Object.keys(map)[i])
            // }

            // c(plot)
        });
    });
};

const resizeMap = (map, item) => {
    for (let i = 0; i < Object.keys(map).length; i++) {
        // c(map[Object.keys(map)[i]]);
        c(map[0])
        for (let j = 0; j < 4; j++) {
            // c(map[Object.keys(map)[i]][j]);
        }
        // c(map[Object.keys(map)[i]]);
        // c(Object.keys(map)[i])
    }
};
const generateRectanglePoints = (rect) => {
    let resArray = [
        [rect[0], rect[1]],
        [rect[2], rect[1]],
        [rect[2], rect[3]],
        [rect[0], rect[3]],
    ];
    return resArray;
};

c(
    isRectangleCover([
        [1, 1, 3, 3],
        [3, 1, 4, 2],
        [3, 2, 4, 4],
        [1, 3, 2, 4],
        [2, 3, 3, 4],
    ])
);
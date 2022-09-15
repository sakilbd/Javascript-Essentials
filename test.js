// https://leetcode.com/problems/perfect-rectangle/
const c = console.log.bind(console);

var isRectangleCover = function(rectangles) {
    let map = {};
    let mapArray = [];
    let set = new Set();;

    let rectSet = new Set()
    rectangles.forEach((item) => {
        rectSet.add(item.join(''))
    })
    if (rectangles.length != rectSet.size) {
        return false;
    }
    // return [...new Set(rectangles)].length;
    // set.has(1) ? set.delete(1) : ''

    rectangles.forEach((item, i) => {

        // map[item.join("")] = generateRectanglePoints(item);

        // mapArray.push([item[0], item[1]]);
        // mapArray.push([item[2], item[1]]);
        // mapArray.push([item[2], item[3]]);
        // mapArray.push([item[0], item[3]]);

        let a, b, c, d;
        a = item[0].toString() + item[1].toString();
        b = item[2].toString() + item[1].toString();
        c = item[2].toString() + item[3].toString();
        d = item[0].toString() + item[3].toString();
        set.has(a) ? set.delete(a) : set.add(a);
        set.has(b) ? set.delete(b) : set.add(b);
        set.has(c) ? set.delete(c) : set.add(c);
        set.has(d) ? set.delete(d) : set.add(d);

        // set.add([item[0], item[1]]);
        // set.add([item[2], item[1]]);
        // set.add([item[2], item[3]]);
        // set.add([item[0], item[3]]);
        // set.add(item[0].toString() + item[1].toString());
        // set.add(item[2].toString() + item[1].toString());
        // set.add(item[2].toString() + item[3].toString());
        // set.add(item[0].toString() + item[3].toString());
    });

    return set.size == 4 ? true : false;

};

const resizeMap = (map, item) => {
    for (let i = 0; i < Object.keys(map).length; i++) {
        // c(map[Object.keys(map)[i]]);
        c(map[0]);
        for (let j = 0; j < 4; j++) {
            // c(map[Object.keys(map)[i]][j]);
        }
        // c(map[Object.keys(map)[i]]);
        // c(Object.keys(map)[i])
    }
};
const generateRectanglePoints = (rect) => {
    let pointsArray = [];
    pointsArray.push([rect[0], rect[1]]);
    return pointsArray;
    let resArray = [
        [rect[0], rect[1]],
        [rect[2], rect[1]],
        [rect[2], rect[3]],
        [rect[0], rect[3]],
    ];
    return resArray;
};

// c(
//     isRectangleCover([
//         [1, 1, 3, 3],
//         [3, 1, 4, 2],
//         [3, 2, 4, 4],
//         [1, 3, 2, 4],
//         [2, 3, 3, 4],
//     ])
// );

// c(isRectangleCover([
//     [1, 1, 2, 2],
//     [1, 1, 2, 2],
//     [2, 1, 3, 2]
// ]))


c(isRectangleCover([
    [0, 0, 1, 1],
    [0, 0, 2, 1],
    [1, 0, 2, 1],
    [0, 2, 2, 3]
]))
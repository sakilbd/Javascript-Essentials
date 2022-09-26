// https://leetcode.com/problems/perfect-rectangle/
const x = console.log.bind(console);

// 47 test cases solved from 49 need to find the cross squres
var isRectangleCover = function(rectangles) {
    let map = {};
    let mapArray = [];
    let set = new Set();

    // map['aa'] = 1
    // return map['bb']
    // map['aa'] = map['aa'] ? map['aa'] += 1 : 0;

    // return map;

    let rectSet = new Set();
    rectangles.forEach((item) => {
        rectSet.add(item.join(""));
    });
    let xi = new Set();
    let xj = new Set();
    let yi = new Set();
    let yj = new Set();
    // if (rectangles.length != rectSet.size) {
    //     return false;
    // }
    // return [...new Set(rectangles)].length;
    // set.has(1) ? set.delete(1) : ''
    try {
        rectangles.forEach((item, i) => {
            let a, b, c, d;

            // x(arr);
            a = item[0].toString() + item[1].toString();
            b = item[2].toString() + item[1].toString();
            c = item[2].toString() + item[3].toString();
            d = item[0].toString() + item[3].toString();
            map[a] = map[a] != undefined ? (map[a] += 1) : 0;
            map[b] = map[b] != undefined ? (map[b] += 1) : 0;
            map[c] = map[c] != undefined ? (map[c] += 1) : 0;
            map[d] = map[d] != undefined ? (map[d] += 1) : 0;
            if (xi.has(a) || xj.has(b) || yi.has(c) || yj.has(d)) {
                throw "shit";
            }

            set.has(a) ? set.delete(a) : set.add(a);
            set.has(b) ? set.delete(b) : set.add(b);
            set.has(c) ? set.delete(c) : set.add(c);
            set.has(d) ? set.delete(d) : set.add(d);

            xi.add(a);
            xj.add(b);
            yi.add(c);
            yj.add(d);
        });
    } catch (e) {
        if (e == "shit") {
            return false;
        }
    }
    // return map;
    // const arr = Array.from(set);
    // console.log(arr);
    return set.size == 4 ? true : false;
};

// x(
//   isRectangleCover([
//     [1, 1, 3, 3],
//     [3, 1, 4, 2],
//     [3, 2, 4, 4],
//     [1, 3, 2, 4],
//     [2, 3, 3, 4],
//   ])
// );

// x(
//   isRectangleCover([
//     [1, 1, 2, 2],
//     [1, 1, 2, 2],
//     [2, 1, 3, 2],
//   ])
// );

// x(
//   isRectangleCover([
//     [0, 0, 1, 1],
//     [0, 0, 2, 1],
//     [1, 0, 2, 1],
//     [0, 2, 2, 3],
//   ])
// );

// x(
//     isRectangleCover([
//         // [0, 0, 1, 1],
//         [0, 0, 1, 1],
//         [0, 2, 1, 3],
//         [1, 1, 2, 2],
//         [2, 0, 3, 1],
//         [2, 2, 3, 3],
//         [1, 0, 2, 3],
//         [0, 1, 3, 2],
//     ])
// );

x(
    isRectangleCover([
        [0, 0, 1, 1],
        [0, 2, 1, 3],
        [1, 1, 2, 2],
        [2, 0, 3, 1],
        [2, 2, 3, 3],
        [1, 0, 2, 3],
        [0, 1, 3, 2],
    ])
);
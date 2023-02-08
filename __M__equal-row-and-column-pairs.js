// https://leetcode.com/problems/equal-row-and-column-pairs/description/

const c = console.log.bind(console);

var equalPairs = function(grid) {
    let map = new Map();

    let trackNum = 0;

    //this map needs to be done for test case 3 and 5
    grid = grid.map((item) => {
        let arr = [];
        for (let i of item) {
            // map.set(i, trackNum);
            if (!map.has(i)) {
                map.set(i, trackNum);
                trackNum++;
            }
            arr.push(map.get(i));
        }

        return arr;
    });

    let arr = [];
    let arr2 = [];
    for (let elem of grid) {
        arr.push(elem.join(""));
    }
    let res = 0;
    let length = grid[0].length;
    let index = 0;
    while (index < length) {
        let elem = "";
        for (let i of grid) {
            elem += i[index];
        }
        arr2.push(elem);

        index++;
    }
    for (let elem of arr) {
        for (let elem_2 of arr2) {
            if (elem == elem_2) {
                res++;
            }
        }
    }
    return res;


};

c(
    equalPairs([
        [3, 1, 2, 2],
        [1, 4, 4, 5],
        [2, 4, 2, 2],
        [2, 4, 2, 2],
    ])
);

c(
    equalPairs([
        [3, 2, 1],
        [1, 7, 6],
        [2, 7, 7],
    ])
);

c(
    equalPairs([
        [13, 13],
        [13, 13],
    ])
); //returns 4

c(
    equalPairs([
        [13, 12],
        [12, 13],
    ])
);

c(
    equalPairs([
        [11, 1],
        [1, 11],
    ])
); //returns 2
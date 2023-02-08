const c = console.log.bind(console);

var equalPairs = function(grid) {
    let set = new Set();
    let arr = [];
    let arr2 = [];
    for (let elem of grid) {
        // set.add(elem.join(''))
        arr.push(elem.join(""));
    }
    let res = 0;

    let length = grid[0].length;
    let index = 0;
    // c(set)
    while (index < length) {
        let elem = "";
        for (let i of grid) {
            elem += i[index];
        }
        // c(elem)
        arr2.push(elem);
        // set.has(elem) ? res++ : "";
        index++;
    }

    let _res = arr2.filter((x) => arr.includes(x)).length;
    let _res2 = arr.filter((x) => arr2.includes(x)).length;

    for (let elem of arr) {
        for (let elem_2 of arr2) {
            if (elem == elem_2) {
                res++;
            }
        }
    }



    return res;


    // return _res2

};

c(
    equalPairs([
        [3, 1, 2, 2],
        [1, 4, 4, 5],
        [2, 4, 2, 2],
        [2, 4, 2, 2],
    ])
);

c(equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7]
]))

c(equalPairs([
    [13, 13],
    [13, 13]
]))

c(equalPairs([
    [13, 12],
    [12, 13]
]))
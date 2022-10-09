//Weekly Contest 314 problem 1
const c = console.log.bind(console);

var hardestWorker = function(n, logs) {
    let map = new Map();
    logs.forEach((i, k) => {
        // map.set(i[0], Math.abs(map.get(i[0]) - logs[k + 1][1]) || 1);

        if (!map.has(i[0])) {
            if (logs[k - 1]) {
                map.set(i[0], Math.abs(logs[k - 1][1] - i[1]));
            } else {
                map.set(i[0], Math.abs(0 - i[1]));
            }
        } else {
            let abs = Math.abs(logs[k - 1][1] - i[1]);
            if (map.get(i[0]) < abs) {
                map.set(i[0], abs)
            }

        }
    });
    let arr = [];
    let highest = 0
    for (let [key, value] of map.entries()) {
        highest < value ? highest = value : ''
        arr.push([key, value]);
    }
    // return highest;
    let finalArr = arr.filter(item => {
            return item[1] == highest ? item : ''
        })
        // return finalArr
    if (finalArr.length > 1) {
        let res = finalArr[0][0];
        finalArr.forEach(item => {
            item[0] < res ? res = item[0] : ''
                // c(item)
        })
        return res;

    } else {
        return finalArr[0][0];
    }
    // return map;
};

c(
    hardestWorker(10, [
        [0, 3],
        [2, 5],
        [0, 9],
        [1, 15],
    ])
);

c(hardestWorker(26, [
    [1, 1],
    [3, 7],
    [2, 12],
    [7, 17]
]))

c(hardestWorker(2, [
    [0, 10],
    [1, 20]
]))


c(hardestWorker(482, [
    [373, 5],
    [445, 6],
    [471, 11],
    [419, 14],
    [201, 16],
    [327, 18]
]))
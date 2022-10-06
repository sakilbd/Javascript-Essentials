// https://leetcode.com/problems/find-players-with-zero-or-one-losses/
const c = console.log.bind(console);

var findWinners = function(matches) {
    let loserMap = new Map();
    matches.forEach((item) => {
        if (!loserMap.has(item[0])) {
            loserMap.set(item[0], 0);
        }
        loserMap.has(item[1]) ?
            loserMap.set(item[1], loserMap.get(item[1]) + 1) :
            loserMap.set(item[1], 1);
    });
    let zeroLose = [];
    let oneLose = [];
    for (let [key, value] of loserMap.entries()) {
        value == 0 ? zeroLose.push(key) : "";
        value == 1 ? oneLose.push(key) : "";
    }
    return [zeroLose.sort((a, b) => a - b), oneLose.sort((a, b) => a - b)];
};

c(
    findWinners([
        [1, 3],
        [2, 3],
        [3, 6],
        [5, 6],
        [5, 7],
        [4, 5],
        [4, 8],
        [4, 9],
        [10, 4],
        [10, 9],
    ])
);
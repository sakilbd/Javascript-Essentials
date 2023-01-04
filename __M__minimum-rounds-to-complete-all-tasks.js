// https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/description/
const c = console.log.bind(console);
//by me 
var minimumRounds = function(tasks) {
    let map = new Map();
    let rounds = 0;
    tasks.forEach((item) => {
        map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
    });
    for (let [key, value] of map) {
        if (value < 2) {
            rounds = -1;
            break;
        }
        if (value % 3 == 0) {
            rounds += value / 3;
        } else if (value % 3 == 1) {
            rounds += (value + 2) / 3
        } else if (value % 3 == 2) {
            rounds += (value + 1) / 3
        }
    }
    return rounds;
};


//from community 
var minimumRounds = function(tasks) {

    let map = new Map()

    for (let i = 0; i < tasks.length; i++) {
        if (!map.has(tasks[i])) map.set(tasks[i], 1)
        else map.set(tasks[i], map.get(tasks[i]) + 1)
    }

    let rounds = 0
    for (let [k, v] of map) {
        if (v == 1) return -1
        else rounds += Math.ceil(v / 3)
    }

    return rounds
};
c(minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4]));
c(minimumRounds([2, 3, 3]))

// c(2 % 3);
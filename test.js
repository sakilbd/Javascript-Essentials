// https://leetcode.com/problems/finding-the-users-active-minutes/
const c = console.log.bind(console)


// var findingUsersActiveMinutes = function(logs, k) {
//     let map = new Map();
//     for (let i = 0; i < logs.length; i++) {
//         // map[logs[i][0]] = {
//         //     [logs[i][1]]: 1
//         // };
//         if (map.has(logs[i][0])) {
//             map.set(logs[i][0], map.get(logs[i][0]).add(logs[i][1]))
//         } else {
//             let set1 = new Set();
//             map.set(logs[i][0], set1.add(logs[i][1]))
//         }
//         // map.set(logs[i][0], logs[i][1])
//     }
//     return map;
//     // return (map[0][0])
//     let arrMap = new Map();
//     for (let [key, value] of map.entries()) {
//         // arrMap.set(value.size, key)
//         arrMap.has(value.size) ? arrMap.set(value.size, arrMap.get(value.size) + 1) : arrMap.set(value.size, 1)
//     }
//     // return arrMap
//     let resArr = new Array(k).fill(0)
//     for (let [key, value] of arrMap.entries()) {
//         resArr[key - 1] = value;
//     }


//     return resArr;
// };


//from community with less TLE 
var findingUsersActiveMinutes = function(logs, k) {
    let users = {};
    for (let i = 0; i < logs.length; i++) {
        let [user, minutes] = logs[i];
        if (users[user]) {
            users[user].add(minutes);
        } else {
            users[user] = new Set([minutes]);
        }
    }
    // return users;
    let arr = new Array(k).fill(0);
    for (let value of Object.values(users)) {
        // c(value)
        arr[value.size - 1]++;
        // c(arr)
    }
    return arr;
};


c(findingUsersActiveMinutes([
    [0, 5],
    [1, 2],
    [0, 2],
    [0, 5],
    [1, 3]
], 5))


c(findingUsersActiveMinutes([
    [1, 1],
    [2, 2],
    [2, 3]
], 4))
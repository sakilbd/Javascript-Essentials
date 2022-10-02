// https://leetcode.com/problems/rings-and-rods/

const c = console.log.bind(console);


// var countPoints = function(rings) {
//     let split = rings.split('');
//     let map = new Map();
//     for (let i = 0; i < split.length; i = i + 2) {
//         for (let j = i + 1; j <= i + 1; j++) {
//             if (j == split.length) {
//                 break;
//             } else {
//                 // c(split[i], split[j])
//                 if (map.has(split[j])) {
//                     let mapGet = map.get(split[j])
//                     if (mapGet[0] == 0) {
//                         mapGet[0] = split[i];
//                     } else if (mapGet[1] == 0 && split[i] != mapGet[0]) {
//                         mapGet[1] = split[i];
//                     } else if (mapGet[2] == 0 && split[i] != mapGet[0] && split[i] != mapGet[1]) {
//                         mapGet[2] = split[i];
//                     }
//                     // map.set(split[j], )

//                 } else {
//                     map.set(split[j], [split[i], 0, 0])
//                 }
//             }
//         }
//     }
//     let count = 0;
//     for (let [key, value] of map.entries()) {
//         [...new Set(value)].length == 3 && !value.includes(0) ? count++ : '';
//     }
//     return count;
// };


//from community 
var countPoints = function(rings) {
    let rods = {};
    [...rings].forEach((c, i) => {
            if (['R', 'G', 'B'].includes(c)) {
                rods[rings[i + 1]] ? rods[rings[i + 1]].add(c) : rods[rings[i + 1]] = new Set(c);
            }
        })
        // return rods;
    return Object.entries(rods).filter(obj => obj[1].size == 3).length
};

c(countPoints('B0B6G0R6R0R6G9'))

// c(countPoints("B0R0G0R9R0B0G0"));
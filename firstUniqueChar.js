const c = console.log.bind(console);


// var firstUniqChar = function(s) {
//     let object = {};
//     const splitedS = s.split('');
//     s.split('').forEach(item => {
//         object[item] = 0;
//     });
//     s.split('').forEach(item => {
//         object[item]++
//     });
//     let result = []
//     Object.keys(object).map(item => {
//         // return object[item] == 1 ? result.push(item) : result.push(-1);
//         if (object[item] == 1) {
//             result.push(item)
//         }
//     })
//     if (!result[0] == false) {
//         return splitedS.indexOf(result[0]);
//     } else {
//         return -1
//     };


// };

//optimal solution using map 
let firstUniqChar = function(s) {
    let map = new Map();
    c(map);
    for (let x of s) {
        if (map.has(x)) {
            map.set(x, map.get(x) + 1);
        } else {
            map.set(x, 0);
        }
    }
    c(map);
    // for (let [k, v] of map) {
    //     if (v === 0) {
    //         let val = s.indexOf(k);
    //         return val;
    //     }
    // }
    for (let [k, v] of map) {


        if (v === 0) {
            let val = s.indexOf(k);
            return val;
        }
    }
};



c(firstUniqChar("aabb"));
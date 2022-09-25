const c = console.log.bind(console);

// var commonChars = function(words) {
//     let res = [];
//     let insert = true;
//     for (let i of words) {
//         for (let j of words) {
//             for (let k of words) {
//                 // c(k.includes(j))
//                 if (k.includes(j) == false) {
//                     // c(j)
//                     insert = false;
//                     break;
//                 } else {
//                     insert = true;
//                 }

//             }
//             // c(insert)
//             if (insert == true) {
//                 // c(j)
//                 res.push(j);
//             }
//         }
//     }

//     let result = [...new Set(res)]
//     res = [];
//     for (let i of words[0]) {
//         for (let j of result) {

//             i == j ? res.push(j) : ''
//         }
//     }

//     return res;
// };

var commonChars = function(words) {
    let res = [];
    let arrCopy = [...words];

    let insert = true;
    for (let i of words[0]) {
        for (let j of words) {
            if (j.includes(i) == false) {
                insert = false;
                break;
            } else {
                insert = true;
            }
        }
        if (insert == true) {
            res.push(i);
        }
    }

    return res;
};

c(commonChars(["bella", "label", "roller"]));

// c(commonChars(["cool", "lock", "cook"]));
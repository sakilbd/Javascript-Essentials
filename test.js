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
    let updateCheck = true;
    // let q = arrCopy[0].replace('b', 'fuck');
    // arrCopy[0] = q;

    // return arrCopy;
    let insert = true;
    for (let i of words[0]) {
        try {
            arrCopy.filter((item, k) => {
                if (!item.includes(i)) {
                    updateCheck = false;
                    throw k;
                } else {
                    updateCheck = true;
                }
                // if (i == item[j]) {
                //     let replaceItem = item.replace(item[j], '');
                //     arrCopy[k] = replaceItem;
                // }
            });
        } catch (err) {
            // c(err);
        }
        if (updateCheck) {
            arrCopy.filter((item, k) => {
                var re = new RegExp(i, '');
                let replaceItem = item.replace(re, "");
                // c(replaceItem)
                arrCopy[k] = replaceItem;
            });

            res.push(i);
        }
    }

    return res;
};

c(commonChars(["bella", "label", "roller"]));

c(commonChars(["cool", "lock", "cook"]));
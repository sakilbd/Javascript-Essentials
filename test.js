// https://leetcode.com/problems/reorder-data-in-log-files/

const c = console.log.bind(console);

var reorderLogFiles = function(logs) {
    // return logs[0].charCodeAt(0);
    let letArr = [];
    let digArr = [];
    logs.forEach((item) => {
        item.split(" ")[1] >= 0 ? digArr.push(item) : letArr.push(item);
    });

    // return digArr
    // let.sort((a, b) => (b.split(' ')[0].charCodeAt(0) - a.split(' ')[0].charCodeAt(0)))
    //     // return logs;

    // logs.forEach(item => {
    //     item.startsWith('l') ? letArr.push(item) : digArr.push(item)
    // })

    letArr.sort((a, b, i) => {
        let aCode = 0;
        let bCode = 0;

        let aSlice = a.split(" ").slice(1, a.length).join("");
        let bSlice = b.split(" ").slice(1, b.length).join("");
        // c("aSlice :" + aSlice);
        // c("bSlice :" + bSlice);

        let length = aSlice.length > bSlice.length ? aSlice.length : bSlice.length;

        for (let i = 0; i < length; i++) {
            aCode += aSlice.charCodeAt(i);
            bCode += bSlice.charCodeAt(i);
            if (aCode != bCode) {
                break;
            }
        }
        // a.split(" ").forEach((item, i) => {
        //     if (i > 0) {
        //         for (let p = 0; p < item.length; p++) {
        //             aCode += item.charCodeAt(p);
        //         }
        //     }
        // });
        // b.split(" ").forEach((item, i) => {
        //     if (i > 0) {
        //         for (let p = 0; p < item.length; p++) {
        //             bCode += item.charCodeAt(p);
        //         }
        //     }
        // });
        // c("aCode :" + a.split(" ")[1] + aCode);
        // c("bCode :" + b.split(" ")[1] + bCode);

        if (aCode == bCode) {

            // c(a.split(' ')[0])
            // c(b.split(' ')[0])
            let aCode = 0;
            let bCode = 0;
            let aSlice = a.split(" ")[0];
            let bSlice = b.split(" ")[0];

            let length =
                aSlice.length > bSlice.length ? aSlice.length : bSlice.length;

            for (let i = 0; i < length; i++) {
                aCode += aSlice.charCodeAt(i);
                bCode += bSlice.charCodeAt(i);
                if (aCode == bCode) {} {
                    break;
                }
            }
            return aCode - bCode;
        } else {
            return aCode - bCode;
        }
        // return aCode - bCode;
    });
    return [...letArr, ...digArr];
};

// c(
//     reorderLogFiles([
//         "a1 9 2 3 1",
//         "ab1 act car",
//         "zo4 4 7",
//         "ab1 off key dog",
//         "a8 act zoo",
//         "a2 act car",
//     ])
// );

c(reorderLogFiles(["j mo", "5 m w", "g 07", "o 2 0", "t q h"]))
    // c(reorderLogFiles(["t kvr", "r 3 1", "i 403", "7 so", "t 54"]));
    // c(reorderLogFiles(["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo"]))
    // c(reorderLogFiles(["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"]))
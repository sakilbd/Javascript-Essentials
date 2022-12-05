// https://leetcode.com/problems/reorder-data-in-log-files/

const c = console.log.bind(console);

var reorderLogFiles = function(logs) {
    // return Math.min(9, 3)
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

    letArr.sort((a, b) => {
        let aCode = 0;
        let bCode = 0;

        let aSlice = a.split(" ").slice(1, a.length);
        let bSlice = b.split(" ").slice(1, b.length);
        // c("aSlice :" + aSlice);
        // c("bSlice :" + bSlice);

        let smallestArr = aSlice.length < bSlice.length ? aSlice : bSlice;
        let __break = 0;
        for (let i = 0; i < smallestArr.length; i++) {
            for (let j = 0; j < Math.min(aSlice[i].length, bSlice[i].length); j++) {
                aCode += aSlice[i].charCodeAt(j);
                bCode += bSlice[i].charCodeAt(j);
                if (aCode != bCode) {
                    __break = 1;
                    break;
                }
            }
            // if (i == smallestArr.length - 1) {
            //     c(aSlice[i].length)
            //     c(bSlice[i].length)

            //     if (aSlice[i].length < bSlice[i].length) {
            //         c("wow")
            //         c(__break)
            //             // return aCode - bCode;
            //     } else if (aSlice[i].length > bSlice[i].length) {

            //         // return aCode - aCode
            //     }
            // }
            if (__break == 1) {
                break;
            }

            // aCode += aSlice.charCodeAt(i);
            // bCode += bSlice.charCodeAt(i);
        }
        // return aCode - bCode;
        // if (aCode == bCode && (aSlice.length != bSlice.length)) {
        //     return aSlice.length - bSlice.length
        // }
        if (aCode == bCode) {
            let aSlice = a.split(" ").slice(1, a.length);
            let bSlice = b.split(" ").slice(1, b.length);
            let minLength = Math.min(aSlice.length, bSlice.length)
            if (aSlice[minLength - 1].length < bSlice[minLength - 1].length) {
                c("wow");
                // c(__break);
                return aSlice[minLength - 1].length - bSlice[minLength - 1].length;
            } else if (aSlice.length < bSlice.length) {
                return aSlice.length - bSlice.length;
            }
            // c(aSlice);
            // c(a.split(' ')[0])
            // c(b.split(' ')[0])
            let aCode = 0;
            let bCode = 0;
            aSlice = a.split(" ")[0];
            bSlice = b.split(" ")[0];

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
    });
    return [...letArr, ...digArr];
};

// c(
//     reorderLogFiles([
//         "a1 9 2 3 1",
//         "a0 act car",
//         "zo4 4 7",
//         "ab1 off key dog",
//         "a8 act zoo",
//         "a2 act car",
//     ])
// );

c(reorderLogFiles(["j abc", "5 abc w", "g 07", "o 2 0", "t q h"]));

c(reorderLogFiles(["j mo", "5 m w", "g 07", "o 2 0", "t q h"]));
// c(reorderLogFiles(["t kvr", "r 3 1", "i 403", "7 so", "t 54"]));
// c(reorderLogFiles(["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo"]))
// c(reorderLogFiles(["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"]))

c(
    reorderLogFiles([
        "dig1 8 1 5 1",
        "let1 art zero can",
        "dig2 3 6",
        "let2 own kit dig",
        "let3 art zero",
    ])
);
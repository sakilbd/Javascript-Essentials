// https://leetcode.com/problems/string-without-aaa-or-bbb/
const c = console.log.bind(console);

// var strWithout3a3b = function(a, b) {
//     let res = "";
//     while (true) {
//         if (a > b) {
//             if (a >= 2) {
//                 res += Array(2).fill("a").join("");
//                 a = a - 2;
//             } else if (a > 0) {
//                 res += "a";
//                 a--;
//             }
//             if (b >= 2) {
//                 if (a > 2) {
//                     res += "b";
//                     b--;
//                 } else {
//                     res += Array(2).fill("b").join("");
//                     b = b - 2;
//                 }
//             } else if (b > 0) {
//                 res += "b";
//                 b--;
//             }
//             if (a == 0 && b == 0) {
//                 break;
//             }
//         } else {
//             if (b >= 2) {
//                 res += Array(2).fill("b").join("");
//                 b = b - 2;
//             } else if (b > 0) {
//                 res += "b";
//                 b--;
//             }
//             if (a >= 2) {
//                 if (b > 2) {
//                     res += "a";
//                     a--;
//                 } else {
//                     res += Array(2).fill("a").join("");
//                     a = a - 2;
//                 }
//             } else if (a > 0) {
//                 res += "a";
//                 a--;
//             }
//             if (a == 0 && b == 0) {
//                 break;
//             }
//         }
//     }
//     return res;
// };

var strWithout3a3b = function(a, b) {
    let res = "";
    if (a == b) {
        while (true) {
            res += "a";
            res += "b"
            a--;
            b--;
            if (a == 0) {
                break;
            }
        }
        return res;

    }
    return a > b ? createString("a", "b", a, b) : createString("b", "a", b, a);
};
let createString = (first, second, firstCount, secondCount) => {
    let numberOfPairsFirst =
        parseInt(firstCount / 2) +
        ((firstCount / 2) % 1 == 0 ? parseInt(0) : parseInt(1));
    // return numberOfPairsFirst;
    let secondPairNeeded = numberOfPairsFirst - 1;
    // return secondPairNeeded;
    let secondParilElemCount = parseInt(
        secondCount / (secondPairNeeded == 0 ? 1 : secondPairNeeded)
    );
    // let secondParilElemCount = parseInt(secondCount / secondPairNeeded);

    // return secondParilElemCount;
    let res = "";
    while (true) {
        // return ;
        if (numberOfPairsFirst > 1) {
            if (firstCount >= 2) {
                res += Array(2).fill(first).join("");
                // c(Array(2).fill(first).join(''));
                firstCount = firstCount - 2;
            } else {
                res += first;
                firstCount--;
            }
        } else {

            res += first;
            firstCount--;

        }
        if (secondCount > 0) {
            if (secondCount == 2 && firstCount < 3) {
                res += Array(2).fill(second).join("");
                secondCount = secondCount - 2;
            } else {
                let arrLengthCount =
                    parseInt(secondParilElemCount) == 0 ?
                    parseInt(1) :
                    parseInt(secondParilElemCount);
                // c(arrLengthCount);
                res += Array(arrLengthCount).fill(second).join("");
                secondCount--;
            }
        }
        // c("fCount :" + firstCount);
        // c("sCount :" + secondCount);
        if (firstCount == 0 && secondCount == 0) {
            break;
        }
    }
    return res;

    return secondParilElemCount;
    return numberOfPairsFirst;
    return numberOfPairsFirst;
    // return (firstCount / 2) % 1 == 0
};

// c(strWithout3a3b(4, 4));
// c(strWithout3a3b(2, 5));
c(strWithout3a3b(3, 4))
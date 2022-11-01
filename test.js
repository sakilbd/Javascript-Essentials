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
    let res = ''
    while (true) {
        if (a < 2 && a > 0) {
            res += "a";
            a--;
        }
        if (b < 2 && )
            if (a == 0 && b == 0) {
                break;
            }
    }

}

c(strWithout3a3b(2, 5));
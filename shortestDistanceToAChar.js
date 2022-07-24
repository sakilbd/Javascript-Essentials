// https://leetcode.com/problems/shortest-distance-to-a-character/solution/
const p = console.log.bind(console);


//solution by me 
var shortestToChar = function(s, c) {
    let cIndexes = [];

    for (let i in s) {
        if (s[i] == c) {
            cIndexes.push(i);
        }
    }
    let res = [];
    let j = 0;

    const resArray = new Array(s.length).fill(0);
    return resArray.map((item, i) => {

        if (cIndexes.length == 1) {
            var res = Math.abs(i - cIndexes[j]);
            return res;
        }
        // return res;
        // return cIndexes[j + 1];
        if (i <= cIndexes[j]) {} else {
            // if (cIndexes.indexOf(cIndexes[j]) == j) {} else {
            j++;
            // }
        }
        // return cIndexes[j - 1];
        if (j == 0) {
            var res = Math.abs(i - cIndexes[j]);
            return res;
        } else {
            if (j > cIndexes.length - 1) {
                j--;
            }
            // p(cIndexes[j]);
            if (typeof cIndexes[j] != "undefined") {
                var res =
                    Math.abs(i - cIndexes[j - 1]) < Math.abs(i - cIndexes[j]) ?
                    Math.abs(i - cIndexes[j - 1]) :
                    Math.abs(i - cIndexes[j]);
                // p(res);
                return res;
            } else {
                var res = Math.abs(i - cIndexes[j - 1]);
                // p(res);
                return res;
            }
        }

    });
};

//optimal solution from community 
// var shortestToChar = function(S, C) {
//     let result = [],
//         index = [];
//     for (let i = 0; i < S.length; i++) {
//         if (S[i] === C)
//             index.push(i);
//     }
//     for (let i = 0; i < S.length; i++) {
//         if (S[i] === C) {
//             result.push(0);
//         } else {
//             let min = S.length;
//             for (let j = 0; j < index.length; j++) {
//                 min = Math.min(min, Math.abs(i - index[j]));
//             }
//             result.push(min);
//         }
//     }
//     return result;
// };

p(shortestToChar("loveleetcode", "e"));

p(shortestToChar("aaab", "b"));
p(shortestToChar("aaba", "b"));
p(shortestToChar("abaa", "b"));
p(shortestToChar("abba", "b"));
p(shortestToChar("bbaa", "b"));
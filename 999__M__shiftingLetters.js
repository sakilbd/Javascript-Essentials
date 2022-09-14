// https://leetcode.com/problems/shifting-letters-ii/

const c = console.log.bind(console);


// gets TLE
// var shiftingLetters = function(s, shifts) {
//     let result = s;
//     // return s.split('').slice(1, 2)
//     for (let x of shifts) {
//         result = shiftOneString(result, x).join('');
//     }
//     return result;
// };

// const shiftOneString = (s, shifts) => {
//     // let loopLength = shifts[1] - shifts[0];
//     let returnString = [];
//     for (let x in s) {
//         if (x >= shifts[0] && x <= shifts[1]) {
//             if (shifts[2] == 0) {
//                 let getCharCode = s[x].charCodeAt();
//                 returnString.push(String.fromCharCode((getCharCode - 1) < 97 ? 122 : (getCharCode - 1)));
//                 // c(getCharCode);
//                 // c(s[x]);
//             }
//             if (shifts[2] == 1) {
//                 let getCharCode = s[x].charCodeAt();
//                 returnString.push(String.fromCharCode((getCharCode + 1) > 122 ? 97 : (getCharCode + 1)));
//                 // c(getCharCode);
//                 // c(s[x]);
//             }
//         } else {
//             returnString.push(s[x])
//         }
//     }

//     return returnString;
// };



// optimized by me but only 4 test casees faild with huge data 
var shiftingLetters = function(s, shifts) {
    let result = s;
    // return s.split('').slice(1, 2)
    for (let x of shifts) {
        let left = result.slice(0, x[0]);
        let mid = shiftOneString(result, x);
        let right = result.slice(x[1] + 1, s.length);

        result = left + mid + right;
        // result = shiftOneString(result, x).join('');
    }
    return result;
};

const shiftOneString = (s, shifts) => {
    // let loopLength = shifts[1] - shifts[0];
    // let returnString = [];
    let res = ''
    for (let x = shifts[0]; x <= shifts[1]; x++) {

        if (shifts[2] == 0) {
            let getCharCode = s[x].charCodeAt();
            // returnString.push(String.fromCharCode((getCharCode - 1) < 97 ? 122 : (getCharCode - 1)));
            res = res + (String.fromCharCode((getCharCode - 1) < 97 ? 122 : (getCharCode - 1)));

            // c(getCharCode);
            // c(s[x]);
        }
        if (shifts[2] == 1) {
            let getCharCode = s[x].charCodeAt();
            // returnString.push(String.fromCharCode((getCharCode + 1) > 122 ? 97 : (getCharCode + 1)));
            res = res + (String.fromCharCode((getCharCode + 1) > 122 ? 97 : (getCharCode + 1)));

            // c(getCharCode);
            // c(s[x]);
        }

    }

    return res;
};


//from community accepted with  minimum time colplexity
// var shiftingLetters = function(s, shifts) {
//     let chars = [];
//     let preSum = Array(s.length).fill(0);
//     for (let char of s) {
//         chars.push(char.charCodeAt(0));
//     }
//     for (let shift of shifts) {
//         if (shift[2] === 1) {
//             preSum[shift[0]] += 1;
//             preSum[shift[1] + 1] -= 1;
//         } else {
//             preSum[shift[0]] -= 1;
//             preSum[shift[1] + 1] += 1;
//         }
//     }
//     for (let i = 1; i < preSum.length; i++) {
//         preSum[i] += preSum[i - 1];
//     }
//     for (let i = 0; i < chars.length; i++) {
//         let update = chars[i] + preSum[i];
//         while (update > 122) {
//             update -= 26;
//         }
//         while (update < 97) {
//             update += 26;
//         }
//         chars[i] = update;
//     }

//     let res = String.fromCharCode(...chars);
//     return res;
// };
c(shiftingLetters("abc", [
    [0, 1, 0],
    [1, 2, 1],
    [0, 2, 1]
]))
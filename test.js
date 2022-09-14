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

var shiftingLetters = function(s, shifts) {
    let result = s;
    // return s.split('').slice(1, 2)
    for (let x of shifts) {
        result = shiftOneString(result, x).join('');
    }
    return result;
};

const shiftOneString = (s, shifts) => {
    // let loopLength = shifts[1] - shifts[0];
    let returnString = [];
    for (let x in s) {
        if (x >= shifts[0] && x <= shifts[1]) {
            if (shifts[2] == 0) {
                let getCharCode = s[x].charCodeAt();
                returnString.push(String.fromCharCode((getCharCode - 1) < 97 ? 122 : (getCharCode - 1)));
                // c(getCharCode);
                // c(s[x]);
            }
            if (shifts[2] == 1) {
                let getCharCode = s[x].charCodeAt();
                returnString.push(String.fromCharCode((getCharCode + 1) > 122 ? 97 : (getCharCode + 1)));
                // c(getCharCode);
                // c(s[x]);
            }
        } else {
            returnString.push(s[x])
        }
    }

    return returnString;
};


c(shiftingLetters('dztz', [
    [1, 2, 1]
]))
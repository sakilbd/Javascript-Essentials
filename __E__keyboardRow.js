// https://leetcode.com/problems/keyboard-row/submissions/

const c = console.log.bind(console);

var findWords = function(words) {
    let array = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    let bool = true;
    let finalArray = [];
    for (let i of words) {
        let array_index = wordCheck(i[0].toLowerCase(), array);

        for (let testCaseAlpha of i) {
            bool = array[array_index].includes(testCaseAlpha.toLowerCase());

            if (bool == false) {
                break;
            }
        }
        if (bool == true) {
            finalArray.push(i);
        }
    }
    return finalArray;
};
let wordCheck = (alphabate, array) => {
    for (let i in array) {
        let bool = array[i].includes(alphabate);
        if (bool) {
            return i;
        }
    }
};


//from community 
// var findWords = function(words) {
//     let keyboards = [
//         "qwertyuiop",
//         "asdfghjkl",
//         "zxcvbnm"
//     ]

//     return words.filter((w) => {
//         let row = -1;
//         return w.toLowerCase().split("").every(c => {
//             let lookup = keyboards.findIndex(r => r.includes(c));
//             if (row !== lookup && row !== -1) return false;
//             row = lookup;
//             return true;
//         });
//     });
// };

c(findWords(["Hello", "Alaska", "Dad", "Peace"]));
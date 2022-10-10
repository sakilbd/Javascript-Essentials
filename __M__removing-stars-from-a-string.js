// https://leetcode.com/problems/removing-stars-from-a-string/

// solution done but tle occured 
const c = console.log.bind(console);

// var removeStars = function(s) {
//     while (true) {
//         let index = [...s].indexOf("*");

//         if (index != -1) {
//             let spliceRight = [...s].splice(index + 1, s.length);
//             let spliceLeft = [...s].splice(0, index - 1);
//             s = [...spliceLeft, ...spliceRight].join("");
//         } else {
//             break;
//         }
//     }
//     return s;
// };



//from community man :( shit
var removeStars = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*' && stack.length) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.join('');
};

c(removeStars("leet**cod*e")); //"lecoe"
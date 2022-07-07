// https://leetcode.com/problems/find-the-difference/submissions/

const c = console.log.bind(console);


// accepted code by me  
var findTheDifference = function(s, t) {
    if (s == "") {
        return t;
    }
    const arr = s.split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    const arrTwo = t.split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

    const final = arrTwo.map(item => {
        for (let i = 0; i < arr.length; i++) {
            if (item == arr[i]) {

                arr.splice(i, 1)
                return 0
                    // break;
            } else {
                return item
            }
        }
        return item;
    })

    const result = [...new Set(final)];
    return result[1];

}


//optimized experts solution by someone
// var findTheDifference = function(s, t) {
//     s = s + t;
//     // return s;
//     let map = {};
//     for (var i = 0; i < s.length; i++) {
//         if (!(s[i] in map)) {

//             map[s[i]] = 1;

//         } else {
//             delete map[s[i]];
//         }
//         // c(map);
//     }


//     for (var i = 0; i < t.length; i++) {
//         if (map[t[i]] === 1) {
//             return t[i];
//         }
//     }

// };

c(findTheDifference("abcd", "abcde"))
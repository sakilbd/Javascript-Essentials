// https://leetcode.com/problems/number-of-lines-to-write-string/

const c = console.log.bind(console);


var numberOfLines = function(widths, s) {
    // return s.length;
    let alphabates = "abcdefghijklmnopqrstuvwxyz";
    let map = new Map();
    let line = 1;
    let total = 0;

    for (let i in alphabates) {
        map.set(alphabates[i], widths[i])
            // c(map.get(s[i]));

    }

    for (let i = 0; i < s.length; i++) {
        if (total + map.get(s[i]) <= 100) {
            total += map.get(s[i]);
            // c(total);
        } else {
            line++;
            total = map.get(s[i]);
        }
    }
    return [line, total];


};


// var numberOfLines = function(widths, s) {
//     let temp = "abcdefghijklmnopqrstuvwxyz"
//     let tempObj = {};
//     for (let i = 0; i < temp.length; i++) {
//         tempObj[temp[i]] = widths[i]
//     }
//     let lines = 1;
//     let total = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (total + tempObj[s[i]] <= 100) {
//             total += tempObj[s[i]];
//         } else {
//             lines += 1;
//             total = tempObj[s[i]]
//         }
//     }
//     return [lines, total]

// };


c(numberOfLines([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "abcdefghijklmnopqrstuvwxyz"))

// c(numberOfLines([4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "bbbcccdddaaa"))
c(numberOfLines([7, 5, 4, 7, 10, 7, 9, 4, 8, 9, 6, 5, 4, 2, 3, 10, 9, 9, 3, 7, 5, 2, 9, 4, 8, 9],
    "zlrovckbgjqofmdzqetflraziyvkvcxzahzuuveypqxmjbwrjvmpdxjuhqyktuwjvmbeswxuznumazgxvitdrzxmqzhaaudztgie"))
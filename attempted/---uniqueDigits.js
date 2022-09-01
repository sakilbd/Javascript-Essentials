// https://leetcode.com/problems/count-numbers-with-unique-digits/

const c = console.log.bind(console);

// var countNumbersWithUniqueDigits = function(n) {
//     let res = []
//     for (let i = 0; i < Math.pow(10, n); i++) {
//         let digit = i.toString();
//         let lengthOfDigits = digit.length;
//         // c(lengthOfDigits)
//         const splitedDigit = digit.split('');
//         // if (splitedDigit != [...new Set(splitedDigit)]) {
//         //     res.push(i);
//         // }

//         if (splitedDigit.length == [...new Set(splitedDigit)].length) {
//             res.push(i);
//         };
//     }

//     return res.length;

// };

var countNumbersWithUniqueDigits = function(n) {
    let dp = [1];
    let i = 1;
    let prevUniqeNumbers = dp[0];
    let digitsAvailable = 9;
    while (i <= n) {
        if (digitsAvailable < 1) {
            return dp[i - 1];
        }
        let nextCount = dp[i - 1] * digitsAvailable + prevUniqeNumbers;
        digitsAvailable--;
        prevUniqeNumbers += nextCount;
        dp.push(nextCount);
        i++;
    }
    return dp[n];
};

c(countNumbersWithUniqueDigits(9))
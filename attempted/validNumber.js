// https://leetcode.com/problems/valid-number/
// For example, all the following are valid numbers: ["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"], while the following are not valid numbers: ["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"].
const c = console.log.bind(console);

var isNumber = function(s) {
    if (Number(s) == 0 || s == "") {
        return true;
    } else if (s == "Infinity" || s == "-Infinity" || s == "+Infinity") {
        return false;
    } else if (!Number(s) == true) {
        return false;
    } else {
        return true;
    }
};




c(isNumber("123.456e789"));
// https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/description/
const c = console.log.bind(console);

var digitCount = function(num) {
    let numCountObj = {};
    let numSplit = num.split("");
    numSplit.forEach((item) => {
        numCountObj[item] = numCountObj[item] + 1 || 1;
    });
    try {
        numSplit.forEach((item, i) => {
            const num = numCountObj[i] ? numCountObj[i] : 0;
            if (num != item) {
                throw "err";
            }
        });
    } catch (e) {
        return false;
    }
    return true;
};

c(digitCount("1210"));
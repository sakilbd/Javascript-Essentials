// https://leetcode.com/problems/number-of-common-factors/

const c = console.log.bind(console);
var commonFactors = function(a, b) {
    let aArr = [];
    let bArr = [];
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            aArr.push(i)
        }
    }
    for (let i = 1; i <= b; i++) {
        if (b % i == 0) {
            bArr.push(i)
        }
    }
    let difference = bArr.filter(x => aArr.includes(x));
    return difference.length

};

c(commonFactors(12, 6))
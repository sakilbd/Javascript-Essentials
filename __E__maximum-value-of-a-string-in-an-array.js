// https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/description/

const c = console.log.bind(console)

var maximumValue = function(strs) {
    let max = 0;
    for (let string of strs) {
        if (string >= 0) {
            max = Math.max(string, max)
        } else {
            max = Math.max(max, string.length)
        }
    }
    return max;
};


let arr = [1, 2, 3, 4, 5, 6, 7]
c(Math.max(...arr))


c(maximumValue(["alic3", "bob", "3", "4", "00000"]))
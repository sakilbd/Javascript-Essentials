// https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/description/

const c = console.log.bind(console)

var divideString = function(s, k, fill) {
    var regex = new RegExp('.{1,' + k + '}', 'g');
    let res = s.match(regex)
    let lastStrLength = res[res.length - 1].length
    let neededFill = k - lastStrLength;
    let fillStr = new Array(neededFill).fill(fill).join('')
    res[res.length - 1] = res[res.length - 1] + fillStr
    return res;
};



c(divideString("abcdefghij", 3, "x"))
c(divideString("abcdefghijpq", 3, "x"))
// https://leetcode.com/problems/thousand-separator/description/
const c = console.log.bind(console);

var thousandSeparator = function(n) {
    let length = n.toString().length;
    let splitedArr = n.toString().split('');
    if (length > 3) {
        for (let i = length - 3; i > 0; i -= 3) {
            splitedArr.splice(i, 0, ".")
        }
        return splitedArr.join('');
    }
    return n.toString()
};

c(thousandSeparator(987));
c(thousandSeparator(123456789));
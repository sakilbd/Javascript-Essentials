// https://leetcode.com/problems/maximum-69-number/
const c = console.log.bind(console);

var maximum69Number = function(num) {
    // return num.toString().slice(0, 2)
    let wow = num.toString();
    let i;
    for (i = 0; i < wow.length; i++) {
        if (wow[i] == 6) {
            break;
        }
    }
    if (i <= wow.length - 1) {
        return wow.slice(0, i) + "9" + wow.slice(i + 1, wow.length);
    } else {
        return num;
    }
};

c(maximum69Number(9669));

c(maximum69Number(9996));
c(maximum69Number(9999));
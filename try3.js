const c = console.log.bind(console);

var fractionToDecimal = function(numerator, denominator) {
    let res = numerator / denominator;
    res = 3

    // let splited = res.toString().split('.')[1].split('');

    function getRepetend(num) {
        var m = (num + '').match(/\.(\d*?)(\d+?)\2+$/);
        return m && { pattern: +m[2], index: m[1].length };
    }


    return res && res;
    return getRepetend(res)
};




c(fractionToDecimal(4, 333))
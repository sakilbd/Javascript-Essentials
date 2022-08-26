// https: //leetcode.com/problems/reordered-power-of-2/submissions/
const c = console.log.bind(console);

var reorderedPowerOf2 = function(N) {
    const Nstr = N.toString()
    const Ncount = countDigits(Nstr)
    let num = 1;
    let numStr = '1';

    while (numStr.length <= Nstr.length) {
        if (numStr.length === Nstr.length) {
            const numCount = countDigits(numStr);
            if (numCount === Ncount) return true;
        }
        num *= 2;
        numStr = num.toString();
    }
    return false;

    function countDigits(str) {
        const map = Array(10).fill(0);

        for (let c of str) {
            map[+c]++;
        }
        return map.join();
    }
};

c(reorderedPowerOf2(4))
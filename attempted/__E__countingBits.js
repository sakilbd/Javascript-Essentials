// https://leetcode.com/problems/counting-bits/

//counting bits

const c = console.log.bind(console);

var countBits = function(n) {
    let i = 0;
    let resArray = []
    while (i <= n) {
        // c(i);
        resArray.push(i.toString(2).split('').filter(item => item == 1).length);
        i++
    }
    return resArray;
};


c(countBits(5))
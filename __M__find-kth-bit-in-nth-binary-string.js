// https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/description/

const c = console.log.bind(console)
    // by me has 700+ms 

var findKthBit = function(n, k) {
    if (n == 1) {
        return "0";
    }
    let obj = {}
    obj[1] = "0";
    let construct
    for (let i = 2; i <= n; i++) {
        let fetch = obj[i - 1];
        construct = obj[i - 1] + '1' + obj[i - 1].split('').map(item => 1 - item).reverse().join('')
        obj[i] = construct

    }
    return construct[k - 1]

}
var findKthBit = function(n, k) {
    if (n == 1) return '0';

    let len = 2 ** n - 1,
        mid = (len - 1) >> 1;

    if (k - 1 == mid) return '1';
    if (k - 1 < mid) return findKthBit(n - 1, k);
    return findKthBit(n - 1, len - k + 1) == '0' ? '1' : '0';
};

c(findKthBit(4, 1))



// from community
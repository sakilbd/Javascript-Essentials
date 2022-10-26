// https://leetcode.com/problems/build-an-array-with-stack-operations/

const c = console.log.bind(console);

var buildArray = function(target, n) {
    let res = [];

    for (let i = 1; i <= n; i++) {
        res.push("Push");
        !target.includes(i) ? res.push("Pop") : ''
        if (i == target[target.length - 1]) {
            break;
        }

    }
    return res;
};


c(buildArray([1, 3], 3));
c(buildArray([1, 2, 3], 3));
c(buildArray([1, 2], 4))
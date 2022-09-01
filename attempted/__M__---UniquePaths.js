https: //leetcode.com/problems/unique-paths/

    const c = console.log.bind(console);

// var uniquePaths = function(m, n) {
//     // first create a DP
//     const DP = [];
//     for (let i = 0; i <= m; i++) {
//         DP[i] = [];
//     }
//     // return DP;

//     for (let i = 0; i <= m; i++) {
//         for (let j = 0; j <= n; j++) {
//             if (i === 0 || j === 0) {
//                 DP[i][j] = 0;
//             } else if (i === 1 && j === 1) {
//                 DP[i][j] = 1;
//             } else {
//                 const sum = DP[i - 1][j] + DP[i][j - 1];

//                 DP[i][j] = sum;

//             }
//             c(DP)
//         }

//     }

//     return DP[m][n];
// }

//submitted solution need to study a bit about combinaitons thats why ---

var uniquePaths = function(m, n) {
    let q = m + n - 2;
    let r = n - 1;
    return nCr(q, r);

}

function nCr(n, r) {
    return n - r;
    return fact(n) / (fact(r) * fact(n - r));
}

// Returns factorial of n
function fact(n) {
    if (n == 0)
        return 1;
    var res = 1;
    for (var i = 2; i <= n; i++)
        res = res * i;
    return res;
}

// Driver code


c(uniquePaths(3, 3))
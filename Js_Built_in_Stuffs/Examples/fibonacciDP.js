const c = console.log.bind(console);

function fib(n) {
    let memo = [];
    for (let i = 0; i <= n; i++) {
        memo[i] = -1;
    }
    return fibHelper(n, memo);
}

function fibHelper(n, memo) {
    if (memo[n] !== -1) {
        return memo[n];
    }
    if (n <= 1) {
        memo[n] = n;
    } else {
        memo[n] = fibHelper(n - 1, memo) + fibHelper(n - 2, memo);
    }
    return memo[n];
}

c(fib(3)) // 0 1 1   result 2 where n=3 means upto 3rd index 
c(fib(4)) // 0 1 1 2  result 3 where n=4 means upto 4th index
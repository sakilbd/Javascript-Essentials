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

c(fib(300))
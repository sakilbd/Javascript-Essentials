const c = console.log.bind(console);

var fib = function(n) {
    if (n == 1) {
        return 1
    } else if (n == 0) {
        return 0;
    }
    let a = 0,
        b = 1,
        c = 0;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

c(fib(4));
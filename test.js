const c = console.log.bind(console);

var countBits = function(n) {
    while (n--) {
        c(n);
    }
};


c(countBits(2))
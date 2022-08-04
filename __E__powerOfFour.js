const c = console.log.bind(console);


var isPowerOfFour = function(n) {

    if (n == 1) {
        return true
    } else if (n <= 0) {
        return false;
    }
    return n % 1 !== 0 ? false : isPowerOfFour(n / 4);

};


c(isPowerOfFour(3));
c(isPowerOfFour(0));




// c(Math.sqrt(64, Math.floor(3 / 2)))
c(Math.cbrt(64))
c(Math.ceil(Math.pow(256, 1 / 4)));
c("fuckshit")
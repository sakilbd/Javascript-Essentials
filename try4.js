const c = console.log.bind(console);

var removeTrailingZeros = function(num) {

    let i = num.length - 1;

    while (num[i] === "0" && i > 0) {
        i--;
    }

    return num.slice(0, i + 1);
};
c(removeTrailingZeros(51230100));
c(removeTrailingZeros(1720865079269529096765717822459));
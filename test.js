const c = console.log.bind(console);

var discountPrices = function(sentence, discount) {
    return sentence.split(' ').map(item => {
        if (item.startsWith('$') && !item.endsWith("$")) {
            let digit = item.slice(1);
            return digit.match(/^[0-9]+$/) != null;
            return parseInt(digit);
            let res = "$" + digit;
            return res
        } else {
            // return item
        }
    }).join(' ')
};

c(discountPrices("1 2 $3e5 4 $5 $6 7 8$ $9 $10$", "100"))
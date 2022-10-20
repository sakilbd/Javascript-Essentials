// https://leetcode.com/problems/apply-discount-to-prices/

const c = console.log.bind(console);

var discountPrices = function(sentence, discount) {
    return sentence
        .split(" ")
        .map((item) => {
            if (item.startsWith("$") && !item.endsWith("$")) {
                let digit = item.slice(1);
                if (digit.match(/^[0-9]+$/) != null) {
                    digit = digit - (digit * discount) / 100;
                    let res = "$" + parseFloat(digit).toFixed(2);
                    return res;
                } else {
                    return item;
                }
            } else {
                return item;
            }
        })
        .join(" ");
};

c(discountPrices("1 2 $3e5 4 $5 $6 7 8$ $9 $10$", "100"));
c(discountPrices("there are $1 $2 and 5$ candies in the shop", 50));
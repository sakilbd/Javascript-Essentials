// https://leetcode.com/problems/decoded-string-at-index/
const c = console.log.bind(console);

var decodeAtIndex = function(s, k) {
    let res = "";
    var letterNumber = /^[0-9]+$/;
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(letterNumber)) {
            let number = parseInt(s[i]) - 1;
            if (number > 0) {
                res += res.repeat(number);
            }
        } else {
            res += s[i];
        }
        if (res.length >= (k)) {
            // c(res);
            return res[k - 1]

        }
    }
    // return res.length;
};

// c(decodeAtIndex("leet2code3", 10));
// c(decodeAtIndex("ha22", 5));

// c(decodeAtIndex("a2345678999999999999999", 1));


c(decodeAtIndex("y959q969u3hb22odq595", 222280369));
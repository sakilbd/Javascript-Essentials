const c = console.log.bind(console);

var maxProduct = function(words) {
    let arr = [];
    words.forEach(str => {
        let cur = 0;
        // c(cur)
        for (let i = 0; i < str.length; i++) {
            c(str[i], 1 << (str.charCodeAt(i) - 97))
            cur |= 1 << (str.charCodeAt(i) - 97); // | measn bitwise or 
        }
        // c(cur)
        arr.push(cur);
    });
    // return arr
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] & arr[j]) === 0) { //"&" means bitwise and 
                res = Math.max(res, words[i].length * words[j].length);
            }
        }
    }
    return res;
};

// c(maxProduct(["xyz"]));
c(maxProduct(["abcd", "baz", "foo", "bar", "xtfn", "abcdef"]));
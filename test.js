const c = console.log.bind(console)
var maxProduct = function(words) {
    let arr = [];
    words.forEach(str => {
        let cur = 0;
        for (let i = 0; i < str.length; i++) {

            cur |= 1 << (str[i].charCodeAt() - 97)

        }
        arr.push(cur)

    })
    let max = 0
    for (let i in arr) {

        for (let j in arr) {

            if ((arr[i] & arr[j]) === 0) {

                max = Math.max(max, words[i].length * words[j].length)
            }
        }
    }
    return max;
};

// c(maxProduct(["xyz"]));
c(maxProduct(["abcd", "baz", "foo", "bar", "xtfn", "abcdef"]));
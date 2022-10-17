const c = console.log.bind(console);

var maxProduct = function(words) {
    let resProduct = 0;
    let count = 0;
    words.sort((a, b) => a.length - b.length);
    // return words;
    words.forEach((item) => {
        for (let i = words.length - 1; i >= 0; i--) {
            let wordSplit = words[i].split("");
            let itemSplit = item.split("");
            let wordSet = [...new Set(wordSplit)];
            let itemSet = [...new Set(itemSplit)];
            if (itemSet.length < wordSet.length) {
                var check = itemSet.filter((x) => {
                    // c(x)
                    return !wordSet.includes(x);
                });
            } else {
                // c("shit")
                var check = wordSet.filter((x) => {
                    // c(x)
                    return !itemSet.includes(x);
                });
            }
            if (check.length == wordSet.length) {
                count++;
                // c(count)
                // c("item :" + item);
                // c("words :" + words[i]);
                let product = item.length * words[i].length;
                if (product > resProduct) {
                    resProduct = product;
                    break;
                }
            }
            // c("ITEM :" + item.length)
        }
    });
    return resProduct;
};

c(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
c(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]));

c(maxProduct(["a", "aa", "aaa", "aaaa"]));

c(
    maxProduct([
        "eae",
        "ea",
        "aaf",
        "bda",
        "fcf",
        "dc",
        "ac",
        "ce",
        "cefde",
        "dabae",
    ])
);
// https://leetcode.com/problems/word-subsets/
const c = console.log.bind(console);
let p = "abcde";
// c(p.indexOf('b'))
// c(p.slice(0, 2) + p.slice(3))
// c(p)
var wordSubsets = function(words1, words2) {
    words2 = [...new Set(words2)];

    return words1.filter((item) => {
        let tempItem = item;
        let bool = "";
        try {
            words2.forEach((i) => {
                tempItem = item;
                i.split("").forEach((j) => {
                    if (!tempItem.includes(j)) {
                        bool = false;
                        throw "fuck";
                    } else {
                        tempItem = tempItem.slice(0, tempItem.indexOf(j)) + tempItem.slice(parseInt(tempItem.indexOf(j)) + 1)
                            // c(tempItem)
                        bool = true;
                    }
                });
                // if (!item.includes(i)) {
                //     bool = false;
                //     throw "fuck";
                // } else {
                //     bool = true;
                // }
            });
        } catch (err) {
            // c(err);
        } finally {
            if (bool) {
                return item;
            }
        }
        // c(item)
    });
};

c(
    wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["e", "o"])
);

c(
    wordSubsets(
        ["amazon", "apple", "facebook", "google", "leetcode"], ["lo", "eo"]
    )
);

c(
    wordSubsets(
        ["amazon", "apple", "facebook", "google", "leetcode"], ["e", "oo"]
    )
);
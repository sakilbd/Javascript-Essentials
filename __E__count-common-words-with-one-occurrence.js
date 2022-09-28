// https://leetcode.com/problems/count-common-words-with-one-occurrence/
const c = console.log.bind(console);

var countWords = function(words1, words2) {
    let word1Map = new Map();
    let word2Map = new Map();

    words1.forEach(item => {
        word1Map.set(item, word1Map.get(item) + 1 || 1);
    })
    words2.forEach(item => {
        word2Map.set(item, word2Map.get(item) + 1 || 1);
    })

    let resWord1 = [];
    let resWord2 = [];
    for (let [key, value] of word1Map.entries()) {
        value == 1 ? resWord1.push(key) : ''
    }
    for (let [key, value] of word2Map.entries()) {
        value == 1 ? resWord2.push(key) : ''
    }
    return resWord1.filter(item => resWord2.includes(item)).length;

    // return word1Map;
};

c(
    countWords(
        ["leetcode", "is", "amazing", "as", "is"], ["amazing", "leetcode", "is"]
    )
);
// https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/

const c = console.log.bind(console);

var numSmallerByFrequency = function(queries, words) {
    let wordsLexCount = [];
    words.forEach((item) => {
        let sorted = item
            .split("")
            .sort((a, b) => a.charCodeAt() - b.charCodeAt())
            .join("");

        let replace = sorted[0];
        let re = new RegExp(replace, "g");
        let count = sorted.match(re).length;
        wordsLexCount.push(count);
    });

    wordsLexCount.sort((a, b) => b - a);

    let res = []
    queries.forEach((item, i) => {
        let sorted = item
            .split("")
            .sort((a, b) => a.charCodeAt() - b.charCodeAt())
            .join("");

        let replace = sorted[0];
        let re = new RegExp(replace, "g");
        let count = sorted.match(re).length;
        let checkIfExists = (elem) => count < elem;
        res.push(wordsLexCount.filter(checkIfExists).length)
            // wordsLexCount.some(checkIfExists) ? res.push(i + 1) : '';
    });
    return res;
    // return queries;
};

c(numSmallerByFrequency(["cbbbd", "cc"], ["a", "aa", "aaa", "aaaa"]));

c(numSmallerByFrequency(["cbd"], ["zaaaz"]))

c(numSmallerByFrequency(["bba", "abaaaaaa", "aaaaaa", "bbabbabaab", "aba", "aa", "baab", "bbbbbb", "aab", "bbabbaabb"], ["aaabbb", "aab", "babbab", "babbbb", "b", "bbbbbbbbab", "a", "bbbbbbbbbb", "baaabbaab", "aa"]))
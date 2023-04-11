// https://leetcode.com/problems/count-pairs-of-similar-strings/description/

const c = console.log.bind(console);

//time complexity 1100ms :/ huh need some optimization may be 
var similarPairs = function(words) {
    let result = 0;
    let length = words.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            let i_set = [...new Set(words[i].split(""))];
            let j_set = [...new Set(words[j].split(""))];
            let commonElems = [...i_set].filter((n) => j_set.includes(n));
            if (
                commonElems.length == i_set.length &&
                commonElems.length == j_set.length
            ) {
                result++;
            }
        }
    }
    return result;
};

c(similarPairs(["aba", "aba", "aabb", "abcd", "bac", "aabc"]));
c(similarPairs(["aabb", "ab", "ba"]));
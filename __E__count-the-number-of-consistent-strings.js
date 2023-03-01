// https://leetcode.com/problems/count-the-number-of-consistent-strings/

const c = console.log.bind(console);

var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed)
    return words.filter((item) => [...new Set(item)].every((item) => allowedSet.has(item))).length;
};

c(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
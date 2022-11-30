// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/

const c = console.log.bind(console);

var numberOfSubstrings = function(s) {
    let length = s.length;
    let x = 0;
    let count = 0;

    while (x <= length - 3) {
        let slice = s.slice(x, length);

        let aIdx = slice.indexOf("a");
        let bIdx = slice.indexOf("b");
        let cIdx = slice.indexOf("c");
        if (aIdx >= 0 && bIdx >= 0 && cIdx >= 0) {
            let maxIdx = Math.max(aIdx, bIdx, cIdx);
            count += length - x - maxIdx;
        }
        x++;
    }
    return count;
};

c(numberOfSubstrings("abcabc"));

c(numberOfSubstrings("abcabcabcaaabcccabc"));

c(numberOfSubstrings("ababbbc"));
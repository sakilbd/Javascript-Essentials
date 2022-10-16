// https://leetcode.com/problems/print-words-vertically/
var printVertically = function(s) {
    const arr = s.split(' ')
    const maxLength = Math.max(...arr.map(word => word.length))

    return [...Array(maxLength)].map((_, i) => arr.map(word => word[i] || ' ').join('').trimEnd())
};


console.log(printVertically("TO BE OR NOT TO BE"))
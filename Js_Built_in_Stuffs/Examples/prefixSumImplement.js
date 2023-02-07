// https://leetcode.com/problems/count-vowel-strings-in-ranges/description/

const c = console.log.bind(console);
var vowelStrings = function(words, queries) {
    let vs = [];
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let word of words) {
        if (vowels.has(word[0]) && vowels.has(word[word.length - 1]))
            vs.push(1);
        else
            vs.push(0);
    }
    // return vs;
    let sum = 0;
    for (let i = 0; i < vs.length; i++) {
        sum += vs[i];
        vs[i] = sum;
    }
    // return vs
    let result = [];
    for (let [l, r] of queries) {
        let left = (l > 0) ? vs[l - 1] : 0;
        result.push(vs[r] - left); // makes sense retuns [a,b] range count by subtracting [0,a-1]index total count values 
    }

    return result;

};



c(vowelStrings(["aba", "bcb", "ece", "aa", "e"], [
    [0, 2],
    [1, 4],
    [1, 1]
]))
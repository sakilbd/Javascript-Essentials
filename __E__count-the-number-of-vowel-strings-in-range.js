// https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/description/

const c = console.log.bind(console);

var vowelStrings = function(words, left, right) {
    const startsWithRegex = /^[aeiou]/i;
    const endsWithRegex = /[aeiou]$/i;
    let count = 0;
    for (let i = left; i <= right; i++) {
        const startsWithCheck = startsWithRegex.test(words[i])
        const endsWithCheck = endsWithRegex.test(words[i]);

        if (startsWithCheck && endsWithCheck) {
            count++;

        }

    }
    return count;

};


c(vowelStrings(["hey", "aeo", "mu", "pop", "artro"], 1, 4))
// https://leetcode.com/problems/reverse-vowels-of-a-string/

const c = console.log.bind(console);

var reverseVowels = function(s) {
    let vowel = ["a", "e", "i", "o", "u", 'A', 'E', 'I', 'O', "U"];
    let vowelGet = [];
    s.split('').forEach((item, i) => {
        vowel.includes(item) ? vowelGet.push(item) : ''
    })
    vowelGet.reverse();
    let vowelPutIndex = 0;
    let split = s.split('')
    split.forEach((item, i) => {
        if (vowel.includes(item)) {
            split[i] = vowelGet[vowelPutIndex];
            vowelPutIndex++;
        }
    })
    return split.join('');
};

c(reverseVowels("leetcode"));

c(reverseVowels('aA'))
// https://leetcode.com/problems/reverse-prefix-of-word/
const c = console.log.bind(console);


var reversePrefix = function(word, ch) {
    let firstIndexOfCh = word.indexOf(ch);
    let split = word.split('');
    let reverse = split.splice(0, firstIndexOfCh + 1).reverse().join('')
    return reverse + split.join('');
};


c(reversePrefix("abcdefd", "d"))
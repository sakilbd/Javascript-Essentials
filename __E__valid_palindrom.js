// https://leetcode.com/problems/valid-palindrome/

const c = console.log.bind(console);

var isPalindrome = function(s) {

    let string = s.split(/[^A-Za-z0-9]/).join('').toLowerCase();
    // c(string.length)
    c(string)
    if (string.length == 1) {
        return true;
    }
    if (string.length == 0) {
        return true;
    }
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] == string[(string.length - 1) - i]) {

        } else {
            return false
        }
    }
    return true;


};


c(isPalindrome("A man, a plan, a candal: Panama"));
c(isPalindrome('00'))
c(isPalindrome(' '))
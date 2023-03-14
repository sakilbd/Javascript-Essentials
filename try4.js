// https://leetcode.com/problems/reverse-only-letters/description/
const c = console.log.bind(console);

// A-Z 65-90
//a-z 97-122

const alphabateCheck = (item) => {
    if (
        (item.charCodeAt() <= 90 && item.charCodeAt() >= 65) ||
        (item.charCodeAt() <= 122 && item.charCodeAt() >= 97)
    ) {
        return 1;
    } else {
        return 0;
    }
};
var reverseOnlyLetters = function(s) {
    const alphabate = "abcdefghijklmnopqrstuvwxyz";
    let arr = s.split("");
    const filtered = arr.filter((item) => {
        return alphabate.includes(item.toLowerCase());
    });
    return arr
        .map((item) => {
            if (alphabate.includes(item.toLowerCase())) {
                return filtered.pop();
            } else {
                return item;
            }
        })
        .join("");
};

c(reverseOnlyLetters("A!b-c!$%Z"));
c(reverseOnlyLetters("a-bC-dEf-ghIj"));
c(reverseOnlyLetters("Test1ng-Leet=code-Q!"));
c(reverseOnlyLetters("Test1ng-Le!et=code-Q!"));
// https://vanya.jp.net/vtree/

https: //leetcode.com/problems/remove-all-occurrences-of-a-substring/description/
    const c = console.log.bind(console);

// by me
var removeOccurrences = function(s, part) {
    let string = s;
    while (true) {
        const charsToReplace = part;
        const regex = new RegExp(charsToReplace);
        const replacedStr = string.replace(regex, "");
        if (string != replacedStr) {
            string = replacedStr;
        } else {
            break;
        }
    }
    return string;
};

//fomr community
var removeOccurrences = function(s, part) {
    let res = s;
    while (res.includes(part)) {
        res = res.replace(part, "");
    }
    return res;
};
c(removeOccurrences("daabcbaabcbc", "abc"));
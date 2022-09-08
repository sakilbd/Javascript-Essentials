// https://leetcode.com/problems/word-break/
const c = console.log.bind(console);

//36 test cases passed from 45 by me need to solve those 
// var wordBreak = function(s, wordDict) {
//     let p = 0;
//     let string = s;
//     while (p < wordDict.length) {

//         let j = 0;
//         if (string.includes(wordDict[p])) {
//             string = s.replace(wordDict[p], '');
//         } else {
//             return false;
//         }

//         p++;
//     }
//     return true;
// };

var wordBreak = function(s, wordDict) {
    let p = 0;
    let string = s;
    wordDict.sort((a, b) => a.length - b.length);
    // c(wordDict)
    while (p < s.length) {
        for (let i of wordDict) {
            if (string.includes(i)) {
                string = string.replace(i, "");
                c(string)
            }
        }
        if (string == []) {
            return true;
        }
        p++;
    }
    return false;
};

// c(wordBreak("leetcode", ["leet", "code"]));

// c(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));

// c(wordBreak("bb", ["a", "b", "bbb", "bbbb"]));

// c(wordBreak("cars", ["car", "ca", "rs"]));
c(wordBreak(
        "aaaaaaaa", ["aaaa", "aaa", "aa"])) //this test case failed
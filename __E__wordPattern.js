// https://leetcode.com/problems/word-pattern/

const c = console.log.bind(console);

var wordPattern = function(pattern, s) {
    let distinctString = [...new Set(s.split(' '))]
    let distinctPattern = [...new Set(pattern)];
    if (distinctPattern.length != distinctString.length) {
        return false;
    }
    let set = {};
    for (let i in distinctString) {
        set[distinctString[i]] = distinctPattern[i];
    }
    let resArray = [];

    s.split(' ').forEach(item => {
        resArray.push(set[item]);
    })
    let resString = resArray.join('').split(',').join();

    return pattern == resString ? true : false;
};


c(wordPattern("abba", "dog cat cat dog"))
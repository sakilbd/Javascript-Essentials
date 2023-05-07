// https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/

const c = console.log.bind(console);

var isSumEqual = function(firstWord, secondWord, targetWord) {

    let map = new Map();
    for (let i = 97; i <= 122; i++) {
        let alphabate = String.fromCharCode(i);
        // obj[alphabate.toString()] = i - 97;
        map.set(alphabate, i - 97);
    }
    let [firstWordValue, secondWordValue, targetWordValue] = ["", "", ""];

    const firstWordSplit = firstWord.split("").forEach((item) => {
        firstWordValue += map.get(item);
    });
    const secondWordSplit = secondWord.split("").forEach((item) => {
        secondWordValue += map.get(item);
    });
    const targetWordSplit = targetWord.split("").forEach((item) => {
        targetWordValue += map.get(item);
    });

    if ((parseInt(firstWordValue) + parseInt(secondWordValue)) === parseInt(targetWordValue)) {
        return true;
    } else {
        return false;
    };
};

c(isSumEqual("acb", "cba", "cdb"));
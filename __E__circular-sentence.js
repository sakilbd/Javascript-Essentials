https: //leetcode.com/problems/circular-sentence/description/
    const c = console.log.bind(console);

var isCircularSentence = function(sentence) {
    let splited = sentence.split(" ");
    let length = splited.length;
    if (length == 1) {
        if (splited[0].slice(-1) === splited[0].slice(0, 1)) {
            return true;
        } else {
            return false;
        }
    }
    for (let i = 1; i < length; i++) {
        if (splited[i].slice(0, 1) != splited[i - 1].slice(-1)) return false;

        if (i == length - 1) {
            if (splited[i].slice(-1) != splited[0].slice(0, 1)) return false;
        }
    }
    return true;
};

c(isCircularSentence("leetcode"));
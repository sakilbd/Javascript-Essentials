// https://leetcode.com/problems/replace-words/
const c = console.log.bind(console);

var replaceWords = function(dictionary, sentence) {
    const sentenceSplit = sentence.split(" ");
    dictionary.sort((a, b) => a.length - b.length);

    let res = sentenceSplit.map((item) => {
        for (let i = 0; i < dictionary.length; i++) {
            if (item.startsWith(dictionary[i])) {
                // c("true");
                // c(dictionary[i])
                return dictionary[i];
            }
        }
        return item;
    });
    return res.join(' ');
};

c(
    replaceWords(["cat", "catt", "bat", "rat"], "the rattled was cattled by the battery")
);
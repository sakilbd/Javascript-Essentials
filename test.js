// https://leetcode.com/problems/number-of-lines-to-write-string/

const c = console.log.bind(console);


var numberOfLines = function(widths, s) {
    let alphabates = "abcdefghijklmnopqrstuvwxyz";
    let map = new Map();
    let lineCount = 0;
    let linePixelCount = 0;
    let pixelCounter = 100;
    let lastLineStartIndex = 0
    let lastLinePixelCount = 0;
    for (let i in alphabates) {
        map.set(alphabates[i], widths[i])

    }
    for (let i = 0; i < s.length; i++) {

        linePixelCount += map.get(s[i]);
        if (linePixelCount > pixelCounter) {
            lineCount++;
            pixelCounter += 100;
            lastLineStartIndex = i;

        }
    }
    c(lastLineStartIndex);
    // c(s.length)
    for (let i = lastLineStartIndex; i < s.length; i++) {
        lastLinePixelCount += map.get(s[i]);
        // c(lastLinePixelCount)
    }
    return [lineCount + 1, lastLinePixelCount];
    return map;


};

// c(numberOfLines([4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "bbbcccdddaaa"))

// c(numberOfLines([4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "abcdefghijklmnopqrstuvwxyz"))
c(numberOfLines([7, 5, 4, 7, 10, 7, 9, 4, 8, 9, 6, 5, 4, 2, 3, 10, 9, 9, 3, 7, 5, 2, 9, 4, 8, 9],
    "zlrovckbgjqofmdzqetflraziyvkvcxzahzuuveypqxmjbwrjvmpdxjuhqyktuwjvmbeswxuznumazgxvitdrzxmqzhaaudztgie"))
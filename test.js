const c = console.log.bind(console);
var detectCapitalUse = function(word) {
    if (word[0].toUpperCase() === word[0]) {
        //checks if first alphabate is uppercase
        let check = true;
        for (let i = 1; i < word.length; i++) {
            if (word[i].toUpperCase() != word[i]) {
                check = true;
            } else {
                // return false;
            }
        }
        return check;
        // return true;
    } else {
        let check = true
        for (let i = 1; i < word.length; i++) {
            if (word[i].toLowerCase() === word[i]) {
                check = true
            } else {
                return false;
            }
        }
        return check;
    }
    return true;

};

c(detectCapitalUse("USA"));
c(detectCapitalUse("FlaG"));
c(detectCapitalUse("sdfJ"))
c(detectCapitalUse("dlskfjsldf"))
c(detectCapitalUse("Leetcode"))
// https://leetcode.com/problems/detect-capital/

const c = console.log.bind(console);

// by me 
var detectCapitalUse = function(word) {
    if (word[0].toUpperCase() === word[0]) {
        //checks if first alphabate is uppercase
        let check = true;
        for (let i = 1; i < word.length; i++) {
            // c(word[i])
            if (word[i].toUpperCase() != word[i]) {
                if (check && i == word.length - 1 && i > 1) {

                    return false;
                }
                if (check && i > 1) {

                    return false;
                }
                check = false;

            }
            if (word[i].toUpperCase() === word[i]) {
                if (!check) {
                    return false;
                } else {
                    // console.groupCollapsed();
                    // c(word[i]);
                    // c("fuck");
                    // console.groupEnd();

                    check = true;
                }
                // return false;
            }


            // c("FIRST :" + check)
        }

        return true;
        // return true;
    } else {
        let check = true;
        for (let i = 1; i < word.length; i++) {
            if (word[i].toLowerCase() === word[i]) {
                check = true;
            } else {
                return false;
            }
        }
        return check;
    }
    return true;
};



//by community 
const detectCapitalUse = (word) => {
    return (word === word.toUpperCase() ||
        word === word.toLowerCase() ||
        word === word[0].toUpperCase() + word.slice(1).toLowerCase())
};


c(detectCapitalUse("USA"));
c(detectCapitalUse("FlaG"));
c(detectCapitalUse("sdfJ"));
c(detectCapitalUse("dlskfjsldf"));
c(detectCapitalUse("Leetcode"));
c(detectCapitalUse("G"));
c(detectCapitalUse("FFFFFFFFFFFFFFFFFFFFf"))
c(detectCapitalUse("EEJIHEHEFIEFBBBBaefanfnawjfbawebf"))

c(detectCapitalUse("Ca"))
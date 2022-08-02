const c = console.log.bind(console);

var fullJustify = function(words, maxWidth) {
    let sentenceWords = [];
    let resArray = [];
    let sentence = " ";
    let i = 0;
    let finalArray = [];
    while (i < words.length) {
        if (sentence.length < maxWidth) {
            sentenceWords.push(words[i]);
            sentence = concatWords(sentenceWords);
            i++;
            c("sldfjsl;ajdf");

        }
        if (sentence.length > maxWidth) {
            i--;
            c('fuck')
            sentenceWords.splice(-1);
            // c(sentenceWords)
            sentence = concatWords(sentenceWords);
            resArray.push(sentenceWords);
            sentenceWords = [];
            sentence = " ";

        }
        // c(i);
    }
    let resWordcounter = 0;
    resArray.forEach((item) => {
        item.forEach((item) => {
            // c(item);
            resWordcounter++;
        });
    });

    resArray.push(words.splice(-(words.length - resWordcounter)));
    for (i of resArray) {
        let numOfSpace = i.length - 1;
        // c("numOfSpace :" + numOfSpace);
        let extraSpaceNeeded = maxWidth - concatWords(i).length;
        // c("extraSpaceNeeded :" + extraSpaceNeeded);
        // c(concatWords(i, extraSpaceNeeded, numOfSpace).length);
        let _resSentence = addExtraSpaces(i, extraSpaceNeeded, numOfSpace);
        finalArray.push(_resSentence);
    }

    return finalArray;


    // return resWordcounter;
};

const addExtraSpaces = (arr, extraSpace = null, numOfSpace = null) => {
    let sentence = "";
    let spaceCount = " ";

    // for (let i of arr) {
    //     if (extraSpace && numOfSpace) {
    //         let whileIteration = Math.floor(extraSpace / numOfSpace);
    //         // c(whileIteration);
    //         // c("whileIteration :" + whileIteration);
    //         let i = 0;
    //         while (i < whileIteration) {
    //             spaceCount += " ";
    //             i++;
    //         }
    //     }
    // }
    if (extraSpace && numOfSpace) {
        let whileIteration = Math.floor(extraSpace / numOfSpace);
        // c(whileIteration);
        // c("whileIteration :" + whileIteration);
        let i = 0;
        while (i < whileIteration) {
            spaceCount += " ";
            i++;
        }
    }


    for (let i in arr) {
        if (i == arr.length - 1) {
            sentence += arr[i];



            if (numOfSpace == 0) {
                let j = 0;
                while (j < extraSpace) {
                    sentence += " ";
                    j++;
                }

            }
            c("sentence Length :" + arr[i] + ' ' + sentence.length);
            return sentence;
        }
        sentence += arr[i] + spaceCount;
    }

    return sentence;
};
const concatWords = (arr) => {
    let sentence = "";
    c("wassup");
    for (let i in arr) {
        if (i == arr.length - 1) {
            sentence += arr[i];

            return sentence;
        }

        sentence += arr[i] + " ";
    }
    return sentence;

};

// c(fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16));
c(
    fullJustify(
        ["This", "is", "an", "example", "of", "text", "justification."],
        16
    )
);

// c(fullJustify(["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain", "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"], 20));
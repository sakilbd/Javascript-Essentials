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
        }
        if (sentence.length > maxWidth) {
            i--;
            sentenceWords.splice(-1);
            // c(sentenceWords)
            sentence = concatWords(sentenceWords);
            resArray.push(sentenceWords);
            sentenceWords = [];
            sentence = " ";
        }
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
        // c(numOfSpace)
        let extraSpaceNeeded = maxWidth - concatWords(i).length;

        // c(concatWords(i, extraSpaceNeeded, numOfSpace).length);
        let _resSentence = concatWords(i, extraSpaceNeeded, numOfSpace);
        finalArray.push(_resSentence)
    }

    return finalArray;
    // return resArray;

    // return resWordcounter;
};

const concatWords = (arr, extraSpace = null, numOfSpace = null) => {;
    let sentence = "";
    let spaceCount = ' ';
    if (extraSpace && numOfSpace) {
        let whileIteration = Math.floor(extraSpace / numOfSpace);
        // c(whileIteration);
        c("whileIteration :" + whileIteration);
        let i = 0
        while (i < whileIteration) {
            spaceCount += ' ';
            i++;
        }
    }


    for (let i in arr) {
        if (i == arr.length - 1) {
            sentence += arr[i];
            return sentence;
        }
        sentence += arr[i] + spaceCount;
    }
    c("singleSetntenceLength :" + sentence.length)
    return sentence;
};
const lineOfWords = (arr) => {

}


// c(fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16));
c(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
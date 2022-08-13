const c = console.log.bind(console);


//done by me but got tle after around 140 test cases.
// var findSubstring = function(s, words) {
//     const p = permutations(words);
//     // c(p);
//     let concatArray = [];
//     let concat = "";
//     let finalResultIndex = [];
//     p.forEach((item) => {
//         for (let i = 0; i < item.length; i++) {
//             concat = concat + item[i];
//         }
//         // item.forEach((elem) => {
//         //     concat = concat + elem;
//         // });

//         concatArray.push(concat);
//         concat = "";
//     });
//     // return concatArray;
//     const findStringfunction = findString(s);
//     concatArray.forEach((item) => {
//         // c(item);
//         // c(findString(s, item, words[0].length));
//         finalResultIndex.push(findStringfunction(item));
//     });
//     // c(findString(s, concatArray, words[0].length));
//     // return finalResultIndex;
//     return sortFinalResult(finalResultIndex);
// };

// function findString(string) {
//     //wordLength is not necessary
//     // return subString;
//     // c("inside findString");
//     let subStringIndex = [];
//     let splitedString = string.split("");
//     // c(splitedString);

//     return function c(subString) {
//         let concatSubString = "";

//         for (let i = 0; i < splitedString.length; i++) {
//             //i= i +wordLength used insted of i++ and also passed some test cases
//             for (let j = i; j < subString.length + i; j++) {
//                 concatSubString = concatSubString + string[j];
//             }
//             // c(concatSubString);
//             if (concatSubString == subString) {
//                 subStringIndex.push(i);
//             }
//             concatSubString = "";
//         }
//         return subStringIndex;
//     }
// }

// function sortFinalResult(result) {
//     const resultToCalcualte = [...new Set(result)];
//     let resultArray = [];
//     resultToCalcualte.forEach((item) => {
//         item.forEach((resultitem) => {
//             resultitem != null ? resultArray.push(resultitem) : "";
//         });
//     });
//     const sortedResult = resultArray.sort((a, b) => a - b);
//     return [...new Set(sortedResult)];
// }

// const permutations = (arr) => {
//     if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
//     return arr.reduce(
//         (acc, item, i) =>
//         acc.concat(
//             permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map((val) => [
//                 item,
//                 ...val,
//             ])
//         ), []
//     );
// };





//got from community
var findSubstring = function(s, words) {
    let stringLength = words[0].length;
    let totalLength = words.join('').length
    let result = [];
    let originalMap = new Map();
    let initialLetters = new Set();

    for (let word of words) {
        initialLetters.add(word[0]);
        let count = originalMap.get(word) || 0;
        count++
        originalMap.set(word, count);
    }

    let wordsLength = originalMap.size

    for (let index in s) {
        if (initialLetters.has(s[index]) === false) continue
        if (originalMap.has(s.slice(index, +index + stringLength)) === false) continue

        let check = s.slice(index, totalLength + +index);
        let countMatch = wordsLength;
        let map = new Map(originalMap);
        let _words = check.match(new RegExp('.{1,' + stringLength + '}', 'g'))

        for (let _word of _words) {
            if (map.has(_word)) {
                let count = map.get(_word) - 1;
                map.set(_word, count);
                if (count === 0) {
                    countMatch--;
                }
            }
        }

        if (countMatch === 0) {
            result.push(index)
        }

    }
    return result
};







c(
    findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake", [
        "fooo",
        "barr",
        "wing",
        "ding",
        "wing",
    ])
);
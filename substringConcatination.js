const c = console.log.bind(console);
// https://leetcode.com/problems/substring-with-concatenation-of-all-words/submissions/


// works with all test cases but got std::bad allocation error after 4 test cases
var findSubstring = function(s, words) {
    const p = permutations(words);
    // c(p);
    let concatArray = [];
    let concat = "";
    let finalResultIndex = [];
    p.forEach((item) => {
        for (let i = 0; i < item.length; i++) {
            concat = concat + item[i];
        }
        // item.forEach((elem) => {
        //     concat = concat + elem;
        // });

        concatArray.push(concat);
        concat = "";
    });
    concatArray.forEach((item) => {
        // c(item);
        // c(findString(s, item, words[0].length));
        finalResultIndex.push(findString(s, item, words[0].length));
    });
    // c(findString(s, concatArray, words[0].length));
    return sortFinalResult(finalResultIndex);
};

function findString(string, subString, wordLength) {
    //wordLength is not necessary
    // return subString;
    let subStringIndex = [];
    let splitedString = string.split("");
    // c(splitedString);
    let concatSubString = "";
    for (let i = 0; i < splitedString.length; i++) {
        for (let j = i; j < subString.length + i; j++) {
            concatSubString = concatSubString + string[j];
        }
        // c(concatSubString);
        if (concatSubString == subString) {
            subStringIndex.push(i);
        }
        concatSubString = "";
    }
    return subStringIndex;
}

function sortFinalResult(result) {
    // return result;
    let resultArray = [];
    result.forEach((item) => {
        item.forEach((resultitem) => {
            resultitem != null ? resultArray.push(resultitem) : "";
        });
    });
    const sortedResult = resultArray.sort((a, b) => a - b);
    return [...new Set(sortedResult)];
}

const permutations = (arr) => {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce(
        (acc, item, i) =>
        acc.concat(
            permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map((val) => [
                item,
                ...val,
            ])
        ), []
    );
};

// c(findSubstring("barfoothefoobarman", ["foo", "bar"]));
// c(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]));
// c(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]))

// c(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"]));
// c(
//     findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake", [
//         "fooo",
//         "barr",
//         "wing",
//         "ding",
//         "wing",
//     ])
// );

c(
    findSubstring(
        "bcabbcaabbccacacbabccacaababcbb", [
            ("c", "b", "a", "c", "a", "a", "a", "b", "c")
        ]
    )
);
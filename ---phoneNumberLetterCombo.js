// https://leetcode.com/problems/letter-combinations-of-a-phone-number/


//first two test cases passed 
const c = console.log.bind(console);

var letterCombinations = function(digits) {
    const letters = {
        0: " ",
        1: "00",
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
        "*": "+",
    };

    if (digits.length == 1) {
        return letters[digits].split('');
    }
    const splitedDigits = digits.split("");
    const aForDigits = [];

    splitedDigits.forEach((item) => {
        aForDigits.push(letters[item]);
    });
    let singleAlphabates = [];
    aForDigits.forEach((item) => {
        item.split("").forEach((alpha) => {
            singleAlphabates.push(alpha);
        });
    });
    const result = [
        ...new Set(getSubArrays(singleAlphabates, digits.length)),
    ].splice(1);

    const twoSortedAlphas = aForDigits.map((item) => {
        return [...new Set(getSubArrays(item, 2))].slice(1);
    });

    let sortedAlphabateGroup = [];
    twoSortedAlphas.forEach((item) => {
        item.forEach((alphaGroup) => {
            sortedAlphabateGroup.push(alphaGroup.sort((a, b) => a - b));
        });
        // c(item);
    });
    // return sortedAlphabateGroup.map((item) => {
    //     return item.sort((a, b) => a - b);
    // });
    // return sortedAlphabateGroup;
    let resultObject = {};

    sortedAlphabateGroup.forEach((item) => {
        resultObject[item] = 0;
    });
    // return result;
    result.forEach((item) => {
        resultObject[item]++;
    });
    let finalArray = [];
    Object.keys(resultObject).map((item) => {
        !resultObject[item] == true ? finalArray.push(item) : ""; //returns NaN values which are the final Results
    });

    return finalArray.map((item) => {
        let ccat = "";
        // return item;
        item.split(",").forEach((d) => {
            ccat = ccat + d;
        });
        return ccat;
    });
    // aForDigits.forEach((item) => {
    //     item.split("").forEach((alpha) => {
    //         result.forEach((reuslt) => {
    //             result.forEach((alphaGroup) => {
    //                 c(item);
    //             });
    //         });
    //     });
    // });
};

function getSubArrays(arr, length) {
    var len = arr.length,
        subs = Array(Math.pow(2, len)).fill(0);
    // return subs;
    return subs
        .map((_, i) => {
            var j = -1,
                k = i,
                res = [];
            while (++j < len) {
                k & 1 && res.push(arr[j]); //k & 1  means k % 2
                k = k >> 1; // k>>1 means k/2
            }
            return res.length == length ? res : "";
        })
        .slice(1); //slice(1) removes the first array form list which is empty here
}

c(letterCombinations("22"));
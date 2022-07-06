// https://leetcode.com/problems/find-the-difference/submissions/
const c = console.log.bind(console);

var findTheDifference = function(s, t) {
    if (s == "") {
        return t;
    }
    const arr = s.split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    const arrTwo = t.split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    // return arr;
    let i = 0;
    let j = 0;
    for (i = 0; i < arrTwo.length; i++) {
        for (j = 0; j < arr; j++) {
            if (arrTwo[i] == arr[j]) {
                break;
            }
        }
        break;
    }
    arr.splice(j, 1);
    arrTwo.splice(i, 1);
    const newArr = arr.join("").split(",").join();
    const newArrTwo = arrTwo.join("").split(",").join();

    if (newArr == "") {
        return newArrTwo;
    } else {}

    return findTheDifference(newArr, newArrTwo);
};

c(findTheDifference("ae", "aae"));
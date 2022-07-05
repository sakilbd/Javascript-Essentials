const words = ["leetcoder", "leetcode", "od", "hamlet", "am"];

//lengthy way
const sortedWord = words.sort((a, b) => a - b); //this sort works only for numbers & for string workis as assci maybe

//short way 
const sortedShortMethod = words.sort((a, b) => a.length - b.length);


//and this is the inside of sorting algorithm
sortedWord.sort(function(a, b) {
    /* let's convert the strings to lowercase
    to ensure the comparison works */
    a = a.length;
    b = b.length;

    if (a < b) return -1; // a will come before b
    if (b < a) return 1; // b will come before a

    return 0;
});

console.log(sortedWord);
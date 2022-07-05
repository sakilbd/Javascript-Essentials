const c = console.log.bind(console);
// https://leetcode.com/problems/string-matching-in-an-array/

//solution by me
// var stringMatching = function(words) {

//     //  words[0].split('').reverse().join('');
//     const sortedWord = words.sort((a, b) => a - b);
//     sortedWord.sort(function(a, b) {
//         /* let's convert the strings to lowercase
//         to ensure the comparison works */
//         a = a.length;
//         b = b.length;

//         if (a < b) return -1; // a will come before b
//         if (b < a) return 1; // b will come before a

//         return 0;
//     });
//     // return sortedWord;
//     const results = []
//     const sm = checkMatch(words, sortedWord);
//     const finalResult = [];
//     sortedWord.forEach((item, i) => {
//             // c(i);
//             // c(sortedWord)
//             // c(item);
//             // finalResult.push(sm(item));

//             finalResult.push(sm(item));

//         })
//         // return sm;

//     const fuckYeah = [...new Set(finalResult)].sort();
//     fuckYeah.shift();
//     return fuckYeah;
// };

// var checkMatch = (words, sortedWords) => {
//     const wordList = words;
//     const sortedWordList = [...sortedWords];
//     // c("visited");

//     return (specificword) => {
//         // c(sortedWordList);
//         // c(specificword);
//         // const set = new Set();
//         let result = '';
//         for (let i = 1; i < sortedWordList.length; i++) {
//             if (sortedWordList[i].includes(specificword) == true) {
//                 result = specificword;
//                 // c(result);
//             }
//             // c(specificword);
//             // c(sortedWordList);
//             // c(specificword + "" + i);

//         }
//         // c(result);
//         // c(sortedWordList);
//         sortedWordList.splice(0, 1);


//         return result;


//     }
// }

//solution by me 
// optimal Solution 
var stringMatching = function(words, ans = new Set()) {
    words.sort((a, b) => a.length - b.length);
    for (let x = 0; x < words.length - 1; x++) {
        for (let y = x + 1; y < words.length; y++) {
            if (words[y].indexOf(words[x]) > -1) ans.add(words[x]);
        }
    }
    return [...ans];
};

// super concise code DAMN!!!!!!!!!!!
// const stringMatching = words =>
//     words.filter(n => words.some(h => h !== n && h.includes(n)));

//super concise code DAMN!!!!!!

console.time();
// c(stringMatching(["mass", "as", "hero", "superhero"]));
c(stringMatching(["leetcoder", "leetcode", "od", "hamlet", "am"]))
console.timeEnd();
// https://www.hackerrank.com/challenges/picking-numbers/problem?isFullScreen=true

// accepted code by me
const c = console.log.bind(console);

// function pickingNumbers(a) {
//     const numbersCount = {};
//     // let sorted = a.sort((a, b) => (a - b))
//     a.forEach((item) => {
//         numbersCount[item] = 0;
//     });

//     a.forEach((item) => {
//         numbersCount[item] = numbersCount[item] + 1;
//     });

//     let finalArray = [];
//     let highestOccurance = 0;
//     Object.keys(numbersCount).map((item) => {
//         //  numbersCount[item];
//         if (highestOccurance < numbersCount[item]) {
//             highestOccurance = numbersCount[item];
//         }
//         // c(!numbersCount[parseInt(item) + 1]);
//         if (!numbersCount[parseInt(item) + 1] == false) {
//             finalArray.push(counter(item, parseInt(item) + 1, numbersCount));
//             // c("false");
//         }
//         // c(numbersCount[item]);
//     });

//     let result = finalArray.sort((a, b) => a - b);

//     return result[result.length - 1] > highestOccurance ?
//         result[result.length - 1] :
//         highestOccurance;
//     // return highestOccurance;
// }

// function counter(a, b, obj) {
//     return parseInt(obj[b]) + parseInt(obj[a]);
// }

function pickingNumbers(a) {
    let maxcount = 0;
    [...new Set(a)].forEach(x => {
        maxcount = Math.max(maxcount,
            a.reduce((c, v) => c += (v === x || v === x + 1), 0));
    })
    return maxcount;
}
c(pickingNumbers([6, 6, 6, 6, 6, 6, 1, 2, 3, 3, 3, 3, 3, 3]));
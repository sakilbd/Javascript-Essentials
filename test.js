https: //www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem?isFullScreen=true

    const c = console.log.bind(console);

// function beautifulDays(i, j, k) {
//     let days = [];
//     for (let m = i; m <= j; m++) {
//         days.push(m);
//     }
//     let reverse = [];
//     days.forEach(item => {
//         let itemLength = item.toString().length;
//         // for (let m = 0; m < itemLength; m++) {
//         let concat = '';
//         for (let n = itemLength - 1; n >= 0; n--) {
//             concat = concat.concat(item.toString()[n]);
//         }
//         reverse.push(parseInt(concat));
//         // }
//     });
//     let resultDaysCount = 0;
//     days.forEach((item, i) => {
//         Math.abs(item - reverse[i]) % k == 0 ? resultDaysCount++ : '';
//     })



//     return resultDaysCount;
// }



//optimized solution 
const reversedNum = num => num.toString().split('').reverse().join('');

function beautifulDays(i, j, k) {
    let count = 0;

    for (let s = i; s < j + 1; s++) {
        if (((s - reversedNum(s)) / k) % 1 === 0) {
            count++
        }
    }
    return count
}


c(beautifulDays(20, 23, 6))
const c = console.log.bind(console);
// https://www.hackerrank.com/challenges/reduced-string/problem?isFullScreen=true


//with some test case failed 
// function superReducedString(s) {
//     const splitedString = s.split('');
//     const distinctItem = [...new Set(splitedString)];
//     // return distinctItem;
//     const map = new Map();
//     for (let x of splitedString) {
//         if (map.has(x)) {
//             map.set(x, map.get(x) + 1);
//         } else {
//             map.set(x, 1)
//         }
//     }
//     // return map;
//     const finalArray = [];
//     distinctItem.forEach(item => {
//         if (map.get(item) == 1) {
//             finalArray.push(item);
//         } else if (map.get(item) % 2 == 1) {
//             finalArray.push(item);
//         }
//     })
//     const result = finalArray.sort((a, b) => a - b).join('');
//     return result == '' ? "Empty String" : result;
// }


//done by me refered by discussion solution 
function superReducedString(s) {
    const splitedArray = s.split('');
    for (let i = 0; i < splitedArray.length; i++) {
        // c(splitedArray[i]);
        // c(splitedArray[i + 1]);
        if (splitedArray[i] == splitedArray[i + 1]) {
            splitedArray.splice(i, 2);
            return superReducedString(splitedArray.join(''));
        }
    }
    return splitedArray == "" ? "Empty String" : splitedArray.join('');

}


c(superReducedString("aaab"))
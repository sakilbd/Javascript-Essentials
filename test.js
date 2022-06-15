// https://www.hackerrank.com/challenges/picking-numbers/problem?isFullScreen=true
const c = console.log.bind(console);


//not solved
function pickingNumbers(a) {
    var arr = [...a];
    const count = {};
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]] = i;
    }

    const countLength = Object.keys(count).length;

    const distinctElements = Object.keys(count).map((key) => {
        count[key] = 0;
        return key;
    });
    for (let k = 0; k < distinctElements.length; k++) {
        for (let j = 0; j < arr.length; j++) {
            if (parseInt(distinctElements[k]) == parseInt(arr[j])) {
                count[distinctElements[k]]++;
            }
        }
    }
    let objArray = [];
    Object.keys(count).map((key, i) => {
        objArray.push(key);
    });
    c(objArray);
    let finalArray = [];
    for (let i of objArray) {
        for (let j = 1; j < objArray.length; j++) {
            if (Math.abs(i - objArray[j]) <= 0) {
                finalArray.push(i);
                finalArray.push(objArray[j]);
            } else {
                objArray.splice(1);
                c(objArray);
            }
        }
    }
    return finalArray;
}


//optimal solution 
// function pickingNumbers(a) {
//     let maxcount = 0;

//     [...new Set(a)].forEach(x => {
//         maxcount = Math.max(maxcount,
//             a.reduce((c, v) => c += (v === x || v === x + 1), 0));
//     })
//     return maxcount;
// }

c(pickingNumbers([4, 6, 5, 3, 3, 1]));
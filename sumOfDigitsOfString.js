const c = console.log.bind(console);
// https://leetcode.com/problems/sum-of-digits-of-string-after-convert/

// solution by me which accepted 
var getLucky = function(s, k) {
    const splited = s.split("");
    const charCodeArray = [];
    splited.forEach((item) => {
        charCodeArray.push(item.charCodeAt(0) - 96);
    });
    // c(charCodeArray);
    const charCodeIndivisualDigit = []
    charCodeArray.forEach(item => {
            const q = item.toString().split('');
            q.forEach((itemItem) => {
                charCodeIndivisualDigit.push(itemItem);
            });
        })
        // c(charCodeIndivisualDigit);
    const addition = charCodeIndivisualDigit.reduce((a, b) => parseInt(a) + parseInt(b));
    let result = addition;
    // c(result);
    let finalResult = result;
    if (k == 1) {
        return finalResult;
    } else {
        for (let i = 1; i < k; i++) {
            finalResult = sumReduce(finalResult);
            // c(finalResult);
            if (i == k - 1) { //i == k-1 means operation goes for k times
                return finalResult;
            }
        }
    }
};

function sumReduce(num) {
    var numSplit = num.toString().split("");
    // c(numSplit);
    if (numSplit.length == 1) return num;
    return numSplit.reduce((a, b) => parseInt(a) + parseInt(b));
}

//optimil solution 

// var getLucky = function(s, k) {
//     let alpha = '-abcdefghijklmnopqrstuvwxyz';
//     let res = ''
//     for (let c of s) {
//         res += alpha.indexOf(c)
//     }

//     while (k--) {
//         let sum = 0;
//         for (let c of res) {
//             sum += +c;
//         }
//         res = sum.toString();
//     }
//     return res;

// };

c(getLucky("iiii", 1));
c(getLucky("hvmhoasabaymnmsd", 1));
c(getLucky("vbyytoijnbgtyrjlsc", 2));
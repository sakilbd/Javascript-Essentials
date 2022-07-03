// https: //leetcode.com/problems/string-to-integer-atoi/submissions/
//lots of test cases  passed but still some to go
const c = console.log.bind(console);

//Accepted in leet code after some hidden test case failed
var myAtoi = function(s) {
    let splited = s.split(" ");
    let result = -1;

    let newArray = [...new Set(splited)];

    let i = 0;
    for (i = 0; i < newArray.length; i++) {
        if (newArray[i] == "") {
            !parseInt(newArray[i]) == false ?
                (result = newArray[i]) :
                (result = null);
        } else if (!parseInt(newArray[i]) == true) {
            return 0;
        }

        if (
            (result == null && !parseInt(newArray[i]) == false) ||
            (result == -1 && !parseInt(newArray[i]) == false)
        ) {
            result = newArray[i];
            break;
        } else {}
    }

    if (result == null) {
        return 0;
    } else {
        return recheck(result);
    }
};

const recheck = function(array) {
    const minRange = -2147483648;
    const maxRange = 2147483647;
    const output = [];
    const finalResult = array.split("");

    for (let i = 0; i < finalResult.length; i++) {
        const mergeSplit = output.reduce((a, b) => a + b, "");

        if ((finalResult[i] == "-" || finalResult[i] == "+") && i == 0) {
            output.push(finalResult[i]);
        } else if (parseInt(finalResult[i]) >= 0) {
            output.push(finalResult[i]);
        } else if (parseInt(finalResult[i]) == 0) {
            continue;
        } else if (!parseInt(finalResult[i]) == true) {
            break;
        }
    }
    const superFinal = [];
    if (output[0] == "+" || output[0] == "-") {
        superFinal.push(output[0]);
    }
    superFinal.push(output.reduce((a, b) => (a + b > 0 ? a + b : ""), ""));
    let fuckingResult = superFinal.reduce((a, b) => a + b);

    if (fuckingResult > maxRange) {
        return maxRange;
    } else if (parseInt(fuckingResult) < minRange) {
        return minRange;
    } else {
        return fuckingResult;
    }
};


//optimal solution from community 
// var myAtoi = function(s) {
//     let i = 0,
//         num = 0,
//         sign = 1,
//         max = 2**31 - 1,
//         min = 2**31 * -1;
//     s = s.trim();
//     if (s[i]=='-' || s[i]=='+') {
//         sign = s[i]=='-'?-1:1;
//         i++
//     }
//     while (s[i] && s[i].charCodeAt(0) - 48 >= 0 && s[i].charCodeAt(0) - 48 <= 9) {
//         num = num * 10 + (s[i].charCodeAt(0) - 48);
//         i ++
//     }
//     num = num * sign;
//     return num <= min ? min : num >= max ? max : num;
// };

c(myAtoi("1"));
c(myAtoi("        sfsadfsadf    -42"));
// c(myAtoi("   -115579378e25"));
c(myAtoi("-001200 with words"));
c(myAtoi("   -115579378e25"));
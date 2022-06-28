// https: //leetcode.com/problems/string-to-integer-atoi/submissions/
//lots of test cases  passed but still some to go
const c = console.log.bind(console);

var myAtoi = function(s) {
    let splited = s.split(" ");
    let result = -1;

    let newArray = [...new Set(splited)];
    // c(newArray);
    let i = 0;
    for (i = 0; i < newArray.length; i++) {
        if (newArray[i] == "") {
            !parseInt(newArray[i]) == false ? (result = newArray[i]) : (result = null);

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
    // return result;
    const minRange = -2147483648;
    const maxRange = 2147483647;
    const output = [];
    if (result > maxRange) {
        return maxRange;
    } else if (result < minRange) {
        return minRange;
    } else if (result == null) {
        return 0
    } else {
        const finalResult = result.split('');
        // c(finalResult);
        for (let i = 0; i < finalResult.length; i++) {
            // c(parseInt(finalResult[i]));
            // c(i);
            const mergeSplit = output.reduce(((a, b) => a + b), '');
            // c(mergeSplit);
            if ((finalResult[i] == '-' || finalResult[i] == '+') && i == 0) {
                output.push(finalResult[i]);
            } else if (parseInt(finalResult[i]) >= 0) {
                // c(finalResult[i]);

                // c(mergeSplit);
                // if (parseInt(mergeSplit) == "+" || parseInt(mergeSplit) == "-" || parseInt(mergeSplit) > 0) {
                //     output.push(finalResult[i]);
                // }
                output.push(finalResult[i]);
            } else if (parseInt(finalResult[i]) == 0) {
                continue;
            } else if ((!parseInt(finalResult[i]) == true)) {

                break;
            }
        }
    }
    const superFinal = []
    if (output[0] == "+" || output[0] == "-") {
        superFinal.push(output[0]);


    }
    superFinal.push(output.reduce(((a, b) => (a + b) > 0 ? a + b : ''), ''));
    let fuckingResult = superFinal.reduce((a, b) => a + b);

    if (fuckingResult > maxRange) {
        return maxRange;
    } else if (fuckingResult < minRange) {
        return minRange;
    } else {
        return fuckingResult;
    }
    // return output.reduce(((a, b) => (a + b) > 0 ? a + b : ''), '');
};

// var myAtoi = function(s) {
//     let splited = s.split(' ');
//     let result = 0;
//     [...new Set(splited)].forEach(item => {
//         !parseInt(item) == false ? result = item : '';
//     })
//     return result;
// };

// c(myAtoi("+1"));
c(myAtoi("        sfsadfsadf    -42"));

// c(myAtoi("-001200 with words"))
c(myAtoi("   -115579378e25"))
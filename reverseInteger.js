const c = console.log.bind(console);

var reverse = function(x) {
    const lowest = -2147483648;
    const highest = 2147483647;


    const num = x.toString().split("");
    let final = [];
    // let temp = 0;

    let i = 0;
    if (checkSign(x) == "negative") {
        final.push(num[i]);

        i = 1;
    } else {
        i = 0;
    }
    if (i == 1) {
        while (i < num.length) {
            let last = num.length - i;
            // c(i);
            // i++;
            // c(num[last])
            final.push(num[last]);
            i++;
        }
    } else if (i == 0) {
        while (i < num.length) {
            let last = num.length - i - 1;
            // c(i);
            // i++;
            // c(num[last])
            final.push(num[last]);
            i++;
        }
    }

    // const xy = final.split('');
    let finalInt = "";

    final.forEach((item) => {
        // c(item);

        finalInt = finalInt + item;
        // c(finalInt);
    });


    if (finalInt < lowest) {
        return 0
    } else if (finalInt > highest) {
        return 0
    } else {
        return finalInt;
    }
};

function checkSign(num) {
    return num > 0 ? "positive" : "negative";
}


// optimal solution 
// var reverse = function(x) {
//     const isNegative = x < 0;
//     const xStrArr = Math.abs(x).toString().split("");
//     const reversStr = xStrArr.reverse().join("");
//     const num = Number(reversStr);
//     if (isNegative && num > Math.pow(2, 31)) {
//         return 0;
//     }
//     if (!isNegative && num > Math.pow(2, 31) - 1) {
//         return 0;
//     }
//     return isNegative ? -num : num;
// };
c(reverse(1534236469));
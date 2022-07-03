const c = console.log.bind(console);
// https://leetcode.com/problems/happy-number/solution/
// solution by me with time complexity error 
// let count = 0;
// var isHappy = function(n) {
//     count++;
//     c(count);
//     var happyNumber = n;
//     var iteration = 1000;
//     // let x = 0;
//     // c(x);
//     if (n == 1) {
//         return true;
//     }
//     while (count < iteration) {
//         let numToString = happyNumber.toString();
//         let addition = 0;

//         for (let i = 0; i < numToString.length; i++) {
//             addition = addition + numToString[i] * numToString[i];
//             // c(addition)
//         }
//         // c(addition);

//         // addition = 0;

//         if (addition == 1) {
//             return true;
//             // break;
//         }
//         // x++;
//         try {
//             return isHappy(addition) == true ? true : false;
//         } catch (err) {
//             return false;
//         }

//     }
// };

// optimal solutoin 
function isHappy(n) {
    let slow = n;
    let fast = n;
    while (true) {
        slow = sq(slow);
        fast = sq(sq(fast));
        if (slow === fast) break;
    }

    return slow === 1;
}

function sq(num) {
    let sum = 0;
    while (num > 0) {
        let d = num % 10;
        // c(d);
        sum += d * d;
        num = Math.floor(num / 10);
    }
    return sum;
}


c(isHappy(116));
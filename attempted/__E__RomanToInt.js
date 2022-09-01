const c = console.log.bind(console);
// https://leetcode.com/problems/roman-to-integer/
var romanToInt = function(s) {
    let dict = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    if (s.length == 1) {
        return dict[s]
    }
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        // c(i)

        let j = parseInt(i) + 1;
        let alpha = s[i];

        if (s[j]) {
            if (dict[s[i]] < dict[s[j]]) {
                let calTwoDigitValue = dict[s[j]] - dict[s[i]];
                count += calTwoDigitValue;
                i++;

            } else {
                // c(i)
                count += dict[s[i]];
            }
        }
    }
    if (dict[s[s.length - 1]] <= dict[s[s.length - 2]]) {
        count += dict[s[s.length - 1]];


    }
    return count;
};


// optimized solution 
// const romanToInt = (s) => {
//     const symbols = {
//       I: 1,
//       V: 5,
//       X: 10,
//       L: 50,
//       C: 100,
//       D: 500,
//       M: 1000,
//     };

//     let result = 0;
//     for (let index = 0; index < s.length; index++) {
//       s[index + 1] && symbols[s[index]] < symbols[s[index + 1]]
//         ? (result -= symbols[s[index]])
//         : (result += symbols[s[index]]);
//     }

//     return result;
//   };

c(romanToInt("LVIII"));

c(romanToInt("MCMXCIV"));

c(romanToInt("CCCI"))
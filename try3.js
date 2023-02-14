// https://leetcode.com/problems/basic-calculator-ii/description/

const c = console.log.bind(console);

// var calculate = function(s) {
//     if (s == 0) {
//         return 0;
//     }
//     let numStack = [];
//     let secondStack = [];
//     const length = s.length;
//     let num = "";
//     for (let i = length - 1; i >= 0; i--) {
//         if (s[i] == "0") {
//             num += 0;
//             i == 0 ? numStack.push(parseInt(num.split("").reverse().join(""))) : "";
//         } else {
//             if (parseInt(s[i])) {
//                 num += s[i];
//                 i == 0 ? numStack.push(parseInt(num.split("").reverse().join(""))) : "";
//             } else {
//                 if (s[i] != " ") {
//                     if (num.length > 0) {
//                         numStack.push(parseInt(num.split("").reverse().join("")));
//                         num = "";
//                     }

//                     numStack.push(parseInt(s[i]) ? parseInt(s[i]) : s[i]);
//                 } else if (s[i] == " ") {
//                     if (num.length > 0) {
//                         numStack.push(parseInt(num.split("").reverse().join("")));
//                         num = "";
//                     }
//                 }
//             }
//         }
//     }
//     // return numStack;
//     let i = 0;
//     let numStackLength = numStack.length;
//     while (i < numStackLength) {
//         let popped = numStack.pop();

//         if (popped === "*") {
//             let calc = Math.floor(eval(numStack.pop() * secondStack.pop()));
//             secondStack.push(calc);
//         } else if (popped === "/") {
//             let calc = Math.floor(eval(secondStack.pop() / numStack.pop()));

//             secondStack.push(calc);
//         } else {
//             secondStack.push(popped);
//         }
//         i++;
//     }
//     return eval(secondStack.join(""));
// };
// c(Math.floor(eval(0 / 3)))

// c(parseInt(q.split('').reverse().join('')))

// c(calculate("5+2*3"));
// // c(calculate(" 3/2 "));
// c(calculate(" 3+5 / 2 "));
// c(calculate("3+2*2"));

// c(calculate("14/3-2")); //2

// c(calculate("1*2-3/4+5*6-7*8+9/10"));

// c(calculate("0"));
// c(calculate("0*0"));

const calculate = (s) => {
    // return eval(s)
    if (s == 0) {
        return 0;
    }
    let numStack = [];
    let secondStack = [];
    let symbols = []
    const length = s.length;
    let num = "";
    const plainStringCalculate = (arr) => {
        let val = 0;
        let symbol = "";
        arr.every((a) => {
            if (a === '+') {
                symbol = '+'
                return true
            } else if (a === "-") {
                symbol = '-'
                return true;
            } else {
                if (symbol == '+') {
                    val = parseInt(val) + parseInt(a)
                } else if (symbol == '-') {

                    val = parseInt(val) - parseInt(a)


                } else {
                    val = parseInt(a);
                }

                return true
            }

        })
        return val;
    }
    let nonSyombleStringCheck = s.split('').some(a => {

        return a == "("
    })



    // if (!nonSyombleStringCheck) {
    //     let arr = s.split('').filter(item => {
    //         return item != " "
    //     });
    //     return plainStringCalculate(arr)
    // }

    // for (let i = length - 1; i >= 0; i--) {
    for (let i = 0; i < length; i++) {
        if (s[i] == "0") {
            num += 0;
            i == 0 ? numStack.push(parseInt(num.split("").join(""))) : "";
        } else {
            if (parseInt(s[i])) {
                num += s[i];
                i == 0 ? numStack.push(parseInt(num.split("").join(""))) : "";
            } else {
                if (s[i] != " ") {
                    if (num.length > 0) {
                        numStack.push(parseInt(num.split("").join("")));
                        num = "";
                    }

                    numStack.push(parseInt(s[i]) ? parseInt(s[i]) : (s[i]));
                } else if (s[i] == " ") {
                    if (num.length > 0) {
                        numStack.push(parseInt(num.split("").join("")));
                        num = "";
                    }
                }
            }
        }
    }

    // const calc = (a, b, operator) => {
    //     if (operator == "+") {
    //         return a + b;
    //     } else {
    //         return a - b;
    //     }
    // }

    // let numsOnly = []
    // for (let i of numStack) {
    //     i == '+' || i == "-" ? symbols.push(i) : numsOnly.push(i)

    // }
    // return numStack



    return numStack
        // return plainStringCalculate(numStack)
    if (!nonSyombleStringCheck) {
        return plainStringCalculate(numStack)
    }

    // return numStack;
    let i = 0;
    let numStackLength = numStack.length;

    let calculatableString = [];

    let res = []
    while (i < numStackLength) {
        let popped = numStack.pop();

        if (popped === "(") {
            while (true) {
                let secondPopped = secondStack.pop()
                if (secondPopped == ")") {
                    secondStack.push(plainStringCalculate(calculatableString))

                    // c(calculatableString)
                    // c(plainStringCalculate(calculatableString))

                    calculatableString = []

                    break;
                } else {
                    calculatableString.push(secondPopped)
                }

            }


        } else {
            secondStack.push(popped);
        }

        i++;
    }
    return plainStringCalculate(secondStack)
    return secondStack;
    // return secondStack
    // return val;




    // let number = 0;
    // for (let i in numStack) {
    //     i == "+" ? number + i : i == '-' ? number - i : ''
    // }
    return numStack;
};

// c(calculate("(1+(2-1+2)-3)+(6+80)"));
// c(calculate(" 2-1 + 21 "));


// c(calculate(" 2-1 + 2 "))

c(calculate("1 + 1"))
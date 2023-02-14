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
    if (s == 0) {
        return 0;
    }
    let numStack = [];
    let secondStack = [];
    let symbols = []
    const length = s.length;
    let num = "";
    for (let i = length - 1; i >= 0; i--) {
        if (s[i] == "0") {
            num += 0;
            i == 0 ? numStack.push(parseInt(num.split("").reverse().join(""))) : "";
        } else {
            if (parseInt(s[i])) {
                num += s[i];
                i == 0 ? numStack.push(parseInt(num.split("").reverse().join(""))) : "";
            } else {
                if (s[i] != " ") {
                    if (num.length > 0) {
                        numStack.push(parseInt(num.split("").reverse().join("")));
                        num = "";
                    }

                    numStack.push(parseInt(s[i]) ? parseInt(s[i]) : (s[i]));
                } else if (s[i] == " ") {
                    if (num.length > 0) {
                        numStack.push(parseInt(num.split("").reverse().join("")));
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


    let i = 0;
    let numStackLength = numStack.length;

    let calculatableString = ''
    while (i < numStackLength) {
        let popped = numStack.pop();

        if (popped === ")") {
            while (true) {
                let secondPopped = secondStack.pop()
                if (secondPopped == "(") {

                }
                calculatableString += secondPopped;
            }


        } else if (popped === "/") {

        } else {
            secondStack.push(popped);
        }
        i++;
    }





    const plainStringCalculate = (arr) => {
        let val = '';
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
                    val = val + a
                } else if (symbol == '-') {
                    val = val - a
                } else {
                    val = a;
                }

                return true
            }

        })
        return val;
    }


    return val;




    // let number = 0;
    // for (let i in numStack) {
    //     i == "+" ? number + i : i == '-' ? number - i : ''
    // }
    return numStack;
};

c(calculate("(1+(4+5+2)-3)+(6+8)"));
c(calculate(" 2-1 + 21 "));
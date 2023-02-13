// https://leetcode.com/problems/basic-calculator-ii/description/


const c = console.log.bind(console);

var calculate = function(s) {
    if (s == 0) {
        return 0
    }
    let numStack = [];
    let secondStack = [];
    const length = s.length;
    let num = "";
    for (let i = length - 1; i >= 0; i--) {
        if (s[i] == "0") {
            num += 0
            i == 0 ? numStack.push(parseInt(num.split("").reverse().join(""))) : ''
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

                    numStack.push(parseInt(s[i]) ? parseInt(s[i]) : s[i]);
                } else if (s[i] == " ") {
                    if (num.length > 0) {
                        numStack.push(parseInt(num.split("").reverse().join("")));
                        num = "";
                    }
                }
            }
        }

    }

    let i = 0;
    let numStackLength = numStack.length;
    while (i < numStackLength) {
        let popped = numStack.pop();

        if (popped === "*") {
            let calc = Math.floor(eval(numStack.pop() * secondStack.pop()));
            secondStack.push(calc);
        } else if (popped === "/") {
            let calc = Math.floor(eval(secondStack.pop() / numStack.pop()));


            secondStack.push(calc);
        } else {
            secondStack.push(popped);
        }
        i++;
    }
    return eval(secondStack.join(""));
};
// c(Math.floor(eval(0 / 3)))



// c(parseInt(q.split('').reverse().join('')))

c(calculate("5+2*3"));
c(calculate(" 3/2 "));
c(calculate(" 3+5 / 2 "));
c(calculate("3+2*2"));

c(calculate("14/3-2")); //2

c(calculate("1*2-3/4+5*6-7*8+9/10"));

c(calculate("0"))
c(calculate("0*0"))
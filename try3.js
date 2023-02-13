const c = console.log.bind(console);

var calculate = function(s) {

    let numStack = []
    let secondStack = []
    let _mul_divCount = 0;
    const length = s.length;
    let num = ''
    for (let i = length - 1; i >= 0; i--) {

        if (parseInt(s[i])) {
            num += s[i].toString();
            i == 0 ? numStack.push(parseInt(num.split('').reverse().join(''))) : ''
        } else {

            if (s[i] != ' ') {

                c(num)
                numStack.push((num.split('').reverse().join('')));
                num = ''


                // numStack.push(parseInt(s[i]) ? parseInt(s[i]) : s[i])
            } else if (s[i] == ' ') {

                if (num.length > 0) {

                    numStack.push(parseInt(num.split('').reverse().join('')));
                    num = ''
                }

            }
        }

        // num += s[i]
        // if (s[i] != ' ') {
        //     numStack.push(parseInt(s[i]) ? parseInt(s[i]) : s[i])
        // }

    }

    let i = 0
    let numStackLength = numStack.length;

    return numStack
    while (i < numStackLength) {
        let popped = numStack.pop();


        if (popped === "*") {



            let calc = Math.floor(eval(numStack.pop() * secondStack.pop()));
            // c(calc)
            secondStack.push(calc);

        } else if (popped === "/") {
            let calc = Math.floor(eval(secondStack.pop() / numStack.pop()))
                // c("num", numStack.pop(), secondStack.pop())


            secondStack.push(calc);
        } else {
            // c(secondStack)
            secondStack.push(popped)
        }
        i++;
    }

    // return numStack
    // return secondStack;
    return eval(secondStack.join(''));
    // return _mul_divCount

    // return eval(numStack.join(''))

    // return Math.floor(eval(numStack.join('')));
};

// c(Math.floor(eval(0 / 3)))








// c(calculate("5+2*3"))
// c(calculate(" 3/2 "))
// c(calculate(" 3+5 / 2 "))
// c(calculate("3+2*2"))

// c(calculate("14/3-2")) //2

c(calculate("1*2-3/4+5*6-7*8+9/10"))
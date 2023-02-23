// https://leetcode.com/problems/parsing-a-boolean-expression/description/

const c = console.log.bind(console);

var parseBoolExpr = function(expression) {
    let arr = expression.split("");
    let secondArr = [];
    while (arr.length != 0) {
        let popped = arr.pop();
        let calcArr = [];
        // c(popped)
        // c(secondArr)
        if (popped === "&" || popped === "|" || popped === "!") {
            // c(secondArr)
            while (true) {
                let secondPopped = secondArr.pop();
                // c("secondPopped : " + secondPopped);
                // c("Second Arr : " + JSON.stringify(secondArr));
                secondPopped != "(" && secondPopped != ')' && secondPopped != ',' ? calcArr.push(secondPopped) : "";

                if (secondPopped === ")") {
                    switch (popped) {
                        case '|':
                            secondArr.push(calcArr.includes('t') ? "t" : "f")
                            break;
                        case '&':
                            secondArr.push(calcArr.every(i => i == 't') ? "t" : "f")
                            break;
                        case '!':
                            secondArr.push(calcArr[0] == "f" ? "t" : "f")
                            break;
                        default:

                    }
                    break;
                }
            }
        } else {
            secondArr.push(popped);
        }
    }
    // return secondArr;
    return secondArr[0] == "t" ? true : false
};

c(parseBoolExpr("&(|(f,t),&(f,t))"))
c(parseBoolExpr("|(f,f,f,t)"))
c(parseBoolExpr("!(&(f,t))"))
c(parseBoolExpr("&(|(f))"));

c(parseBoolExpr("&(t,t,t)"))
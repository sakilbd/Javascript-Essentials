// https://leetcode.com/problems/longest-valid-parentheses/discuss/14370/JavaScript-solution

// some problem solved need to work on more ..... 
const c = console.log.bind(console);

var longestValidParentheses = function(s) {
    let dict = {
        "(": ")",
    };
    let count = 0;
    let starting = "(";
    let ending = ")";
    let stack = [];
    // stack.push(1);
    // stack.push(2);
    // c(stack.slice(-1))
    // return stack;

    let popCheck = false;
    for (let i in s) {
        if (s[i] == "(" || stack.slice(-1) == "(") {
            if (popCheck == false) {
                if (s[i] == ")") {
                    stack.pop();
                    count += 2;
                    popCheck = true;
                } else {
                    stack.push(s[i]);
                }
            } else {
                if (s[i] == ")") {

                    stack.pop();
                    count += 2;
                    popCheck = true;
                } else {
                    popCheck = false;
                    // stack.length = 0;
                    stack.push(s[i]);
                }

            }
        }
        // return stack;
        // c(i)
        // c(dict[s[i]]);
        // c()
        // if (parseInt(i) + 1 < s.length) {
        //     if (dict[s[i]] == s[parseInt(i) + 1]) {
        //         // c(i);
        //         // c(dict[s[i]]);
        //         count += 2;
        //         i++;
        //     }
        // }
        // c(dict[s[i]]);
    }
    c(stack)
    c(popCheck)
        // if (stack.length != 0 && s.length > 3) {
        //     return count - 2;
        // }
    c(count);
    c('###############')
    return count;
};

c(longestValidParentheses("(()()(")); //4

c(longestValidParentheses(")()))")); //2
c(longestValidParentheses(')(())()(')) //6

c(longestValidParentheses("()(())")) //6

c(longestValidParentheses("(()")); //2
c(longestValidParentheses('(()())')); //6

c(longestValidParentheses('(()()')); //4

c(longestValidParentheses("()((()")); //2
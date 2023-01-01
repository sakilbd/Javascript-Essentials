// https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/description/
const c = console.log.bind(console);


/// by me without using stack 
var reverseParentheses = function(s) {
    let _try = s.split("()");
    while (_try.length > 1) {
        s = _try.join("");
        _try = s.split("()");
    }

    s = _try[0];

    let start = s.lastIndexOf("(");
    let end = start + s.slice(start, s.length).indexOf(")"); //`start` added as new index will be generated based on slice
    // let end = s.indexOf(")");

    // return `${start}+${end}`
    let temp = s;
    let slice = temp.slice(start + 1, end);
    // return slice
    while (start != -1) {
        let left = temp.slice(0, start);
        let right = temp.slice(end + 1, s.length);

        temp = left + slice.split("").reverse().join("") + right;
        // return temp
        start = temp.lastIndexOf("(");
        end = start + temp.slice(start, temp.length).indexOf(")");
        slice = temp.slice(start + 1, end);
        // c(slice)
        // return `${start}+${end}+${slice}`
        // return slice.split('').reverse().join('')
    }
    return temp;
    // return (temp.slice(1, temp.length - 1)).split('').reverse().join('')
};

//from community using stack 
var reverseParentheses = function(s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ')') {
            stack.push(s[i])
        }
        if (s[i] === ')') {
            let string = ''
            while (stack[stack.length - 1] !== '(') {
                let char = stack.pop()
                string = char + string
            }
            stack.pop()
            const reversedString = string.split('').reverse().join('')
            stack.push(reversedString)
        }
    }
    return stack.join('')
};

c(reverseParentheses("(ed(et(oc))el)"));

c(reverseParentheses("a(bcdefghijkl(mno)p)q"));

c(reverseParentheses("ta()usw((((ab))))"));

c(reverseParentheses("sxmdll(q)eki(x)"));
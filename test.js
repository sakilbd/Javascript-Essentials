const c = console.log.bind(console);

var reverseParentheses = function(s) {

    let _try = s.split('()');
    while (_try.length > 1) {
        s = _try.join('')
        _try = s.split('()')
    }


    s = _try[0];




    let start = s.lastIndexOf("(");
    let end = start + (s.slice(start, s.length)).indexOf(')');
    // let end = s.indexOf(")");

    // return `${start}+${end}`
    let temp = s;
    let slice = temp.slice(start + 1, end);
    // return slice
    while (start != -1) {

        let left = temp.slice(0, start);
        let right = temp.slice(end + 1, s.length);
        c(temp)

        temp = left + slice.split("").reverse().join("") + right;
        // return temp
        start = temp.lastIndexOf("(");
        end = temp.indexOf(")");
        slice = temp.slice(start + 1, end);

        // return slice.split('').reverse().join('')
    }
    return temp;
    // return (temp.slice(1, temp.length - 1)).split('').reverse().join('')
};

// c(reverseParentheses("(ed(et(oc))el)"));

// c(reverseParentheses("a(bcdefghijkl(mno)p)q"));

// c(reverseParentheses("ta()usw((((ab))))"));


c(reverseParentheses("sxmdll(q)eki(x)"))
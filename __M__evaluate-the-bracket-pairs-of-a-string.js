// https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/

const c = console.log.bind(console);

var evaluate = function(s, knowledge) {
    let map = {};
    knowledge.forEach((item) => {
        map[item[0]] = item[1];
    });
    let res = "";
    let slice = s;
    for (let i = 0; i < s.length; i++) {
        let openingIndex = slice.indexOf("(");
        let closingIndex = slice.indexOf(")");
        let braketKey;
        if (openingIndex != -1) {
            braketKey = slice.slice(openingIndex + 1, closingIndex);
            res += slice.slice(0, openingIndex) + (typeof(map[braketKey]) === 'undefined' ? "?" : map[braketKey]);
            slice = slice.slice(closingIndex + 1, s.length + 1);
        } else {
            res += slice
            break;
        }

        // c(braketKey);
        // c(openingIndex);
        // c(closingIndex);

        // c(slice);

    }
    return res
};

c(
    evaluate("(name)is(age)yearsold", [
        ["name", "bob"],
        ["age", "two"],
    ])
);

c(evaluate("hi(name)", [
    ["a", "b"]
]))

c(evaluate("(a)(a)(a)aaa", [
    ["a", "yes"]
]))
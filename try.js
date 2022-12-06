const c = console.log.bind(console)
let a = "abde";
let b = "abce";

c(b.localeCompare(a))


var reorderLogFiles = function(logs) {
    const letterLogs = [];
    const digitLogs = [];
    logs.forEach(log => {
        if (/ \d/.test(log)) {
            digitLogs.push(log);
        } else {
            letterLogs.push(log);
        }
    });
    letterLogs.sort((a, b) => {
        const aBody = a.slice(a.indexOf(' ') + 1);
        const bBody = b.slice(b.indexOf(' ') + 1);
        const c = aBody.localeCompare(bBody);
        if (c) return c;
        return a.localeCompare(b);
    });
    return [...letterLogs, ...digitLogs];
};
c(reorderLogFiles(["j abc", "5 abc w", "g 07", "o 2 0", "t q h"]));

c(reorderLogFiles(["j mo", "5 m w", "g 07", "o 2 0", "t q h"]));
// c(reorderLogFiles(["t kvr", "r 3 1", "i 403", "7 so", "t 54"]));
// c(reorderLogFiles(["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo"]))
// c(reorderLogFiles(["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"]))

c(
    reorderLogFiles([
        "dig1 8 1 5 1",
        "let1 art zero can",
        "dig2 3 6",
        "let2 own kit dig",
        "let3 art zero",
    ])
);
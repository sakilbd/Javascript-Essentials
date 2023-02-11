// https://leetcode.com/problems/optimal-partition-of-string/description/

const c = console.log.bind(console);

var partitionString = function(s) {
    let i = 0;
    let length = s.length;
    let count = 0;
    let string = "";
    while (i < length) {
        if (!string.includes(s[i])) {
            string += s[i];
            i == length - 1 ? count++ : "";
        } else {
            // c(string);
            i == length - 1 ? count++ : "";
            count++;
            string = s[i];
        }

        i++;
    }
    return count;
};

// c(partitionString("abacaba"));

c(partitionString("hdklqkcssgxlvehva"));
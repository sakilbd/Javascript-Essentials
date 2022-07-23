const p = console.log.bind(console);

var shortestToChar = function(s, c) {

    let cIndexes = [];

    for (let i in s) {
        if (s[i] == 'e') { cIndexes.push(i); }

    }
    let res = [];
    let j = 0;
    for (let i in s) {

        if (i <= cIndexes[j]) {
            p(j)
        } else {
            j++;
        }
        if (i <= cIndexes[j]) {
            // p(i)
        }

    }

    // return cIndexes;
};

p(shortestToChar("loveleetcode", "e"));
// https://leetcode.com/problems/shortest-distance-to-a-character/solution/
const p = console.log.bind(console);

var shortestToChar = function(s, c) {

    let cIndexes = [];

    for (let i in s) {
        if (s[i] == c) { cIndexes.push(i); }

    }
    let res = [];
    let j = 0;
    // return cIndexes;
    const resArray = new Array(s.length).fill(0);
    return resArray.map((item, i) => {
        // p(item)


        // if (i <= cIndexes[j]) {

        // } else {
        //     j++;
        // }
        var res = Math.abs(i - cIndexes[j]);
        return res;
        if (i <= cIndexes[j]) {
            // var res = Math.abs(i - cIndexes[j - 1]) < Math.abs(i - cIndexes[j]) ? Math.abs(i - cIndexes[j - 1]) : Math.abs(i - cIndexes[j])
            var res = Math.abs(i - cIndexes[j]);
            return res;
        } else {
            j++;

            // var res2 = Math.abs(i - cIndexes[j - 1]) < Math.abs(i - cIndexes[j]) ? Math.abs(i - cIndexes[j - 1]) : Math.abs(i - cIndexes[j])
            if (cIndexes.length == 1) {
                var res2 = Math.abs(i - cIndexes[j]) > Math.abs(i - cIndexes[j - 1]) ? Math.abs(i - cIndexes[j]) : Math.abs(i - cIndexes[j - 1])
            } else {
                var res2 = Math.abs(i - cIndexes[j - 1]) < Math.abs(i - cIndexes[j]) ? Math.abs(i - cIndexes[j - 1]) : Math.abs(i - cIndexes[j])
            }
            return res2
        }



    })

};

// p(shortestToChar("loveleetcode", "e"));

// p(shortestToChar("aaab", "b"));
p(shortestToChar("aaba", "b"));
p(shortestToChar("abaa", "b"));
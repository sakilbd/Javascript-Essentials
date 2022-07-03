// https://leetcode.com/problems/longest-string-chain/
//1048. Longest String Chain
//not submitted need to understand the problem first.

const c = console.log.bind(console)

var longestStrChain = function(words) {
    words.sort((a, b) => a.length - b.length);

    const map = new Map();



    let res = 1;

    for (const word of words) {
        const n = word.length;
        let max = 1;

        for (let i = 0; i < n; i++) {
            const front = word.substring(0, i);
            c("front : " + front);
            const back = word.substring(i + 1);
            c("back : " + back);
            const removed = front + back;
            c("removed : " + removed)
            if (map.has(removed)) {
                max = Math.max(max, map.get(removed) + 1);
            }
        }

        map.set(word, max);

        c("map : " + map.get('a'));

        res = Math.max(res, max);
    }

    return res;
};


c(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]));
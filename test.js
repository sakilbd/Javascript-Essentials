// https://leetcode.com/problems/top-k-frequent-words/

const c = console.log.bind(console);


var topKFrequent = function(words, k) {
    let obj = {};
    for (let i of words) {
        obj[i] = 0;
    }
    for (let i of words) {
        obj[i]++;
    }
    // return obj
    let res = Object.entries(obj).sort(([, a], [, b]) => b - a);
    // c(res);
    var keyCounts = Object.values(obj).map((item) => {
        return item;
    })
    var keyCounts = [...new Set(keyCounts)];
    let objCounts = {};




    let result = []
    for (let i in res) {
        result.push(res[i][0])
        if (i == (k - 1)) {
            break;
        }
    }
    return result;
};


c(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2))
    // c(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4))
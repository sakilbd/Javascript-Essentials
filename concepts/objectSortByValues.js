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
    return Object.entries(obj).sort(([, a], [, b]) => b - a);
};


c(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2))
c(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4))
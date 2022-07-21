// https://leetcode.com/problems/top-k-frequent-words/

const c = console.log.bind(console);

// accepted with 130s tc
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
        // return res;
    var keyCounts = [...new Set(keyCounts)].sort((a, b) => b - a);
    let objCounts = {};

    let resArray = keyCounts.map(item => {
        const c = [];
        for (let i in res) {
            if (item == res[i][1]) {
                c.push(res[i][0]);
            }
        }
        return c;
    });
    const finalArray = Object.values(resArray).map(item => {
        return item.sort();
    });

    let resFinalArray = [];

    finalArray.forEach(item => {
        item.forEach(item => {
            resFinalArray.push(item);
        })
    })
    return resFinalArray.splice(0, k);
};


//optimal solution 

// var topKFrequent = function(words, k) {
//     const mappings = {}
//     for (let i = 0; i < words.length; i++) {
//         mappings[words[i]] = mappings[words[i]] + 1 || 1
//     }
//     const sorted = Object.keys(mappings).sort((a, b) => {
//         if (mappings[b] === mappings[a]) {
//             return a > b ? 1 : -1
//         }
//         return mappings[b] - mappings[a]
//     })
//     return sorted.slice(0, k)
// };


// c(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2))
c(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 3))
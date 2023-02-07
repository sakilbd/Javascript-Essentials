// https://leetcode.com/problems/count-vowel-strings-in-ranges/description/

const c = console.log.bind(console)
    //gets tle 
var vowelStrings = function(words, queries) {
    let vowel = ['a', 'e', 'i', 'o', 'u']
    let res = [];

    let i = 0;
    let length = queries.length;
    while (i < length) {
        let [a, b] = queries[i]
            // c(b)
        let itemCount = 0;
        for (let i = a; i <= b; i++) {
            // if ([words[i][0], words[i][words[i].length - 1]].every(item => vowel.includes(item))) {
            //     itemCount++;
            // }

            if (vowel.includes(words[i][0]) && vowel.includes(words[i].substr(-1))) {
                itemCount++
            }
        }
        res.push(itemCount)
            // c(queries[i])
        i++
    }

    return res;

};


//accespted but with 8000ms wtf :/ 
var vowelStrings = function(words, queries) {
    let vowel = ['a', 'e', 'i', 'o', 'u']
    let res = [];
    let i = 0;
    let length = queries.length;
    let _words = words.map(item => {
        // return item[0] + item.substr(-1)
        if (vowel.includes(item[0]) && vowel.includes(item.substr(-1))) {
            return true
        }

        return 0
    })
    while (i < length) {
        let [a, b] = queries[i]
        let itemCount = 0;
        for (let i = a; i <= b; i++) {
            _words[i] == true ? itemCount++ : 'itemCount--'
        }
        res.push(itemCount)
        i++
    }

    return res;

};

// const p = "abc";
// c(p.substr(-1))


//from community 172 ms  :O 
var vowelStrings = function(words, queries) {
    let vs = [];
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let word of words) {
        if (vowels.has(word[0]) && vowels.has(word[word.length - 1]))
            vs.push(1);
        else
            vs.push(0);
    }
    // return vs;
    let sum = 0;
    for (let i = 0; i < vs.length; i++) {
        sum += vs[i];
        vs[i] = sum;
    }
    // return vs
    let result = [];
    for (let [l, r] of queries) {
        let left = (l > 0) ? vs[l - 1] : 0;
        result.push(vs[r] - left);
    }

    return result;

};



c(vowelStrings(["aba", "bcb", "ece", "aa", "e"], [
    [0, 2],
    [1, 4],
    [1, 1]
]))


c(vowelStrings(["bzmxvzjxfddcuznspdcbwiojiqf", "mwguoaskvramwgiweogzulcinycosovozppl", "uigevazgbrddbcsvrvnngfrvkhmqszjicpieahs", "uivcdsboxnraqpokjzaayedf", "yalc", "bbhlbmpskgxmxosft", "vigplemkoni", "krdrlctodtmprpxwditvcps", "gqjwokkskrb", "bslxxpabivbvzkozzvdaykaatzrpe", "qwhzcwkchluwdnqjwhabroyyxbtsrsxqjnfpadi", "siqbezhkohmgbenbkikcxmvz", "ddmaireeouzcvffkcohxus", "kjzguljbwsxlrd", "gqzuqcljvcpmoqlnrxvzqwoyas", "vadguvpsubcwbfbaviedr", "nxnorutztxfnpvmukpwuraen", "imgvujjeygsiymdxp", "rdzkpk", "cuap", "qcojjumwp", "pyqzshwykhtyzdwzakjejqyxbganow", "cvxuskhcloxykcu", "ul", "axzscbjajazvbxffrydajapweci"], [
    [4, 4],
    [6, 17],
    [10, 17],
    [9, 18],
    [17, 22],
    [5, 23],
    [2, 5],
    [17, 21],
    [5, 17],
    [4, 8],
    [7, 17],
    [16, 19],
    [7, 12],
    [9, 20],
    [13, 23],
    [1, 5],
    [19, 19]
]))
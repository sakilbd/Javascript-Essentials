// https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/
const c = console.log.bind(console);

var smallestSubsequence = function(s) {
    let arr = [];
    let res = "";
    for (let i = 0; i < s.length; i++) {
        let slice = s.slice(i, s.length);
        slice.split("").indexOf(s[i]) == slice.split("").lastIndexOf(s[i]) ? res += s[i] : '';
    }
    let index = 0;
    let slice = s.slice(s.indexOf(res[0]), s.length);
    for (let i = 0; i < res.length; i++) {

        if (index <= 0) {
            index = s.indexOf(res[i]);
        }

        arr.push([res[i], slice.indexOf(res[i])])
    }
    arr.sort((a, b) => a[1] - b[1]);

    let result = ''
    for (let i in arr) {
        result += arr[i][0];
    }
    return result;
    return arr;
    return res;
};

// c(smallestSubsequence("bcabc"));

// c(smallestSubsequence("cbacdcbc"))
c(smallestSubsequence("cdadabcc"))
    // c(smallestSubsequence("abdcc"));
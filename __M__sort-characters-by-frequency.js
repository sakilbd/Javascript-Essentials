// https://leetcode.com/problems/sort-characters-by-frequency/

const c = console.log.bind(console);


//by me 
// var frequencySort = function(s) {
//     let map = new Map();
//     for (let i = 0; i < s.length; i++) {
//         map.set(s[i], map.get(s[i]) + 1 || 1);
//     }
//     let resArray = [...map.entries()].sort((a, b) => b[1] - a[1]);
//     let res = ''
//     resArray.forEach(item => {
//         res += Array(item[1]).fill(item[0]).join('')
//     });

//     return res;
// };


// from community with reducers 
var frequencySort = function(s) {

    const mapChars = s.split('').reduce((acc, ch) => {
        acc[ch] = (acc[ch] || 0) + 1;
        return acc;
    }, {})
    const sortedChars = Object.entries(mapChars).sort((a, b) => b[1] - a[1]);
    return sortedChars.reduce((acc, [ch, count]) => {
        acc += ch.repeat(count);
        return acc;
    }, '')

};

c(frequencySort("ccaaaa"));
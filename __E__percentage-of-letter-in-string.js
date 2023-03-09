// https://leetcode.com/problems/percentage-of-letter-in-string/description/

const c = console.log.bind(console);


var percentageLetter = function(s, letter) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1)
    }
    let res = ((parseInt(map.get(letter)) / parseInt(s.length)) * 100)
    return res ? Math.floor(res) : 0;
};


// good approach by community 
var percentageLetter = function(s, letter) {
    let arr = s.split('').filter(data => data == letter)
    return Math.floor(arr.length / s.length * 100)
};

c(percentageLetter("sgawtb", "s"))
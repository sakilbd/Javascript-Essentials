// https://leetcode.com/problems/adding-spaces-to-a-string/description/

const c = console.log.bind(console);

var addSpaces = function(s, spaces) {
    let res = []
    res.push(s.slice(0, spaces[0]))
    spaces.forEach((item, i) => {

        res.push(s.slice(item, spaces[i + 1]))

    })

    return res.join(' ');

};

c(addSpaces("LeetcodeHelpsMeLearn", [8, 13, 15]))
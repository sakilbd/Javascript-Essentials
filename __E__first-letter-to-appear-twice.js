// https://leetcode.com/problems/first-letter-to-appear-twice/description/
const c = console.log.bind(console)

var repeatedCharacter = function(s) {
    let map = {}
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] ? ++map[s[i]] : 1
        if (Object.values(map).includes(2)) {
            return s[i]
        }
    }
    return map
};


c(repeatedCharacter('abccbaacz'))
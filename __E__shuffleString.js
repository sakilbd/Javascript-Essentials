// https://leetcode.com/submissions/detail/805216688/
const c = console.log.bind(console);

var restoreString = function(s, indices) {
    let map = new Map();
    indices.forEach((item, i) => {
        map.set(item, s[i]);
    })
    let result = ''
    indices.forEach((item, i) => {
        result = result + map.get(i);
    })
    return result;
};


c(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));
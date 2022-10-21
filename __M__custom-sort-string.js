// https://leetcode.com/problems/custom-sort-string/

const c = console.log.bind(console);


//by me 
var customSortString = function(order, s) {
    let str = '';
    let map = new Map();
    s.split('').forEach(item => {
        map.set(item, map.get(item) + 1 || 1);
    })
    order.split('').forEach(item => {
        if (s.includes(item)) {
            str += map.get(item) > 1 ? Array(map.get(item)).fill(item).join('') : item;
        }
    })
    return str + s.split('').filter(item => !str.split('').includes(item)).join('')
};
var customSortString = function(order, s) {
    /*res = ""
    
    for(let i = 0; i < order.length; i++) {
        index = s.indexOf(order[i])
        while(index !== -1) {
            res += s[index]
            s = s.slice(0, index) + s.slice(index + 1)
            index = s.indexOf(order[i])
        }
    }
    if(s.length !== 0) {
        res += s
    }
    return res
    */
    return s.split('').sort((a, b) => order.indexOf(a) - order.indexOf(b)).join('')
};

c(customSortString("cba", "abcd"))
c(customSortString("cbafg", "abcd"))

c(customSortString("kqep", "pekeq"))
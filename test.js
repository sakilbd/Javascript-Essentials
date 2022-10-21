const c = console.log.bind(console);


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


c(customSortString("cba", "abcd"))
c(customSortString("cbafg", "abcd"))

c(customSortString("kqep", "pekeq"))
https: //leetcode.com/problems/sort-the-people/
    const c = console.log.bind(console);

var sortPeople = function(names, heights) {
    let map = new Map();
    let res = [];
    heights.forEach((item, i) => {
        // map.set(item, names[i]);
        res.push([item, names[i]])
    });
    res.sort((a, b) => -a[0] + b[0])

    return res.map(item => {
        return item[1]
    });
};

c(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
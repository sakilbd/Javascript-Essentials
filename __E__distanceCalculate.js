// https: //leetcode.com/problems/check-distances-between-same-letters/
const c = console.log.bind(console);

var checkDistances = function(s, distance) {
    let map = new Map();

    map.set(22, 32);
    // return String.fromCharCode(97)
    for (let i = 0; i < 27; i++) {
        map.set(String.fromCharCode(97 + i), i);
    }
    let distinctChar = [...new Set(s.split(""))];

    for (let q of distinctChar) {
        let indexes = [];
        s.split("").filter((item, i) => {
            item == q ? indexes.push(i) : "";
        });
        let spaces = indexes[1] - indexes[0] - 1;
        // c(spaces)
        if (distance[map.get(q)] != spaces) {
            return false;
        } else {
            indexes = [];
        }

        // c(indexes);
    }
    return true;

};

//few lines solutions from community 
const checkDistances = (s, distance) => {
    for (let c of new Set(s))
        if (s.lastIndexOf(c) - s.indexOf(c) - 1 !== distance[c.charCodeAt(0) - 97])
            return false;
    return true;
};

c(
    checkDistances(
        "abaccb", [
            1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0,
        ]
    )
);
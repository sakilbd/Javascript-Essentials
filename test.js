// https://leetcode.com/problems/making-file-names-unique/
const c = console.log.bind(console);

var equalFrequency = function(word) {
    let map = new Map();

    word.split('').forEach(item => {
        map.set(item, (map.get(item) + 1 || 1))
    })
    let newMap = new Map();
    for (let [key, value] of map.entries()) {
        // c(key)
        newMap.set(value, key);

    }
    if (newMap.size > 2) {
        return false;

    } else if (newMap.size == 2) {
        let arr = [];
        for (let [key, value] of newMap.entries()) {
            arr.push(key);
        }
        return Math.abs(arr[0] - arr[1]) == 1 ? true : false;
    } else if (newMap.size == 1) {
        let [key] = newMap.keys();
        return key == 1 ? true : false;
        // return map.get(0)
    }
};


c(equalFrequency("aabbcccc"))

c(equalFrequency('aazz'))

c(equalFrequency('bac'))

c(equalFrequency("ddaccb"))
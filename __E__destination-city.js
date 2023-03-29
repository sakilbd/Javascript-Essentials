// https: //leetcode.com/problems/destination-city/description/

const c = console.log.bind(console)


var destCity = function(paths) {
    let obj = {}
    paths.forEach(city => {
        const [startingCity, destCity] = city
        obj[startingCity] = 1;
        obj[destCity] ? obj[destCity] = 1 : obj[destCity] = 0;
    })

    let values = Object.entries(obj)
    for (let [city, path] of values) {
        if (path == 0) {
            return city
        }
    }
};



c(destCity(
    [
        ["London", "New York"],
        ["New York", "Lima"],
        ["Lima", "Sao Paulo"]
    ]
))

c(destCity([
    ["B", "C"],
    ["D", "B"],
    ["C", "A"]
]))
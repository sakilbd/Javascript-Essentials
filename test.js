// https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/
const c = console.log.bind(console);

var displayTable = function(orders) {
    let map = new Map();
    let itemArray = [];
    let tableArray = [];
    orders.forEach(item => {
        // c(item[2] + item[1])
        let key = item[1] + '.' + item[2];
        map.set(key, map.get(key) + 1 || 1);
        itemArray.push(item[2]);
        tableArray.push(item[1])
    })
    let itemSorted = [...new Set(itemArray)].sort();
    let tableSorted = [...new Set(tableArray)].sort((a, b) => a - b);
    // return tableSorted
    // return sorted;
    for (let [key, value] of map.entries()) {
        c(key)
    }
    return map;
};

c(displayTable([
    ["David", "3", "Ceviche"],
    ["Corina", "10", "Beef Burrito"],
    ["David", "3", "Fried Chicken"],
    ["Carla", "5", "Water"],
    ["Carla", "5", "Ceviche"],
    ["Rous", "3", "Ceviche"]
]));
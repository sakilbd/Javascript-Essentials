// https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/
const c = console.log.bind(console);

var displayTable = function(orders) {
    let map = {};
    let itemArray = [];
    orders.forEach((item) => {
        let tableNo = item[1];
        let itemName = item[2];
        itemArray.push(itemName);
        map[tableNo] ?
            map[tableNo][itemName] > 0 ?
            (map[tableNo][itemName] = map[tableNo][itemName] + 1) :
            (map[tableNo][itemName] = 1) :
            (map[tableNo] = {
                [itemName]: 1,
            });
    });
    let sortedItem = [...new Set(itemArray)].sort();
    let resArray = [];
    Object.entries(map).forEach((item) => {
        let temp = [item[0]];
        let objArray = []
        let zeroPush = true
        Object.entries(map[item[0]]).forEach((i) => {
            objArray.push(i)
        });

        sortedItem.forEach((srtd) => {
            try {
                objArray.forEach(item => {
                    if (item[0] == srtd) {
                        temp.push(item[1].toString());
                        throw "exitForEach"
                    }
                })
            } catch (err) {

                zeroPush = false;

            } finally {
                zeroPush ? temp.push("0") : '';
                zeroPush = true;
            }
        });
        resArray.push(temp);
    });
    resArray.sort((a, b) => {
        return parseInt(a[0]) - parseInt(b[0])

    })
    return [
        ["Table", ...sortedItem], ...resArray
    ];
    // return map;
};

//simplified solutino from community 
// var displayTable = function(orders) {
//     let tables = new Set(), dishes = new Set()
//     for (let [_, table, dish] of orders)
//         tables.add(table), dishes.add(dish)
//     tables = new Map([...tables].sort((a,b) => ~~a - ~~b).map((el,i) => [el,i]))
//     dishes = new Map([...dishes].sort().map((el,i) => [el,i]))
//     let res = Array.from({length: tables.size + 1}, _ => new Array(dishes.size + 1).fill("0"))
//     res[0][0] = "Table"
//     for (let [k,v] of dishes)
//         res[0][v + 1] = k
//     for (let [k,v] of tables)
//         res[v + 1][0] = k
//     for (let [_, table, dish] of orders) {
//         let tv = tables.get(table) + 1,
//             dv = dishes.get(dish) + 1
//         res[tv][dv] = ~~res[tv][dv] + 1 + ""
//     }
//     return res
// };

c(
    displayTable([
        ["David", "3", "Ceviche"],
        ["Corina", "10", "Beef Burrito"],
        ["David", "3", "Fried Chicken"],
        ["Carla", "5", "Water"],
        ["Carla", "5", "Ceviche"],
        ["Rous", "3", "Ceviche"],
    ])
);

// let mapTry = () => {
//     let map = {};
//     map["wow"] = {
//         now: 1
//     }
//     map["now"] ? map["now"] = map['now'] + 1 : map["now"] = { 'dhuru': 1 };
//     return map;
// }

// c(mapTry())
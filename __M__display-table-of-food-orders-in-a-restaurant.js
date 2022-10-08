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
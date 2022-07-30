// https://leetcode.com/problems/lemonade-change/submissions/

const c = console.log.bind(console);


//use case as there are only 5,10 and 20 dollar bills only 
var lemonadeChange = function(bills) {
    let __5counter = 0;
    // return __5counter;
    bills.forEach(item => {
        if (item == 5) {
            __5counter += item;
        }
    })
    let map = {}
    map[5] = __5counter;
    // return map;
    for (let item of bills) {
        // c(item)

        if (item > 5) {
            // c(item)
            map[5] = map[5] - 5;

            // if (totalPossibleChange > 0) {
            //     totalPossibleChange += item;

            // }
            // c(totalPossibleChange)
        }
        // c(totalPossibleChange);
        // if (parseInt(totalPossibleChange) < 0) {
        //     return false;
        // }
    }
    // return true;
    return map;
};

c(lemonadeChange([5, 5, 5, 10, 20]))

// c(lemonadeChange([5, 5, 10, 10, 20]))
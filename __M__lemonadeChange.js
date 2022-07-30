// https://leetcode.com/problems/lemonade-change/submissions/

const c = console.log.bind(console);

//some test cases failed finally successfully changed 
var lemonadeChange = function(bills) {
    let __5counter = 0;
    let map = {};
    bills.forEach((item) => {
        map[item] = 0;
    });

    // map[5] = __5counter;
    // return map;
    let __break = false;
    for (let i of bills) {
        switch (i) {
            case 5:
                map[5]++;
                // c(i);
                break;
            case 10:
                if (map[5] > 0) {
                    map[5]--;
                    map[10]++;
                } else {
                    __break = true;
                }
                break;
            case 20:
                if (map[5] > 0) {
                    map[5]--;
                    if (map[10] > 0) {
                        map[10]--;
                    } else if (map[5] >= 2) {
                        map[5]--;
                        map[5]--;

                    } else {
                        __break = true;
                    }
                    map[20]++;
                } else {
                    __break = true;
                }
                break;
        }
        if (__break == true) {
            // c(i);
            return false;
        }
    }
    // return map;
    return __break == false ? true : false;
};


//simplified solution 
// var lemonadeChange = function(bills) {
//     let cur5 = 0;
//     let cur10 = 0;
//     for (let i = 0; i < bills.length; i++) {
//         switch (bills[i]) {
//             case 5:
//                 cur5++;
//                 break;
//             case 10:
//                 cur5--;
//                 cur10++;
//                 break;
//             case 20:
//                 if (cur10 > 0) {
//                     cur10--;
//                     cur5--;
//                 } else {
//                     cur5 -= 3;
//                 }
//         }
//         if (cur5 < 0) return false;
//     }
//     return true;
// };

c(lemonadeChange([5, 5, 5, 10, 20]));

c(lemonadeChange([5, 5, 10, 10, 20]));
c(lemonadeChange([5, 5, 5, 10, 5, 5, 10, 20, 20, 20]));
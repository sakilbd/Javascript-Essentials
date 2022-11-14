// https: //leetcode.com/problems/maximum-ice-cream-bars/
const c = console.log.bind(console);


var maxIceCream = function(costs, coins) {
    costs.sort((a, b) => a - b);
    let length = costs.length;
    let res = 0;
    let resPrice = 0;
    for (let i = 0; i < length; i++) {
        let price = resPrice;
        price += costs[i]
        if (price <= coins) {
            resPrice += costs[i]
            res += 1
        } else {
            break;
        }
        // c(i)
    }
    return res;
};



//from community 
// var maxIceCream = function(costs, coins) {
//     const n = costs.length;

//     costs.sort((a,b) => a - b);

//     for (const [ i, cost ] of costs.entries()) {
//         coins -= cost;
//         if (coins < 0) return i
//     }
//     return n;
// };


c(maxIceCream([1, 3, 2, 4, 1], 7));
c(maxIceCream([10, 6, 8, 7, 7, 8], 5));
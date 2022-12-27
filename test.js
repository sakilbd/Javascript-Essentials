// https://leetcode.com/problems/invalid-transactions/

const c = console.log.bind(console);

var invalidTransactions = function(transactions) {
    let map = {};
    let res = [];
    transactions.forEach((item) => {
        item.split(',')[2] > 1000 ? res.push(item) : '';
        let name = item.split(",")[0];
        if (map[name]) {
            c(map[name])
        }
        // !map[name] ? map[name] = item.split(',').slice(1, 4) : '';
        map[name] = item.split(',').slice(1, 4);

    });
    return map;
};

c(invalidTransactions(["alice,20,800,mtv", "alice,50,1200,mtv"]));
let maxProfit = function(prices) {
    if (prices === []) {
        return 0;
    }
    let profit = 0;
    let i = 0;
    while (i < prices.length - 1) {
        let cp = prices[i];
        let j = i + 1;
        while (j < prices.length) {
            let sp = prices[j]
            profit = Math.max(profit, sp - cp);

            j++;
        }
        i++;
    }
    return profit;
};


console.log(maxProfit([7, 1, 5, 3, 6, 4]))
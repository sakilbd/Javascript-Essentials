// https: //leetcode.com/problems/gas-station/

const c = console.log.bind(console);

var canCompleteCircuit = function(gas, cost) {
    let costNeeded = cost[0];
    let index = 0;
    let totalGas = gas[0];
    let i = 1;

    while (i != index - 1) {
        if (costNeeded > totalGas) {
            totalGas = gas[i];
            costNeeded = cost[i];
            index = i;
            // c('index :'+index)
            // c("i :" + i)
            // c("tGas :" + totalGas)
        } else {

            let j = i + 1;
            if (i == gas.length - 1) {
                j = 0;
            }
            totalGas = totalGas - cost[i] + cost[j];
            // c("i :" + i)
            // c("tGas :" + totalGas)
        }

        if (i == gas.length - 1) {
            i = 0;
        } else {
            i++;
        }
        c('index :' + index)
        c("i :" + i)
            // c(totalGas)
    }

    return index;
};

// c(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));

c(canCompleteCircuit([2, 3, 4], [3, 4, 3]))
// https://leetcode.com/contest/biweekly-contest-86/problems/maximum-number-of-robots-within-budget/
const c = console.log.bind(console);


//some test cases passed .. but need tto find maximum consucutive robots not the first only
var maximumRobots = function(chargeTimes, runningCosts, budget) {
    var d = 0;
    // return Math.sum(1, 2, 3);
    let result = []
    let index = 0;
    for (let i = 1; i <= chargeTimes.length; i++) {

        let ct = [...chargeTimes];
        let rc = [...runningCosts];
        // c(i)

        let newArr = rc.splice(index, i);
        let ctArr = ct.splice(index, i)
        let max = Math.max(...ctArr);
        // c(max)
        // c("max :" + max);
        // c(i * newArr.reduce((a, b) => (a + b)));
        // // return ct;
        let calculation = max + (i * (newArr.reduce((a, b) => (a + b))))
            // c(calculation + ' ' + i);

        if (calculation > budget) {
            // let updatedIndex = i - index;

            // result.push(updatedIndex - 1)
            // index = i;
            return i - 1;
        }
        if (calculation == budget) {
            // let updatedIndex = i - index;
            // result.push(updatedIndex)
            // index = i;
            return i
        }
    }
    return result;
};

// c(maximumRobots([3, 6, 1, 3, 4], [2, 1, 3, 4, 5], 25));

c(maximumRobots([8, 76, 74, 9, 75, 71, 71, 42, 15, 58, 88, 38, 56, 59, 10, 11], [1, 92, 41, 63, 22, 37, 37, 8, 68, 97, 39, 59, 45, 50, 29, 37],
    412))
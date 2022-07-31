// https://leetcode.com/problems/daily-temperatures/


const c = console.log.bind(console);

var dailyTemperatures = function(temperatures) {
    const tempCopy = [...temperatures];
    return temperatures.map((item, i) => {
        let returnItem = 0
        for (let j = i; j < tempCopy.length; j++) {

            if (tempCopy[j] > item) {

                returnItem = j - i;
                return returnItem;
            }

        }
        if (!returnItem) {
            return 0
        }
        returnItem = undefined;
    });
};

c(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
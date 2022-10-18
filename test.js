// https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/
const c = console.log.bind(console);

var numOfPairs = function(nums, target) {
    let count = 0;
    let map = new Set();
    nums.forEach((item1, j) => {
        nums.forEach((item, i) => {
            // if (j == 2) {
            //     c(item)
            // }
            if (i != j) {
                // c("I :" + i);
                // c("J :" + j)
            }

            if (i != j) {
                if (item1 + item == target) {
                    map.add(i.toString() + (j).toString());
                    count++;
                    // c(item1 + item);
                }
            }

        });
    });
    return map;
    // return count;
};

c(numOfPairs(["777", "7", "77", "77"], "7777"));

c(numOfPairs(["123", "4", "12", "34"], "1234"))
c(numOfPairs(["1", "1", "1"], "11"))
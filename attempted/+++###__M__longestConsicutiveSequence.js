// https://leetcode.com/problems/longest-consecutive-sequence/submissions/
const c = console.log.bind(console);
// test cases with minus value not working and last index not counting

var longestConsecutive = function(nums) {

    let set = new Set();

    for (let i of nums) {
        set.add(i);
    }
    // c(set);
    let max = 0;
    for (let i of nums) {

        let count = 0;
        if (!set.has(i - 1)) {
            let count = 0;
            while (set.has(i++)) {
                // c(i)
                count++;
            }
            max = Math.max(count, max);
        }
    }

    return max;


};
// c(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

// // c(longestConsecutive([100, 4, 200, 1, 3, 2, 6, 7, 8, 9, 10]));
// c(longestConsecutive([0]));
// // c(longestConsecutive([0, 1, 2, 3, 4, 6, 7, 8, 10]))
// c(longestConsecutive([3, 0, -1, -2, -3, ]))

// c(longestConsecutive([]));
c(longestConsecutive([1, 2, 0, 1, 6, 7, 8, 9, 10]));

// c(
//   longestConsecutive([
//     -7, -1, 3, -9, -4, 7, -3, 2, 4, 9, 4, -9, 8, -7, 5, -1, -7,
//   ])
// );
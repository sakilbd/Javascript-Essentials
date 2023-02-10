// https: //leetcode.com/problems/house-robber/description/

// https://neetcode.io/roadmap

const c = console.log.bind(console);

var rob = function(nums) {
    let rob1 = 0,
        rob2 = 0;

    for (let n of nums) {
        let temp = Math.max(n + rob1, rob2);
        rob1 = rob2;
        rob2 = temp;

    }
    return rob2;

};



c(rob([1, 2, 3, 1]))

c(rob([2, 7, 9, 3, 1]))

c(rob([2, 15, 9, 3, 9]))
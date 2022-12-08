// https://leetcode.com/problems/sum-of-even-numbers-after-queries/

const c = console.log.bind(console);


//done by me has 6000ms 
var sumEvenAfterQueries = function(nums, queries) {
    let res = [];
    queries.forEach((item) => {
        nums[item[1]] = nums[item[1]] + item[0];
        res.push(
            nums.reduce((a, b) => (a % 2 == 0 ? a : 0) + (b % 2 == 0 ? b : 0), 0)
        );
    });
    return res;
};

//from community has 120ms around 
// var sumEvenAfterQueries = function(nums, queries) {
//     let sum = 0;
//     const res = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 === 0) {
//             sum += nums[i];
//         }
//     }

//     for (let i = 0; i < queries.length; i++) {
//         const [value, index] = queries[i];

//         if (nums[index] % 2 === 0) {
//             sum -= nums[index];
//         }

//         nums[index] += value;

//         if (nums[index] % 2 === 0) {
//             sum += nums[index];
//         }

//         res.push(sum);
//     }

//     return res;
// };

c(
    sumEvenAfterQueries(
        [1, 2, 3, 4], [
            [1, 0],
            [-3, 1],
            [-4, 0],
            [2, 3],
        ]
    )
);

c(sumEvenAfterQueries([1], [
    [4, 0]
]));
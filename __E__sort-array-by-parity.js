// https://leetcode.com/problems/sort-array-by-parity/description/


const c = console.log.bind(console)

var sortArrayByParity = function(nums) {
    let even = []
    let odd = []
    nums.forEach(item => {
        if (item % 2 == 0) {
            even.push(item)
        } else {
            odd.push(item)
        }
    })
    return [...even, ...odd]
};


c(sortArrayByParity([3, 1, 2, 4]))
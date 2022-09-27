https: //leetcode.com/problems/sort-array-by-increasing-frequency/
    const c = console.log.bind(console);

var frequencySort = function(nums) {
    let map = new Map();
    let arr = [];
    nums.forEach((item) => {
        map.set(item, map.get(item) + 1 || 1);

    });
    for (let [key, value] of map.entries()) {
        arr.push([key, value]);
    }
    arr.sort((a, b) => {
        return -a[0] + b[0]
    })
    map = new Map();
    arr.forEach(item => {
        map.set(item[0], item[1])
    })
    let sortedValue = [];
    for (let [key, value] of map.entries()) {
        sortedValue.push(value);
    }
    sortedValue.sort((a, b) => a - b);
    let finalArray = [];
    sortedValue.forEach((item) => {
        for (let [key, value] of map.entries()) {
            if ((value == item)) {
                let tempArr = new Array(item).fill(key);
                finalArray.push(...tempArr);
                map.delete(key);
            }
        }
    });
    return finalArray;
};


//got from community 
// var frequencySort = function(nums) {
//     let freqMap = new Map();
//     nums.forEach(n => {
//         if(freqMap.has(n)){
//             freqMap.set(n, freqMap.get(n) + 1);
//         } else {
//             freqMap.set(n, 1);
//         }
//     });

//     nums.sort((a, b) => {
//         if(freqMap.get(a) === freqMap.get(b))
//             return b-a
//         else return freqMap.get(a) - freqMap.get(b)
//     })

//     return nums;
// };

// c(frequencySort([1, 1, 2, 2, 2, 3]));

// c(frequencySort([2, 3, 1, 3, 2]));

c(frequencySort([43, -35, -9, -9, -35, -9, 50, -36, -18, 50, -36, 43, 50, -9, 50, -18, -36, -35, -18, -9, 43, 43, -36, -9, -36, -36, -9, -35, -9, -9, -36, -9, -18, -9, -35, 50, 43]));
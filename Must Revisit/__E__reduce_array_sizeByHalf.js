// https://leetcode.com/problems/reduce-array-size-to-the-half/

// sum needs to be at least half of the lengh of the array or slight more but not less ...thank fu...



const c = console.log.bind(console);


var minSetSize = function(arr) {
    let map = {};
    let mapArray = [];

    let arrLength = arr.length / 2;
    for (let i in arr) {
        map[arr[i]] = (map[arr[i]] || 0) + 1;
    }

    Object.keys(map).forEach((key, i) => {
        mapArray.push([key, map[key]])
    })
    if (mapArray.length == 1) {
        return 1;
    }
    if (arr.length == 2) {
        return 1
    }
    let sortedMapArray = mapArray.sort((a, b) => b[1] - a[1])

    let count = 0;
    let sum = 0;
    let index = 0;
    while (sum < arrLength) {
        sum += sortedMapArray[index++][1];

        count++;
        // c(sum)
    }

    return count;

};



//from leetcode solutions 
// var minSetSize = function(arr) {
//     const map = new Map();

//     for (const num of arr) {
//         if (!map.has(num)) map.set(num, 0);
//         map.set(num, map.get(num) + 1);
//     }
//     // return map

//     // because javascript doesn't have built-in priority queue data structure, we need to just sort descending based on count to mimic maxHeap
//     const countPairs = [...map].sort((a, b) => b[1] - a[1]);
//     // return countPairs
//     const target = arr.length / 2; // we know its even, so we don't have to worry about remainders

//     let index = 0;
//     let counts = 0;
//     let sum = 0;

//     while (sum < target) {
//         sum += countPairs[index++][1];
//         counts++;
//     }

//     return counts;
// };

c(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]))
    // c(minSetSize([7, 7, 7, 7, 7, 7, 7]))
    // c(minSetSize([1000, 1000, 3, 5]))
const c = console.log.bind(console);


const test = function(nums) {

    const numsMap = nums.map((item, i) => ({ item: item, index: i }))
        // return numsMap[0];
    return mergeSort(numsMap);


}

c(test([5, 4, 3, 2, 1]))


function mergeSort(array) {

    if (array.length <= 1) return array;
    // return array;
    const mid = Math.ceil((array.length) / 2) - 1;

    // return mid;
    let left = 0;
    c(left);
    left = mergeSort(array.slice(0, mid + 1));

    let right = array.slice(mid + 1, array.length)
        // return right;
    c(left);


}


// function log(num) {
//     // if (num > 15) {
//     //     return;
//     // }
//     console.log(num);
//     log(num - Math.random(10000000, 1000000000));
// }
// const num = Number.MAX_SAFE_INTEGER;
// c(log(num));
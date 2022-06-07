const arr = [{ name: "test" }, { name: "test1" }, { name: "test2" }]


const fruites = ['apple', 'grapes', 'orange']

// arr.map((n, i) => {
//     console.log(n.name);
// })

// fruites.map((n, i) => {
//     console.log(n);
//     console.log('i' + i);
// })


// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var doubles = number.map((n) => { return (i * 2) })

// console.log(doubles);

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);
const map2 = array1.map((x) => { return x * 2 }); //same shit as map1
const map3 = array1.map((_, x) => { return x * 2 }); //"_" used for not using first parameter in the function 

// console.log(map1);
// console.log(map2);
console.log(map3);


function getSubArrays(arr) {
    var len = arr.length,
        subs = Array(Math.pow(2, len)).fill(0);
    // return subs;
    return subs.map((_, i) => {

        var j = -1,
            k = i,
            res = [];
        while (++j < len) {
            k & 1 && res.push(arr[j]); //k & 1  means k % 2
            k = k >> 1; // k>>1 means k/2
        }
        return res;
    }).slice(1); //slice(1) removes the first array form list which is empty here
}

console.log(JSON.stringify(getSubArrays([1, 2, 3, 4, 5])));
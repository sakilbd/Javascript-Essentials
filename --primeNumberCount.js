// https://leetcode.com/problems/count-primes/
const c = console.log.bind(console);

//time limit exceedes
// var countPrimes = function(n) {
//     let count = 1;
//     if (n <= 2) {
//         return 0; //number of prime numbers
//     }
//     for (let x = 3; x < n; x++) {
//         isPrime(x) == true ? count++ : "";
//         // c(x);
//     }
//     return count;
// };

// const isPrime = (num) => {
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return true;
// };


//from community but didnot get it how they did it 
var countPrimes = function(n) {
    if (n < 3) {
        return 0;
    };
    let arr = new Array(n).fill(1);
    for (let i = 2; i * i < n; i++) {
        if (!arr[i]) {
            continue;
        };
        for (let j = i * i; j < n; j += i) {
            arr[j] = 0;
        };
    };
    return arr.reduce((a, b) => b + a) - 2;
};

c(countPrimes(10));
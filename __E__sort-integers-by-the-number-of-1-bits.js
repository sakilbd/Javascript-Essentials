// https: //leetcode.com/problems/sort-integers-by-the-number-of-1-bits/description/
const c = console.log.bind(console);

// by me but high time complexity
var sortByBits = function(arr) {
    return arr.sort((a, b) => {
        const aCalcValue = a
            .toString(2)
            .split("")
            .filter((a) => a != 0).length;
        const bCalcValue = b
            .toString(2)
            .split("")
            .filter((a) => a != 0).length;
        if (aCalcValue == bCalcValue) {
            return a - b
        } else {
            return aCalcValue - bCalcValue
        }
    });

};

//from community
var sortByBits = function(arr) {
    b = [];
    for (var i = 0; i < arr.length; i++) {
        c = 0;
        for (var j = arr[i]; j > 0; j = j >> 1) {
            if (j & 1 == 1) {
                c++;
            }
        }
        b.push(c)
    }
    for (var i = 0; i < b.length; i++) {
        var key = b[i];
        var k = arr[i]
        for (var j = i - 1; j >= 0; j--) {
            if (b[j] > key || b[j] == key && arr[j] > k) {
                arr[j + 1] = arr[j]
                b[j + 1] = b[j]
            } else
                break;
        }
        b[j + 1] = key
        arr[j + 1] = k
    }

    return (arr)
};

c(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
c(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]));
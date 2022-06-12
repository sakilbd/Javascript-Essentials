//LeetCode 1695. Maximum Erasure Value
//has time complexity issue with the given input got runtime error and passed the first test case.

const c = console.log.bind(console);

var maximumUniqueSubarray = function(arr) {
    const unique = (value, index, self) => {
        return self.indexOf(value) === index;
    };
    arr = arr.filter(unique);
    // return arr;
    var len = arr.length,
        subs = Array(Math.pow(2, len)).fill(0);
    // return subs.length;
    var addArr = [];
    var res = [];
    subs.map((_, i) => {
        // c(i);
        var j = -1,
            k = i;

        res = [];
        while (++j < len) {
            k % 2 && res.push(arr[j]); //k & 1  means k % 2
            k = k >> 1; // k>>1 means k/2

            // console.log("printing K" + k + " " + "printing i" + i);
        }

        c(res);
        var add = 0;
        res.map((item, k) => {
            add = add + item;
        });

        addArr.push(add);
    });
    // c(res);
    // console.log(addArr);
    // const finalResult = addArr.sort();
    // console.log(finalResult);
    return addArr[addArr.length - 1];
};

c(
    maximumUniqueSubarray([
        28, 7320, 3661, 3458, 8708, 7632, 7434, 4643, 2694, 2619, 4665, 896, 2550,
        4881, 7080, 3373, 3160, 4852, 4296, 1764, 9745, 432, 9191, 7257, 5325, 1612,
    ])
);
// https://leetcode.com/problems/sort-integers-by-the-power-value/

const c = console.log.bind(console);

var getKth = function(lo, hi, k) {
    let arr = [];

    for (let i = lo; i <= hi; i++) {
        let value = i;
        let itteration = 0;
        while (value != 1) {
            value = value % 2 === 0 ? (value / 2) : ((3 * value) + 1);
            itteration++;
            // c(value)
            // value--;
        }
        arr.push([i, itteration]);
        // c("#####################")
    }
    arr.sort((a, b) => a[1] - b[1]);
    return arr[k - 1][0];

};

c(getKth(12, 15, 2));
c(getKth(7, 11, 4));
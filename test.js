const c = console.log.bind(console);


var hIndex = function(citations) {

    let h = 0;
    let n = citations.length;
    let rightLength, leftLength;
    // rightLength = 68
    // return rightLength;
    for (let i = n; i > 0; i--) {
        leftLength = i - 1;
        rightLength = n - i + 1;
        h = citations[i - 1];
        // c("citation :" + citations[i - 1])
        // c("H :" + h)
        // c("left :" + leftLength);
        // c("right :" + rightLength);
        // c("n-h :" + (n - h));
        // c("########################################");

        if (rightLength >= h && n - h == leftLength) {
            return citations[i - 1];

        } else {
            continue;
        }

    }
};


// c(hIndex([0, 1, 3, 5, 6]))
// c(hIndex([1, 2, 100]));
// c(hIndex([0, 1, 3, 5, 6]));



// c(hIndex([0]));
// c(hIndex([0, 0]))
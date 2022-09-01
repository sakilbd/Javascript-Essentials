// https://leetcode.com/problems/guess-number-higher-or-lower/


// quick sort 

const c = console.log.bind(console);

var guessNumber = function(n) {
    if (n == 1) {
        return 1;
    }
    // let i = 1;
    let p = 0;

    let start = 1;
    let end = n;


    while (p < n) {
        let mid = Math.trunc((end + start) / 2);
        // c("mid :" + mid);
        if (guess(mid) == 0) {
            return mid;
        }
        if (guess(mid) == 1) {
            // c("midInside 1:" + mid)
            start = mid + 1;

        } else if (guess(mid) == (-1)) {
            // c("midInside -1:" + mid)
            end = mid - 1;

        }
        // i++;
        // c(p)
        p++;
    }
    // return guess(n)
};

function guess(num) {
    let pick = 147859658;
    // let pick = 6;
    if (num > pick) {
        return -1;
    } else if (num < pick) {
        return 1;
    } else {
        return 0;
    }
}

c(guessNumber(2126753390));

// c(guessNumber(10))

c(guessNumber(1))
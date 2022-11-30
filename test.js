// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/

const c = console.log.bind(console);

var numberOfSubstrings = function(s) {
    let length = s.length;

    // return length
    let x = 0;
    let count = 0;
    while (x <= length) {
        let y = x;
        // c("X :" + x);
        // c("Y :" + y);
        while (y <= length) {
            if (y < length - 2) {

                let slice = s.slice(x, y + 3);
                c([...new Set(slice.split(''))])

            } else {
                break
            }
            y++;
            // c("Y :" + y);

        }

        x++;
    }


};

c(numberOfSubstrings("abcabcaa"));
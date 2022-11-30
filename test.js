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

                // c(slice)
                if ([...new Set(slice.split(""))].length == 3) {
                    // count = count + ([...new Set(slice.split(""))].length == 3 ? 1 : 0);
                    count += length - y + -2
                        // c("length " + (length - y + -2))
                        // c("y :" + y)
                        // c(count)
                    break;
                }

            } else {
                break;
            }
            y++;
            // c("Y :" + y);
        }
        // c(x)
        x++;
    }

    return count;
};

c(numberOfSubstrings("abcabcaa"));
// c(numberOfSubstrings());
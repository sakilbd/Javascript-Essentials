const c = console.log.bind(console);
// https://www.hackerrank.com/challenges/bigger-is-greater/problem

// solution with 1 test case fail out of 6


// function biggerIsGreater(w) {
//     var p = w.split('')
//         // return w.sort();

//     for (let i = p.length - 1; i > 0; i--) {
//         let j = i - 1;
//         let temp = 0;
//         // c(p);
//         // c(p[i]);
//         // c(p[j]);

//         // c(p[i].charCodeAt(0));
//         // c(p[j].charCodeAt(0));
//         if (p[j].charCodeAt(0) < p[i].charCodeAt(0)) {
//             temp = p[i];
//             p[i] = p[j];
//             p[j] = temp;
//             // c(p)
//             break;

//         }


//     }
//     let final = ''
//     p.forEach(item => {
//         final = final.concat(item);
//     })
//     if (final == w) {
//         return "no answer";
//     } else {
//         return final;
//     }
// }

//solution which accepted
function biggerIsGreater(w) {

    let arr = w.split("");
    for (let i = arr.length - 2; i >= 0; i--) {
        // starting from end to find the index that there is/are greater
        // characters after that and store that character(s)
        let biggerChars = arr.slice(i + 1).filter((v) => arr[i] < v);
        if (biggerChars.length > 0) {
            // finde the smallest character that is also bigger than the previous character
            let index;
            index = i + 1 + arr.slice(i + 1).indexOf(biggerChars.sort()[0]);
            // and swap those with each other
            [arr[i], arr[index]] = [arr[index], arr[i]];
            // also sort the rest of the string after pivot character to have
            // the smallest permutation bigger than the original string
            return arr
                .slice(0, i + 1)
                .concat(arr.slice(i + 1).sort())
                .join("");
        }
    }
    // if we cant find a pivot character, the original string is the answer
    return "no answer";
}


c(biggerIsGreater('abcd'));
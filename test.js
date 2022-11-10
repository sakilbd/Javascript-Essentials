const c = console.log.bind(console);

var smallestSubsequence = function(s) {
    let res = "";
    for (let i = 0; i < s.length; i++) {
        let slice = s.slice(i, s.length);

        // slice.split('').some(item => item == s[i]) ? '' : res += s[i];
        // c(
        //     slice.split("").every((e, j, a) => {
        //         // c(s[i])
        //         c(a)
        //         c(e)
        //         c(j)
        //             // c(a.indexOf(e) === j);
        //         return a.indexOf(e) === j;

        //     })
        // );
        // return
        slice.split("").every((e, j, a) => a.indexOf(e) === j) ? res += s[i] : '';
        // c(slice);

    }
    return res;
};

// c(smallestSubsequence("bcabc"));

// c(smallestSubsequence("cbacdcbc"))
c(smallestSubsequence("abcc"))
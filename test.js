const c = console.log.bind(console);

var numberOfSubstrings = function(s) {

    let length = s.length;
    let x = 0;
    while (x <= length) {
        let y = x;

        while (y <= length) {
            c(s.slice(y, 3));

            c("Y :" + y);
            y++;
        }
        c("X :" + x);
        x++

    }



    return s.slice(1, 3)
};


c(numberOfSubstrings("abcabc"))
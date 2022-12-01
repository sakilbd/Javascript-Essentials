const c = console.log.bind(console);

var compress = function(chars) {
    let curChar = chars[0];


    let count = 0;
    let temp = [...chars];
    chars.length = 0;
    let res = [];
    temp.forEach((el, i) => {

        if (el === curChar) {
            count++;
            if (i == temp.length - 1) {
                chars.push(curChar);
                count > 1 ? chars.push(count) : "";
            }
            // c("if CurChar : " + curChar);
            // c("if i : " + i)
            // c("if count :" + count)

        } else {

            chars.push(curChar);
            count > 1 ? chars.push(count) : "";
            // c(curChar);
            // c(i)
            // c("count :" + count)
            curChar = el.toString();
            count = 1;
            // c("new Char : " + curChar);
            // c("new I : " + i)

        }
        // c("global el :" + el)
        // c("global i : " + i)
        // c("global curChar :" + curChar)

    });

    return chars;
};

c(compress(["p", "a", "a", "b", "b", "c", "c"]));
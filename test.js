const c = console.log.bind(console);

var compress = function(chars) {

    let curChar = chars[0];


    let count = 0;
    let temp = [...chars];

    temp.forEach((el, i) => {

        if (el === curChar) {
            chars.reverse().pop();
            chars.reverse();
            count++;
            if (i == temp.length - 1) {
                chars.push(curChar);
                count > 1 ? chars.push(count.toString()) : "";

            }
            // c("if CurChar : " + curChar);
            // c("if i : " + i)
            // c("if count :" + count)

        } else {
            chars.reverse().pop();
            chars.reverse();
            chars.push(curChar);
            count > 1 ? chars.push(count.toString()) : "";
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

    return chars
};

c(compress(["p", "a", "a", "b", "b", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c"]));
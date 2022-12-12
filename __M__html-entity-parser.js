// https://leetcode.com/problems/html-entity-parser/description/
const c = console.log.bind(console);


// by me around 250ms 
var entityParser = function(text) {
    let map = {
        "&quot;": '\\"', // "\" used to assign special character \"
        "&apos;": "'",
        "&amp;": "&",
        "&gt;": ">",
        "&lt;": "<",
        "&frasl;": "/",
    };

    return text
        .split(" ")
        .map((item) => {
            if (map[item]) {
                return map[item];
            } else {
                // return item
                let temp = item;
                let keyArr = []
                for (var key in map) {
                    temp = temp.replaceAll(key, map[key])
                    if (temp != item) {
                        keyArr.push(key);
                    }
                    temp = item;

                }
                keyArr.forEach(item => {
                    temp = temp.replaceAll(item, map[item])
                })
                return temp
            }
        })
        .join(" ");
};


// by me around 166 ms 
var entityParser = function(text) {
    let map = {
        "&quot;": '\\"', // "\" used to assign special character \"
        "&apos;": "'",
        "&amp;": "&",
        "&gt;": ">",
        "&lt;": "<",
        "&frasl;": "/",
    };
    let str = text.replace(/&quot;|&apos;|&amp;|&gt;|&lt;|&frasl;/gi, function(matched) {
        return map[matched];
    });
    return str;
}

c(entityParser("&amp; is an HTML entity but &ambassador; is not."))
c(entityParser("and I quote: &quot;...&quot;"))
c(entityParser("&amp;gt;"))

c(entityParser(" &apos;&lt;!w8+0U({ &gt;"))
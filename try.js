const c = console.log.bind(console);

let p = "&quot;...&quot;";

c(p.replaceAll("&quot;", "Q"));
let map = {
    "&quot;": '\\"', // "\" used to assign special character \"
    "&apos;": "'",
    "&amp;": "&",
    "&gt;": ">",
    "&lt;": "<",
    "&frasl;": "/",
};

for (var key in map) {
    c(key);
}

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
                for (var key in map) {
                    temp = temp.replaceAll(key, map[key])
                    if (temp != item) {
                        return temp;
                    }

                }
                return item
            }
        })
        .join(" ");
};

c(entityParser("&amp; is an HTML entity but &ambassador; is not."))
c(entityParser("and I quote: &quot;...&quot;"))
c(entityParser("&amp;gt;"))
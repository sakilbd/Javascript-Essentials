const c = console.log.bind(console);
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
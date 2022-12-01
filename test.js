const c = console.log.bind(console);

var compress = function(chars) {
    chars.forEach(el => {
        c(el)

    });
};

c(compress(["a", "a", "b", "b", "c", "c", "c"]))
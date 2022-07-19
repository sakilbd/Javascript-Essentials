const c = console.log.bind(console);


var numberOfLines = function(widths, s) {
    let alphabates = "abcdefghijklmnopqrstuvwxyz";
    let map = new Map();
    for (let i in alphabates) {
        map.set(alphabates[i], widths[i])

    }

};

c(numberOfLines([4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "abcdefghijklmnopqrstuvwxyz"))
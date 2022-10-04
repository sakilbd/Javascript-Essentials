const c = console.log.bind(console);

var findAndReplacePattern = function(words, pattern) {
    let map = new Map();

    pattern.split("").forEach((item) => {
        map.set(item, map.get(item) + 1 || 1);
    });
    let checkArr = []
    for (let [key, value] of map.entries()) {
        checkArr.push(value)
    }

    return words.filter((item) => {
        let map = new Map();
        item.split('').forEach((item) => {
            map.set(item, map.get(item) + 1 || 1);
        });
        let check = []
        for (let [key, value] of map.entries()) {
            check.push(value)
        }
        // c(check)
        if (check.length == checkArr.length) {
            let bool = false;
            checkArr.forEach((elem, i) => {
                if (elem == check[i]) {
                    bool = true;

                } else {
                    false
                }
            })
            if (bool) {
                return item;
            }
        }
    });


};

c(findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb"));

c(findAndReplacePattern(['a', 'b', 'c'], 'a'))
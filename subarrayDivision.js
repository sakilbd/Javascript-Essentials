const c = console.log.bind(console)


function birthday(s, d, m) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        let arr = s.slice(0 + i, m + i);
        if (arr.reduce((a, b) => a + b) == d) {
            count++
        }
        c(arr);
    }
    return count;
}

c(birthday([2, 2, 1, 3, 2], 4, 2))
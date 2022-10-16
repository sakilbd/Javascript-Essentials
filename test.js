const c = console.log.bind(console);

var printVertically = function(s) {
    const arr = s.split(' ')
    const maxLength = Math.max(...arr.map(word => word.length))

    return [...Array(maxLength)].map((_, i) => arr.map(word => word[i] || ' ').join('').trimEnd())
};


var test = (s) => {
    return s.trimEnd().split('');

}

// c(printVertically("HOW ARE YOU"))

c(test("  sakil  "))

// c(printVertically("TO BE OR NOT TO BE"));
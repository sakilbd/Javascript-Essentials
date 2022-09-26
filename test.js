const c = console.log.bind(console);

var prefixCount = function(words, pref) {
    return words.filter((item) => item.startsWith(pref)).length;
};

c(prefixCount(["pay", "attention", "practice", "attend"], "at"));
// https://leetcode.com/problems/rearrange-words-in-a-sentence/

const c = console.log.bind(console);

var arrangeWords = function(text) {
    let res = text.toLowerCase().split(" ").sort((a, b) => a.length - b.length).join(" ");
    return res.charAt(0).toUpperCase() + res.slice(1, res.length);
};

c(arrangeWords("Leetcode is okul cool"));
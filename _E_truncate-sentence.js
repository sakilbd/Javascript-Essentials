// https://leetcode.com/problems/truncate-sentence/
const c = console.log.bind(console);

var truncateSentence = function(s, k) {
    return s.split(' ').slice(0, k).join(' ');
};

c(truncateSentence("Hello how are you Contestant", 4))
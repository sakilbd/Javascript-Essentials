// https://leetcode.com/problems/uncommon-words-from-two-sentences/description/

const c = console.log.bind(console);

var uncommonFromSentences = function(s1, s2) {
    let combination = `${s1} ${s2}`.split(" ");

    let map = {};
    let rtnArr = [];

    for (let i = 0; i < combination.length; i++) {
        if (!map[combination[i]]) map[combination[i]] = 1;
        else map[combination[i]]++;
    }

    for (const word in map) {
        // c(word)
        if (map[word] === 1) rtnArr.push(word);
    }

    return rtnArr;
};

// c(uncommonFromSentences("this apple is sweet", "this apple is sour"));
// c(uncommonFromSentences("apple apple", "banana"));

c(uncommonFromSentences("s z z z s", "s z ejt"));
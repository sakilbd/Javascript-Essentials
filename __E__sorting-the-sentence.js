// https://leetcode.com/problems/sorting-the-sentence/

const c = console.log.bind(console);
var sortSentence = function(s) {
    let sSplit = s.split(' ')

    let arr = sSplit.map(item => {
        return [item.substr(0, item.length - 1), item.slice(-1)]
            // return item;
    })
    arr.sort((a, b) => {
        return a[1] - b[1]
    })
    let resStr = ''
    arr.forEach(item => {
        resStr += item[0] + " "
    })
    return resStr.substr(0, resStr.length - 1) // excludes last space 
};

c(sortSentence("is2 sentence4 This1 a3"))
// https: //leetcode.com/problems/find-words-that-can-be-formed-by-characters/
const c = console.log.bind(console);

var countCharacters = function(words, chars) {
    let arr = [];
    let bool = true;
    words.forEach(item => {
        let temp = chars.split('');
        try {
            item.split('').forEach(i => {
                if (temp.includes(i)) {
                    let index = temp.indexOf(i);
                    temp.splice(index, 1);
                    bool = true;
                } else {
                    bool = false;
                    throw "fuck";
                }

            });
        } catch (err) {

        }
        if (bool == true) {
            arr.push(item);
        }
    })
    let count = 0
    let res = arr.map(item => {
        count += item.length;
        return item.length
    })
    return count;


};

c(countCharacters(["cat", "bt", "hat", "tree"], "atach"))
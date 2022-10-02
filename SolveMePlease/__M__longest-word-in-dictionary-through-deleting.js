// https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/

// some test cases passed 
const c = console.log.bind(console);

var findLongestWord = function(s, dictionary) {
    let sortedDict = dictionary.sort((a, b) => b.length - a.length);
    let check = true;
    let arr = [];
    let tempS = s;
    sortedDict.forEach((item) => {
        // try {
        item.split("").forEach((i) => {
            // c(item.includes(i))

            if (!tempS.includes(i)) {
                check = false;
                // throw "err";
            } else {
                // c(i);
                // c(s.indexOf(i));
                let splited = tempS.split('')
                let splice = (splited.splice(tempS.indexOf(i), 1));
                tempS = splited.join('')
                    // c(tempS)
                    // c("|")
                check = true;
            }
        });
        // } catch (err) {
        // c("fuck");
        // }
        // c('shit')

        if (check) {
            arr.push(item);
        }
        tempS = s;
    });
    // return arr.sort()
    // return arr.sort((a, b) => {
    //     return a.localeCompare(b)
    // });
    let res = arr.filter(item => { return item.length == arr[0].length }).sort()[0]
        // return res;
        // return res.startsWith('ewaf');

    if ([...new Set(arr.join(''))].length == 1) {
        return res;
    }
    let finalArr = []
    arr.forEach(item => {
        if (res.startsWith(item) && item.length > 2) {
            finalArr.push(item)
        }
    })
    return finalArr[1] ? finalArr[1] : res ? res : ''
};

c(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]));


c(findLongestWord("abce", ["abe", "abc"]))


c(findLongestWord("aewfafwafjlwajflwajflwafj", ["apple", "ewaf", "awefawfwaf", "awef", "awefe", "ewafeffewafewf"]))
c(findLongestWord('aaa', ['aaa', 'aa', 'a']))

c(findLongestWord("bab", ["ba", "ab", "a", "b"]))
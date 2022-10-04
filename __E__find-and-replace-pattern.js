// https://leetcode.com/problems/find-and-replace-pattern/

const c = console.log.bind(console);

var findAndReplacePattern = function(words, pattern) {
    let map = new Map();

    pattern.split("").forEach((item, i) => {

        map.get(item) ? map.set(item, String(map.get(item)) + i) : map.set(item, String(i)); //saving indexes

    });

    let checkArr = []
    for (let [key, value] of map.entries()) {
        checkArr.push(value)
    }

    return words.filter((item) => {
        let map = new Map();
        item.split('').forEach((item, i) => {
            map.get(item) ? map.set(item, String(map.get(item)) + i) : map.set(item, String(i));
        });
        let check = []
        for (let [key, value] of map.entries()) {
            check.push(value)
        }
        if (check.length == checkArr.length) {
            let bool = false;
            try {
                checkArr.forEach((elem, i) => {
                    if (parseInt(elem) == parseInt(check[i])) {
                        bool = true;
                    } else {
                        bool = false;
                        throw "shit"
                    }
                })
            } catch (err) {

            }

            if (bool) {
                return item;
            }
        }
    });


};

//from community 
// var findAndReplacePattern = function(words, pattern) {
//     let result = [];

//      words.forEach((item) => {
//        let mapper = new Map();
//        let values = new Set();
//        for (let idx = 0; idx < item.length; idx++) {
//          if (!pattern[idx]) break;

//          if (mapper.has(item[idx])) {
//            if (mapper.get(item[idx]) !== pattern[idx]) {
//              break;
//            }
//          } else {
//            if (values.has(pattern[idx])) {
//              break;
//            }
//            mapper.set(item[idx], pattern[idx]);
//            values.add(pattern[idx]);
//          }
//          if (item.length - 1 === idx) {
//            result.push(item);
//          }
//        }
//      });
//      return result;
//    };

c(findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb"));

c(findAndReplacePattern(['a', 'b', 'c'], 'a'))


c(findAndReplacePattern(["badc", "abab", "dddd", "dede", "yyxx"], "baba"))


c(findAndReplacePattern(["qqcojjumwp", "mqidrqudxu", "xwrvnueult", "lubbymxyro", "fcvxuskhcl"],
    "rdzkpkbmda"))
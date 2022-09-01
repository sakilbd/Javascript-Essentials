// https://leetcode.com/problems/word-break-ii/

const c = console.log.bind(console);

var wordBreak = function(s, wordDict) {

    let arr1 = [1, 2, 3, 4];
    let arr2 = [2, 4];
    let response = arr1.filter(item => !arr2.includes(item));

    let bool = true;

    // return string;
    // let item = "and";
    // return string.replace(item, '')
    let resArray = []
    while (bool) {
        const dict = [...wordDict];

        var string = s;
        let sentence = [];
        wordDict.forEach((item, i) => {

            var checkStartsWith = item.startsWith(string[0]);
            if (checkStartsWith) {
                string = string.replace(item, "");
                // dict.splice(i, 1);
                // c(dict)
                sentence.push(item);

                // c('string :' + string);

                // c(string);
            }
            // c(checkStartsWith);

        });
        let restDictWords = dict.filter(item => !sentence.includes(item));
        // c(restDictWords);


        // c(sentence);
        // c(dict);
        resArray.push(sentence.join().split(',').join(' '));

        bool = false;
    }

    // let q = resArray[0].join().split(',').join(' ');
    // let p = [];
    // p.push(q);
    return resArray;
};

var str = "Thatlike";
let __like = "like";
var cleanStr = str.replace(__like, "sexy");
// c(cleanStr);
c(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
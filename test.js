// https://leetcode.com/problems/reorder-data-in-log-files/

const c = console.log.bind(console);


var reorderLogFiles = function(logs) {
    // return logs[0].charCodeAt(0);
    logs.sort((a, b) => (b.split(' ')[0].charCodeAt(0) - a.split(' ')[0].charCodeAt(0)))
    let letArr = [];
    let digArr = []
    logs.forEach(item => {
        item.startsWith('l') ? letArr.push(item) : digArr.push(item)
    })

    letArr.sort((a, b, i) => {
        let aCode = 0;
        let bCode = 0;
        a.split(' ').forEach((item, i) => {
            if (i > 0) {
                for (let p = 0; p < item.length; p++) {
                    aCode += item.charCodeAt(p);

                }
            }
        })
        b.split(' ').forEach((item, i) => {
            if (i > 0) {
                for (let p = 0; p < item.length; p++) {
                    bCode += item.charCodeAt(p);

                }
            }
        })
        return aCode - bCode




    })
    return [...letArr, ...digArr];

};


c(reorderLogFiles(["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"]))
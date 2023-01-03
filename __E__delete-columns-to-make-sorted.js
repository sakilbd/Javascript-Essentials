// https://leetcode.com/problems/delete-columns-to-make-sorted/description/

const c = console.log.bind(console);



// by me around 250ms 
var minDeletionSize = function(strs) {
    let res = 0;
    let length = strs[0].length;

    for (let i = 0; i < length; i++) {
        let string = "";
        strs.forEach((item) => {
            string += item[i]; // does calucaiton in every situation 
        });
        let temp = string
            .split("")
            .sort((a, b) => a.charCodeAt() - b.charCodeAt())
            .join("");
        // c(temp);
        temp.localeCompare(string) ? res++ : "";
    }
    return res;
};


// by community  around 100ms 
var minDeletionSize = function(strs) {
    let result = 0
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length - 1; j++) {
            if (strs[j][i] > strs[j + 1][i]) {
                result++ // breaks ato index saves time 
                break
            }
        }
    }
    return result
};
c(minDeletionSize(["zyx", "wvu", "tsr"]))

c(minDeletionSize(["cba", "daf", "ghi"]));
// https://leetcode.com/problems/find-common-characters/submissions/

const c = console.log.bind(console);
// var commonChars = function(words) {
//     let res = [];
//     let arrCopy = [...words];
//     let updateCheck = true;
//     for (let i of words[0]) {
//         try {
//             arrCopy.filter((item, k) => {
//                 if (!item.includes(i)) {
//                     updateCheck = false;
//                     throw k;
//                 } else {
//                     updateCheck = true;
//                 }

//             });
//         } catch (err) {
//             //used to break the filter 
//         }
//         if (updateCheck) {
//             arrCopy.filter((item, k) => {
//                 var re = new RegExp(i, '');
//                 let replaceItem = item.replace(re, "");
//                 arrCopy[k] = replaceItem;
//             });

//             res.push(i);
//         }
//     }

//     return res;
// };


///from community 
var commonChars = function(A) {
    let res = [...A[0]];
    for (let i = 1; i < A.length; i++) {
        res = res.filter(c => {
            const l = A[i].length;
            A[i] = A[i].replace(c, "");
            return l > A[i].length;
        });
    }
    return res;
};

c(commonChars(["bella", "label", "roller"]));

c(commonChars(["cool", "lock", "cook"]));
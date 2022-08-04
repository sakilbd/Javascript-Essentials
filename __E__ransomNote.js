// https://leetcode.com/problems/ransom-note/

const c = console.log.bind(console);

var canConstruct = function(ransomNote, magazine) {

    let magArray = magazine.split('');

    let ransArray = ransomNote.split('');

    for (let i in magArray) {
        if (ransArray.length == 0) {
            return true;
        }
        for (let j in ransArray) {
            if (magArray[i] == ransArray[j]) {
                ransArray.splice(j, 1);
            }
        }
    }
    return ransArray.length == 0 ? true : false;
};


// optimized with 100ms on avg time complexity 

// var canConstruct = function(ransomNote, magazine) {
//     let ransArray = ransomNote.split('');

//     if (ransomNote.length > magazine.length) {
//         return false;
//     }

//     let oldMagLength = magazine.length;

//     ransArray.forEach(item => {
//         magazine = magazine.replace(item, "")
//             // c(magazine)
//     })
//     if (oldMagLength == (magazine.length + ransomNote.length)) {
//         return true;

//     } else {
//         return false;
//     }
// };

c(canConstruct("abc", "baa"));



c(canConstruct("fffbfg",
    "effjfggbffjdgbjjhhdegh"))
// https://leetcode.com/problems/reverse-words-in-a-string-iii/

const c = console.log.bind(console);


///done by me 
var reverseWords = function(s) {
    const result = s.split(" ").map((item) => {
        return item.split("").reverse().join("");
    });
    const finalArray = "";
    return result.reduce((a, b) => a + ' ' + b);
};


//more optimized solution 
// var reverseWords = function(s) {
//     return   s.split(" ").map((word) => word.split("").reverse().join("")).join(" ");     
//   };

c(reverseWords("Let's take LeetCode contest"));
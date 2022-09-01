// https://leetcode.com/problems/valid-anagram/submissions/

const c = console.log.bind(console);



//done by me 
var isAnagram = function(s, t) {
    let s_split = s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt());
    let t_split = t.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt());
    let s_str_values = s_split.reduce((a, b) => a.toString().charCodeAt() + b.toString().charCodeAt());
    let t_str_values = t_split.reduce((a, b) => a.toString().charCodeAt() + b.toString().charCodeAt());
    if (s_str_values == t_str_values) {
        for (let i in s_split) {
            if (s_split[i] != t_split[i]) {
                return false;
            }

        }
        return true;
    } else {
        return false;
    }

    // return t_split
};

//les time complexity 
// let isValidAnagram = false;
// var isAnagram = function (s, t) {
// 	sLen = s.length;
// 	tLen = t.length;
// 	if (sLen !== tLen) {
// 		isValidAnagram = false;
// 		return isValidAnagram;
// 	} else if (sLen === 0 && tLen === 0) {
// 		isValidAnagram = true;
// 	}
// 	for (let i = 0; i < sLen; i++) {
// 		for (let j = 0; j < sLen; j++) {
// 			if (s[i] == t[j]) {
// 				s = s.replaceAll(s[i], '');
// 				t = t.replaceAll(t[j], '');
// 				isAnagram(s, t);
// 				return isValidAnagram;
// 			}
// 		}
// 		s = s.replace(s[i], '');
// 		isAnagram(s, t);
// 	}
// 	return isValidAnagram;
// };


c(isAnagram("ac", "bb"))
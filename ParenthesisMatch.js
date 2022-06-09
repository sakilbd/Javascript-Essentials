https: //leetcode.com/problems/valid-parentheses/submissions/
    var isValid = function(s) {
        // return s[0] == s[1] ? true : false;
        const brackets = {
            "(": ")",
            "[": "]",
            "{": "}",
        };


        let bracketHolder = [];
        for (i = 0; i < s.length; i++) {
            if (brackets[s[i]]) {
                bracketHolder.push(brackets[s[i]]);
            } else if (s[i] != bracketHolder.pop()) {
                return false
            }
        }

        return !bracketHolder.length; // !0 = true & !1 = falase ;0 means false ,1 means true;



    };

console.log(isValid("()"));
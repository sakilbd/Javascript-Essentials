// https://leetcode.com/problems/masking-personal-information/

const c = console.log.bind(console);

var maskPII = function(s) {
    let split = s.split('@');
    if (split.length == 2) {
        let res = split[0][0].toLowerCase() + (Array(5).fill('*')).join('') + split[0][split[0].length - 1].toLowerCase() + '@' + split[1].toLowerCase()
        return res;
    } else {
        let str = s.replace(/[+-]|[-]|[(]|[)]|[ ]/g, function(matched) {
            return '';
        });
        let length = str.length;
        if (length > 10) {
            let countryCodeLength = length - 10;

            return "+" + Array(countryCodeLength).fill('*').join('') + '-***-***-' + str.slice(-4)
        } else {
            return "***-***-" + str.slice(-4)
        }
    }
};


c(maskPII("LeetCodE@LeetCode.com"))
c(maskPII("1(234)567-89 09"))
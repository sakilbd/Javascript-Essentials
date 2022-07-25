// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator#Relationship_with_the_optional_chaining_operator_
// https://leetcode.com/problems/number-of-1-bits/

const c = console.log.bind(console);

//toString(2) accepts the solution otherwise test case fail.. dont know why man
var hammingWeight = function(n) {
    let stringConvert = n.toString(2).split('');
    // return stringConvert;

    let count = 0
    for (let i = 0; i < stringConvert.length; i++) {
        if (stringConvert[i] == 1) {
            count++;
        }


    }
    return count;
};

c(hammingWeight("11111111111111111111111111111101"))
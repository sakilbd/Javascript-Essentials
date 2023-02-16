//  https://leetcode.com/problems/count-numbers-with-unique-digits/description/ 


function countNumbersWithUniqueDigits(n) {
    if (n === 0) {
        return 1;
    }

    let ans = 10; // 1-digit numbers

    for (let i = 2; i <= n; i++) {
        let choices = 9;
        for (let j = 1; j < i; j++) {
            choices *= (10 - j);
        }
        ans += choices;
    }

    return ans;
}
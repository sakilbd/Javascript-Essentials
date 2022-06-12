//https://www.hackerrank.com/challenges/the-birthday-bar/problem
/*Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

    Lily decides to share a contiguous segment of the bar selected such that:

    The length of the segment matches Ron's birth month, and,
    The sum of the integers on the squares is equal to his birth day.
    Determine how many ways she can divide the chocolate. 
    s=[2, 2, 1, 3, 2],
    d=4
    m=2
    */

const c = console.log.bind(console);

function birthday(s, d, m) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let arr = s.slice(0 + i, m + i);
        if (arr.reduce((a, b) => a + b) == d) {
            count++;
        }
        c(arr);
    }
    return count;
}

c(birthday([2, 2, 1, 3, 2], 4, 2));
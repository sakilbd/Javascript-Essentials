// https://www.hackerrank.com/challenges/sherlock-and-squares/problem?isFullScreen=true

const c = console.log.bind(console);


// with higher timecomplexity not approved
function squares(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        const p = Math.sqrt(i);
        if (p % 1 == 0) {
            c(p);
            count++;
        }
    }
    return count;
}
// with less time complexity which approved in hacker rank 
function squares(a, b) {
    let count = 0;
    let i = a;
    while (i <= b) {
        const p = Math.sqrt(i);
        if (p % 1 == 0) {
            c(p);
            i = (p + 1) * (p + 1);
            c(i);
            count++;
        } else {
            i++;
        }
        // i++;
    }
    return count;
}

c(squares(24, 49));
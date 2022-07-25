//https://www.hackerrank.com/challenges/circular-array-rotation/problem?isFullScreen=true
const c = console.log.bind(console);
//some test cases time complexities error
function circularArrayRotation(a, k, queries) {
    while (k--) {
        let arr = a.splice(a.length - 1, a.length);
        a.splice(0, 0, ...arr);
        // c(a);

    }
    return queries.map(item => {
        return a[item];
    })

}

c(circularArrayRotation([3, 4, 5], 2, [1, 2]))
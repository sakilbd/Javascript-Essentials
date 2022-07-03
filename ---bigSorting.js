const c = console.log.bind(console);

// https://www.hackerrank.com/challenges/big-sorting/problem

//passed all test cases except two ...
function bigSorting(unsorted) {
    const final = unsorted.map(item => {
        return parseInt(item) < 200000 ? parseInt(item) : item;
    })
    const finalInt = final.sort((a, b) => a - b);
    return finalInt.map(item => {
        return item.toString();
    })

}
c(bigSorting(['1', '200', '150', '3', '31415926535897932384626433832795']))
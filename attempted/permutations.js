// https://www.hackerrank.com/challenges/cards-permutation/problem
const c = console.log.bind(console);



function solve(x) {
    const set = [...new Set(x)];
    if (x.length - set.length == 1) {
        return permutations(x).length - 1;
    } else {
        return permutations(x).length;
    }


}

const permutations = arr => {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce(
        (acc, item, i) =>
        acc.concat(
            permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
                item,
                ...val,
            ])
        ), []
    );
};


// c(solve([0, 2, 3, 0]))

c(permutations(["a", "e", "i", "o", "u"]))
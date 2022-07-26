const c = console.log.bind(console);

function narcissistic(value) {
    let res = 0;
    for (let i of value.toString()) {
        res += Math.pow(i, value.toString().length);
    }

    return res.toString(2) === value.toString(2) ? true : false;
}

console.log(narcissistic(1));
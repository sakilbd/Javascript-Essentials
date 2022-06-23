const c = console.log.bind(console);

function findDigits(n) {
    const items = n.toString();
    let count = 0;
    for (let i = 0; i < items.length; i++) {
        n % items[i] == 0 ? count++ : '';
    }
    return count;

}

c(findDigits(124))
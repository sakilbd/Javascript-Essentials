const p = console.log.bind(console)
let letterLogs = ["2 abc", '1 abc', '0 xyz abc']

let a = "abc xyz"

p(letterLogs.sort((a, b) => {
    const aBody = a.slice(a.indexOf(' ') + 1);
    const bBody = b.slice(b.indexOf(' ') + 1);
    const c = aBody.localeCompare(bBody);

    if (c) {
        p("cosco")
        return c;
    }
    return a.localeCompare(b);
}))
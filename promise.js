const c = console.log.bind(console);

let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2) {
        resolve("oh yeah done babe");

    } else {
        reject("shit error thrown")
    }
})

p.then((message) => {
    c(message)
}).catch(message => {
    c(message);
})
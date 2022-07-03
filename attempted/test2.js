const c = console.log.bind(console);

const closure = (item) => {
    c(item);

    return function q(item2) {
        c(`return function with item : ${item}+item 2 which is ${item2}`);
    }
    return "shit";
}

const clo = closure("fuckyeah");

c(clo());
c(clo());
c(clo());
c(clo());
c(clo());
c(clo());
c(clo());
c(clo());
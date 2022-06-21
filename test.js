const c = console.log.bind(console);

function first() {
    var name = "mozzarella";

    function second() {
        c(name);
    }
    second();
}

c(first());
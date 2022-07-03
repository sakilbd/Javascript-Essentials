// https://exercism.org/tracks/javascript/exercises/coordinate-transformation/edit

// piece of data - val
//reference to next node - next
const c = console.log.bind(console);

function greeting(name) {
    c('Hello ' + name);
}

function processUserInput(callback) {
    var name = "John Doe";
    callback(name);
}

c(processUserInput(greeting));
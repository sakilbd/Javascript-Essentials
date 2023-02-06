const c = console.log.bind(console)

const numberOnly = (a, b, c) => {
    // boom boom way :/
    if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number') {
        return "all parameters should be number"
    }
    //smart way 1
    if (!([a, b, c].every(item => item == 'number'))) {
        return "all parameters should be number"
    }
    //smart way 2
    if ([a, b, c].some(item => item != 'number')) {
        return "all parameters should be number"
    }
    return "all parameters are number"
}


c(numberOnly(1, 2, "2"))
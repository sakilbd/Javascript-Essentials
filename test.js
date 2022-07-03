const c = console.log.bind(console);

function introTutorial(V, arr) {
    return arr.indexOf(V);

}


c(introTutorial(4, [1, 4, 5, 7, 9, 12]))
const c = console.log.bind(console);


function angryProfessor(k, a) {
    let present = 0;
    let late = 0;

    a.forEach((item) => {
        item <= 0 ? present++ : late++;
    })
    return present >= k ? 'NO' : 'YES';

}


c(angryProfessor(4, [-2, -1, 0, 1, 2]))
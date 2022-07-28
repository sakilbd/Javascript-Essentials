const c = console.log.bind(console);
let counter = 0;
var findRotation = function(mat, target) {
    let j = 0;

    let m = mat.map(item => {
        let array = [];
        for (let i = mat.length - 1; i >= 0; i--) {
            array.push(mat[i][j]);

        }
        j++;
        return array;
    });
    // return m;
    // let p = target.filter(element => m.includes(element));
    c(m);

    // c(p);
    // c(target);
    let bool = false;
    for (let i = 0; i < mat.length; i++) {
        for (let k = 0; k < mat[0].length; k++) {
            if (target[i][k] == m[i][k]) {
                bool = true;
            } else {
                bool = false;
                break;
            }
        }
        // c(m[0][i]);
        // if (target[0][i] == m[0][i]) {
        //     bool = true;
        // } else {
        //     bool = false;
        // }
    }
    // c("bool :" + bool);
    if (counter > 6) {
        return false;
    }
    if (bool == true) {
        return true;
    } else if (bool == false) {
        counter++;
        findRotation(m, target);
    }
    // if (bool == false) {
    //     return false;
    // } else {
    //     return true;
    // }

    // let bool = false;
    // for (let i = 0; i < mat[0].length; i++) {
    //     // c(m[0][i]);
    //     if (target[0][i] == m[0][i]) {
    //         bool = true;
    //     } else {
    //         bool = false;
    //     }
    // }
    // return bool
    // if (bool == true) {
    //     return true
    // }
    // // return p;
    // // c(a.diff(b));
    // counter++;
    // // c(counter);
    // if (counter < 4) {
    //     if (p.length == m.length) {
    //         return true;
    //     } else {
    //         return findRotation(m, target);
    //     }
    // }
    // return false;




};

c(
    findRotation(
        [
            [0, 0, 0],
            [0, 1, 0],
            [1, 1, 1]
        ], [
            [1, 1, 1],
            [0, 1, 0],
            [0, 0, 0]
        ]
    )
);


c(findRotation(

    [
        [0, 1],
        [1, 0]
    ], [
        [1, 0],
        [0, 1]
    ]));


c(findRotation([
    [0, 1],
    [1, 1]
], [
    [1, 0],
    [0, 1]
]))
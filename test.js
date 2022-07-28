// https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/

//failed some test cases but got right answer on offline compiler 

const c = console.log.bind(console);
let counter = 0;
var findRotation = function(mat, target) {

    let j = 0;

    let m = mat.map((item) => {
        let array = [];
        for (let i = mat.length - 1; i >= 0; i--) {
            array.push(mat[i][j]);
        }
        j++;
        return array;
    });
    // // return m;
    // // let p = target.filter(element => m.includes(element));
    // // c(m);

    // c(m);
    // // c(target);
    let bool = true;
    for (let i = 0; i < mat.length; i++) {
        for (let k = 0; k < mat[0].length; k++) {
            if (target[i][k] == m[i][k]) {
                bool = true;
            } else {
                bool = false;
                break;
            }
        }
        if (bool == false) {
            break;
        }
    }
    // c("bool :" + bool);
    if (counter > 3) {
        return false;
    }
    if (bool == true) {
        return true;
    } else if (bool == false) {
        counter++;
        return findRotation(m, target);
    }
};

c(
    findRotation(
        [
            [0, 0, 0],
            [0, 1, 0],
            [1, 1, 1],
        ], [
            [1, 1, 1],
            [0, 1, 0],
            [0, 0, 0],
        ]
    )
);

c(
    findRotation(
        [
            [0, 1],
            [1, 0],
        ], [
            [1, 0],
            [0, 1],
        ]
    )
);

c(
    findRotation(
        [
            [0, 1],
            [1, 1],
        ], [
            [1, 0],
            [0, 1],
        ]
    )
);
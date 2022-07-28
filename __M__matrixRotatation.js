const c = console.log.bind(console);

//done by me but not satisfied as array needed to be edited inPlace.
var rotate = function(matrix) {
    let newArray = [...matrix];
    let j = 0;
    let m = matrix.map(item => {
        let array = [];
        for (let i = matrix.length - 1; i >= 0; i--) {
            array.push(matrix[i][j]);

        }
        j++;
        return array;
    });

    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = m[i];
    }

    return matrix;

};

c(rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));
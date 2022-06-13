//Leet Code 
//120. Triangle

const c = console.log.bind(console);

var minimumTotal = function(triangle) {
    const mini = triangle[triangle.length - 1];

    // return mini;
    for (let i = triangle.length - 2; i >= 0; i--) {

        for (let j = 0; j < triangle[i].length; j++) {

            mini[j] = triangle[i][j] + Math.min(mini[j], mini[j + 1]);
        }
    }

    return mini[0];
};

c(minimumTotal([
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
]));
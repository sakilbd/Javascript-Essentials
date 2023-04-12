// https://leetcode.com/problems/flipping-an-image/description/

const c = console.log.bind(console);

var flipAndInvertImage = function(image) {
    let flippedImage = image.map((row) => {
        let invertRow = row.map(item => {
            return item == 0 ? 1 : 0;
        })
        return invertRow.reverse();
    });
    return flippedImage
};

c(
    flipAndInvertImage([
        [1, 1, 0],
        [1, 0, 1],
        [0, 0, 0],
    ])
);
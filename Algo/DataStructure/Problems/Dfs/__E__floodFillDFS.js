// https://leetcode.com/problems/flood-fill/

const c = console.log.bind(console);

var floodFill = function(image, sr, sc, color) {
    if (image[sr][sc] == color) {
        return image;
    }
    return dfs(image, sr, sc, image[sr][sc], color)
};

let dfs = (image, sr, sc, color, newColor) => {
    // c('sr' + sr);
    // c('sc' + sc);
    // c(image[sr][sc]);
    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || image[sr][sc] != color) {
        return;
    }
    image[sr][sc] = newColor;
    dfs(image, sr - 1, sc, color, newColor)
    dfs(image, sr + 1, sc, color, newColor)
    dfs(image, sr, sc - 1, color, newColor)
    dfs(image, sr, sc + 1, color, newColor)
        // c(image);
    return image;

}



c(floodFill([
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
], 1, 1, 2))
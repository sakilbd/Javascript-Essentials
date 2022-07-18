// https://leetcode.com/problems/can-place-flowers/

const c = console.log.bind(console);

var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        // c(i);
        if (flowerbed[i] == 0) {
            // c(i)
            if (
                (flowerbed[i - 1] == 0 || flowerbed[i - 1] == null) &&
                (flowerbed[i + 1] == 0 || flowerbed[i + 1] == null)
            ) {
                // c(i);
                flowerbed[i] = 1;
                count++;
            }
        }
    }
    // return count;
    return count >= n;
};

c(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2));
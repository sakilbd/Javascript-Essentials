const c = console.log.bind(console);

//done by me with time complexity error 
var maxArea = function(height) {
    let resValue = 0;
    // return height.filter((item, i) => {
    //     return i > 2 && item > 1
    let cpHeight = [...height]
        // });
    if (height.length == 2) {
        let x = Math.min(height[0], height[1]);
        let calcArea = x * 1;
        return calcArea;
    }
    let checkHighest = 0;
    // let mid = Math.floor(height.length / 2);
    // return mid;
    for (let j = height.length - 1; j > 0; j--) {
        // c(j)
        for (let i = 0; i <= j; i++) {
            // c(highestIncpHeight)
            // iIndex += 1;
            checkHighest = height[i];
            // c("j :" + height[j]);
            // c("i :" + height[i]);

            // c(count++);
            var distanceY = j - i;
            // c("distance :" + distanceY);
            // c("j :" + height[j]);
            // c("i :" + height[i]);
            let x = Math.min(height[j], height[i]);
            let calcArea = x * distanceY;

            resValue = Math.max(calcArea, resValue);

        }

    }
    // return checkHighest;
    return resValue;

    // return height;
};


//taken and submitted from community 
// var maxArea = function(height) {
//     let maxArea = 0;
//     let i = 0;
//     let j = height.length - 1;
//     while (i < j) {
//         maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j - i));
//         if (height[i] < height[j]) {
//             i++;
//         } else {
//             j--;
//         }
//     }
//     return maxArea;
// };


// c(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
// c(maxArea([10, 50]))
// c(maxArea([2, 3, 4, 5, 18, 17, 6]));
c(maxArea([1, 2, 4, 3]));
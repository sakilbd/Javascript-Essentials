// https://www.hackerrank.com/challenges/the-hurdle-race/problem

const c = console.log.bind(console);

function hurdleRace(k, height) {
    height.sort((a, b) => a - b);
    return (height[height.length - 1] - k) <= 0 ? 0 : (height[height.length - 1] - k);

}


// optimal solution:
// return Math.max(...height, k) - k


c(hurdleRace(7, [2, 5, 4, 5, 2]))
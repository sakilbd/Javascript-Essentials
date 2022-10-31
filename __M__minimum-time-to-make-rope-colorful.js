// https://leetcode.com/problems/minimum-time-to-make-rope-colorful/

const c = console.log.bind(console);


//by me
var minCost = function(colors, neededTime) {
    let res = 0;
    let temp = [];
    colors = colors + "5";
    neededTime.push(1)
    for (let i = 0; i < colors.length; i++) {
        if (colors[i + 1]) {
            if (colors[i + 1] == colors[i]) {
                temp.push(neededTime[i]);
            } else {
                temp.push(neededTime[i])
                let calcArr = temp.sort((a, b) => a - b);
                // c(calcArr)
                calcArr.pop();
                // c("afterPopped :" + calcArr)
                res += parseInt(calcArr.reduce((a, b) => a + b, 0));
                temp = []
                    // c("temp :" + temp)
                    // c("colors :" + colors)
                    // c("i :" + i)
            }
        }
    }
    return res;
};

//from community 
// const minCost = (s, cost) => {
//     let res = 0;
//     for (let i = 0, max = 0; i < s.length; i++) {
//       res += cost[i];
//       max = Math.max(max, cost[i]);
//       if (s[i] !== s[i + 1]) {
//         res -= max;
//         max = 0;
//       }
//     }
//     return res;
//   };




c(minCost("abaac", [1, 2, 3, 4, 5]));

c(minCost("aabaa", [1, 2, 3, 4, 1]));

c(minCost("aaabbbabbbb", [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1]));
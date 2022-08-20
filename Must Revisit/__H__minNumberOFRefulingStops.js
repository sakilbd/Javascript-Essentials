// https://leetcode.com/problems/minimum-number-of-refueling-stops/
// https://leetcode.com/problems/minimum-number-of-refueling-stops/discuss/2453021/JavaScript-DP-with-illustrations

const c = console.log.bind(console);

// tried by myselft but submitted from shit
// var minRefuelStops = function(target, startFuel, stations) {
//     let targetLeft = target;
//     let currentFuel = startFuel;
//     let sortedStations = stations.sort((a, b) => a[0] - b[0]);
//     let count = 0;
//     if ((startFuel == target || startFuel > target) && stations.length == 0) {
//         return 0;
//     } else if (stations.length == 0 && target > startFuel) {
//         return -1;
//     } else if (startFuel > target) {
//         return 0;
//     }
//     if (startFuel < sortedStations[0][0]) {
//         return -1;
//     } else {
//         currentFuel = startFuel - sortedStations[0][0] + sortedStations[0][1];
//         targetLeft = target - sortedStations[0][0];
//     }
//     // return targetLeft
//     // c(currentFuel);
//     let sortedStationsReverse = sortedStations.reverse();
//     // c(sortedStationsReverse);
//     while (targetLeft != 0 || targetLeft > 0) {

//         for (let i of sortedStationsReverse) {
//             // c(i[0]);
//             if (i[0] <= currentFuel) {

//                 currentFuel = currentFuel - i[0] + i[1];
//                 targetLeft = targetLeft - i[0];
//                 sortedStationsReverse.splice(i, 1);
//                 // c(targetLeft);
//                 // c("fuel :" + currentFuel)
//                 count++;
//                 break;
//             }
//         }
//     }
//     return count
// };



var minRefuelStops = function(target, startFuel, stations) {
    let dp = new Array(stations.length + 1).fill(0);
    dp[0] = startFuel;
    for (let i = 0; i < stations.length; i++) {
        for (let t = i; t >= 0 && dp[t] >= stations[i][0]; t--) {
            dp[t + 1] = Math.max(dp[t + 1], dp[t] + stations[i][1])
        }
    }
    for (let i = 0; i <= stations.length; i++) {
        if (dp[i] >= target) return i;
    }

    return -1;
};

// c(
//     minRefuelStops(100, 10, [
//         [10, 60],
//         [20, 30],
//         [30, 30],
//         [60, 40],
//     ])
// );

// c(minRefuelStops(1, 1, []))

c(minRefuelStops(999, 1000, [
    [5, 100],
    [997, 100],
    [998, 100]
]))
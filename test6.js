// https://leetcode.com/problems/minimum-time-difference/

const c = console.log.bind(console);

var findMinDifference = function(timePoints) {
    timePoints.sort((a, b) => {
            return a.split(':').join('') - b.split(':').join('')
        })
        // return timePoints
        // return parseInt(timePoints[0].split(":").join(''))
    return ((parseInt(timePoints[1].split(":").join('')) - parseInt(timePoints[0].split(":").join(''))) > 40 ? );
};

c(findMinDifference(["00:00", "23:59", "00:00"]))
    // c(findMinDifference(["23:59", "24:00"]));
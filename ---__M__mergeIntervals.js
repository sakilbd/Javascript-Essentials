// https://leetcode.com/problems/merge-intervals/
//unfinished need to solve this shit
const c = console.log.bind(console);

class something {
    constructor(x = 0, y = 0) {
        this.x = 0;
        this.y = 1;
    }
}


const d = new something(5, 6);
var merge = function(intervals) {
    if (intervals.length == 1) {
        return intervals;
    }
    let sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    // let sortedIntervals = [...intervals];
    let res = [];

    // sortedIntervals.map((item, i) => {
    //     if (i < sortedIntervals.length - 1) {
    //         if (item[1] < sortedIntervals[i + 1][0]) {
    //             res.push(item[0], sortedIntervals[i + 1][1]);
    //         }
    //     }

    // })
    let i = 0;

    while (i < sortedIntervals.length) {
        let j = 0;
        if (sortedIntervals[i + 1]) {
            if (sortedIntervals[i][1] >= sortedIntervals[i + 1][0]) {
                if (sortedIntervals[i + 1][1] > sortedIntervals[i][1]) {
                    res.push([sortedIntervals[i][0], sortedIntervals[i + 1][1]]);
                } else {
                    res.push([sortedIntervals[i][0], sortedIntervals[i][1]]);
                }

                i++;
            } else {
                res.push(sortedIntervals[i]);
            }
        } else {
            if (sortedIntervals[i - 1][1] < sortedIntervals[i][0]) {
                res.push(sortedIntervals[i]);
            }
        }
        i++;
    }
    let resCopy = [...res];
    // return sortedIntervals.splice(-1)[0][1];
    // return res.splice(-1)[0][1];
    // return sortedIntervals[sortedIntervals.length - 1][1]
    // if (sortedIntervals[sortedIntervals.length - 1][1] != res[res.length - 1][1]) {
    //     resCopy.push(intervals[intervals.length - 1]);
    //     // c();
    // }

    // for (let i in res) {
    //     if (d.x == 3) {
    //         return res;
    //     }
    //     // d.x = 5;
    //     d.x++
    //         c(d);
    //     // if (i == 1) {
    //     //     return res;
    //     // }
    //     merge(res);
    //     // return i;

    // }
    return res;
};


c(
    merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [10, 18],
        [19, 21],
        [22, 24],
    ])
);

c(
    merge([
        [1, 4],
        [4, 5],
    ])
);

c(merge([
    [1, 3]
]));

c(
    merge([
        [1, 4],
        [2, 3],
    ])
);

c(merge([

    [1, 4],
    [0, 4],
    [3, 5]

]))
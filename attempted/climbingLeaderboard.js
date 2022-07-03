// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true

const c = console.log.bind(console);

function climbingLeaderboard(ranked, player) {
    const finalResult = [];
    var playerArray = [];
    for (let i in player) {
        playerArray.push(player[i]);

        const arr = [...ranked, ...playerArray];

        const sortedArray = arr.sort(function(a, b) {
            return b - a;
        });
        const rank = {};

        sortedArray.map((key) => {
            (rank[key] = 0);
        });

        Object.keys(rank).map((key, item) => {
            rank[key] = Object.keys(rank).length - item;
        });
        finalResult.push(rank[player[i]]);
    }

    return finalResult;
}



//optimized solution 
function climbingLeaderboard(scores, alice) {
    var scores = [...scores];
    var alice = [...alice];
    // console.log(scores, alice);

    let positions = [];
    let distScore = [...new Set(scores)];
    let aliceIndex = 0;
    let i = distScore.length - 1;
    alice.forEach(element => {

        while (i >= 0) {
            if (element >= distScore[i]) {
                i--;
            } else {
                positions.push(i + 2);
                break;
            }
        }
        if (i < 0) positions.push(1);

    });

    return positions;
}

c(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]));
https: //leetcode.com/problems/bulls-and-cows/description/
    const c = console.log.bind(console);

var getHint = function(secret, guess) {
    let map = new Map();
    let bullCount = 0;
    let cowCount = 0;
    secret.split("").forEach((item, i) => {
        map.has(item) ?
            map.set(item, map.get(item) + 1) :
            map.set(item, 1);
    });
    let guessSplit = guess.split('')
    guessSplit.forEach((item, i) => {
        if (
            map.has(item) &&

            secret[i] == item
        ) {
            bullCount++;
            map.set(item, map.get(item) - 1);
            guessSplit[i] = "X" //replace the countable index with X to not count those values in cow count loop 
        }

    });
    guessSplit.forEach((item, i) => {
        if (map.has(item) && map.get(item) > 0) {
            cowCount++;
            map.set(item, map.get(item) - 1);
        }
    });
    return `${bullCount}A${cowCount}B`;
};




// function getHint(secret, guess) {
//     const apperances = new Map();

//     let bulls = 0;
//     for (let i = 0; i < secret.length; i++) {
//         if (apperances.has(secret[i])) {
//             apperances.set(secret[i], apperances.get(secret[i]) + 1);
//         } else {
//             apperances.set(secret[i], 1);
//         }
//     }

//     let cows = 0;
//     for (let i = 0; i < guess.length; i++) {
//         const currNum = guess[i];
//         if (secret[i] === currNum) bulls++;

//         if (apperances.has(currNum) && apperances.get(currNum) > 0) {
//             c(apperances)
//             apperances.set(currNum, apperances.get(currNum) - 1);
//             cows++;
//         }
//     }

//     return `${bulls}A${cows - bulls}B`;
// };
c(getHint("1807", "7810"));
c(getHint("1123", "0111"));
c(getHint("1122", "1222"))
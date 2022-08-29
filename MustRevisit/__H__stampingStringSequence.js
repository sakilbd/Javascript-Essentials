// https://leetcode.com/problems/stamping-the-sequence/

const c = console.log.bind(console);


// got from community will sove this later 
var movesToStamp = function(stamp, target) {

    const targetArray = target.split('');

    // canReplace helper method
    const canReplace = function(index) {
        for (let i = 0, j = index; i < stamp.length; i += 1, j += 1) {
            if (targetArray[j] !== stamp[i] && targetArray[j] !== '*') return false;
        }
        return true;
    }

    // replace helper method
    const replace = function(index) {
        let stars = 0;
        for (let i = 0, j = index; i < stamp.length; i += 1, j += 1) {
            if (targetArray[j] === stamp[i] && targetArray[j] !== '*') {
                targetArray[j] = '*'
                stars += 1;
            }
        }
        return stars;
    }

    /// Solution
    const visited = new Set();
    const res = [];
    let replacedCount = 0;
    while (replacedCount < target.length) {
        let replaced = false;
        for (let i = 0; i <= target.length - stamp.length; i += 1) {
            if (!visited.has(i) && canReplace(i)) {
                visited.add(i);
                res.push(i);
                replacedCount += replace(i);
                replaced = true;
            }
            if (replacedCount === target.length) break;
        }
        if (!replaced) return [];
    }

    return res.reverse();
};


c(movesToStamp('abc', 'ababc'))
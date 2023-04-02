// https://leetcode.com/problems/unique-number-of-occurrences/description/
const c = console.log.bind(console);

var uniqueOccurrences = function(arr) {
    let count = {}
    let occuranceTrack = []
    let result = true;
    arr.forEach(item => {
        count[item] = count[item] + 1 || 1
    })
    try {


        Object.values(count).forEach((item, i) => {

            if (occuranceTrack.includes(item)) {
                result = false;
                throw "wow"
            } else {
                occuranceTrack.push(item);
            }
        })
    } catch (e) {
        return result;
    }
    return result;

};


c(uniqueOccurrences([1, 2, 2, 2, 1, 1, 3]))
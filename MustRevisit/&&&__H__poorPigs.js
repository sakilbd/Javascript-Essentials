// https://leetcode.com/problems/poor-pigs/


// must revisit 
const c = console.log.bind(console)



var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    let T = minutesToTest / minutesToDie + 1;

    return Math.ceil((Math.log(buckets)) / Math.log(T));
};


c(poorPigs(4, 15, 15))
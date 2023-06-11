// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/

const c = console.log.bind(console);

var kidsWithCandies = function(candies, extraCandies) {
    const greatest = Math.max(...candies);


    return candies.map((noOfCandy) => {
        return noOfCandy + extraCandies >= greatest;
    });
};

c(kidsWithCandies([2, 3, 5, 1, 3], 3));
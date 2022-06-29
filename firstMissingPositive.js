const c = console.log.bind(console);
//leetcode.com/problems/first-missing-positive/


//all hidded test cases passed
var firstMissingPositive = function(nums) {
    const sorted = [...new Set(nums.sort((a, b) => a - b))];
    // return sorted;

    let missing = 1;

    // c(nums);

    const withoutMinus = sorted.filter((x) => x > 0);
    c(withoutMinus);
    if (withoutMinus[0] > 1 || withoutMinus == '') {
        return 1;
    }
    if ((nums.length == 1 && ((nums[0] == 0) || nums[0] < 0))) {
        return 1;
    }


    for (let i = 0; i < withoutMinus.length; i++) {

        if (withoutMinus[i] >= missing && withoutMinus[i] > 0) {
            if (!((withoutMinus[i] + 1) == (withoutMinus[i + 1])) == true) {
                return withoutMinus[i] + 1;
            };

        }
    }
};

// c(firstMissingPositive([1, 2, 0]));
c(firstMissingPositive([0, 2, 2, 1, 1]));
// https://leetcode.com/problems/sort-colors/

const c = console.log.bind(console);




//accepted but instructed to solve without sort function.
var sortColors = function(nums) {




    return nums.sort((a, b) => a - b);
};

// possible solution may be 
var sortColors = function(nums) {
    let low = 0,
        mid = 0,
        high = nums.length - 1;

    while (mid <= high) {
        switch (nums[mid]) {
            case 0:
                [nums[low], nums[mid]] = [nums[mid], nums[low]];
                low++;
                mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                [nums[mid], nums[high]] = [nums[high], nums[mid]];
                high--;
                break;
        }
    }
};


c(sortColors([2, 0, 2, 1, 1, 0]))
const c = console.log.bind(console);

var removeElement = function(nums, val) {

    var newArr = [...nums.sort()];

    let x = 0;

    while (x < newArr.length) {
        newArr.forEach((item) => {
            if (nums[x] == val) {
                const p = nums.indexOf(nums[x]);
                nums.splice(p, 1);
            }
        });

        x++;
    }
    return nums.length;
};
c(removeElement([3, 2, 2, 3], 3));
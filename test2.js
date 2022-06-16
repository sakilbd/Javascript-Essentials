const c = console.log.bind(console);

var moveZeroes = function(nums) {



    var newArr = [...nums];

    let x = 0;
    var zeros = [];
    while (x < newArr.length) {
        newArr.forEach((item) => {
            if (nums[x] == 0) {
                const p = nums.indexOf(nums[x]);
                nums.splice(p, 1);
                zeros.push(0);
            }
        });

        x++;
    }
    return [...nums, ...zeros];
};
c(moveZeroes([0, 1, 0, 3, 12]));
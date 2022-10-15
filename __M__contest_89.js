const c = console.log.bind(console);

var minimizeArrayValue = function(nums) {
    let numsCopy = [...nums];
    let minimumValue = numsCopy.sort((a, b) => -a + b);

    minimumValue = minimumValue[0];
    let i = 1;
    while (true) {
        // let i = Math.round(Math.random() * (nums.length - 1)) + 1;

        c(i)
        if (i == 0) {
            i == 1;
        }
        for (i; i < nums.length; i++) {
            nums[i] = nums[i] - 1
            nums[i - 1] = nums[i - 1] + 1
                // c(nums);
            c("min " + minimumValue)
            break;
        }
        let numCp = [...nums];
        i = nums.indexOf(numCp.sort((a, b) => (b - a))[0]);
        c("fuckshit :" + nums.indexOf(numCp.sort((a, b) => (b - a))[0]))
        c("num :" + nums);
        c("num Min :" + numCp[0]);
        if (numCp[0] < minimumValue) {
            minimumValue = numCp[0];
            break;
        }
    }
    return minimumValue;

};


c(minimizeArrayValue([3, 7, 1, 6]))
const c = console.log.bind(console);

var deleteAndEarn = function(nums) {
    // nums.sort((a, b) => a - b)
    let max = Math.max(...nums);
    let points = [];
    let next = points - 1;
    let temp = [...nums];
    let set = [...new Set(nums)];
    let tempPoint = 0;
    // return set
    // return temp
    // temp = temp.filter(item => item != 3 - 1 && item != 3 + 1)
    // return temp
    // temp.splice(2, 1);

    // return temp;

    // let index = temp.indexOf(3);
    // return index;
    set.forEach((item) => {
        var value = item;
        while (temp.length != 0) {
            let index = temp.indexOf(value);

            if (index >= 0) {
                // c("index " + index);
                tempPoint += value;

                temp.splice(index, 1);
                temp = temp.filter((elem) => elem != value - 1 && elem != value + 1);
                c("valueIF :" + value)
                c(temp);

            } else {
                value = temp[0];
                // tempPoint += value;
                // temp.splice(0, 1);
                // temp = temp.filter((elem) => elem != value - 1 && elem != value + 1);
                c("elese")
                c("value :" + value)
                c(temp)

                // c(value)
                // c(temp);
                // break;
            }

            // c(temp);
            // c(tempPoint)
        }
        c("###############################")
        temp = [...nums];
        // c(temp)
        points.push(tempPoint);
        tempPoint = 0;
    });
    return points
    return Math.max(...points);
};
// c(deleteAndEarn([3, 4, 2]));

// c(deleteAndEarn([2, 2, 3, 3, 3, 4]))

c(deleteAndEarn([3, 7, 10, 5, 2, 4, 8, 9, 9, 4, 9, 2, 6, 4, 6, 5, 4, 7, 6, 10]))


// c(deleteAndEarn([8, 7, 3, 8, 1, 4, 10, 10, 10, 2]))
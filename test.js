const c = console.log.bind(console);

var deleteAndEarn = function(nums) {
    let max = Math.max(...nums);
    let points = [];
    let next = points - 1;
    let temp = [...nums];
    let set = [...new Set(nums)];
    let tempPoint = 0;
    // return temp
    // temp = temp.filter(item => item != 3 - 1 && item != 3 + 1)
    // return temp

    set.forEach((item) => {
        let value = item;
        while (temp.length != 0) {
            let index = temp.indexOf(value);
            // c(index)
            if (index) {
                tempPoint += value;

                temp.splice(index, 1);
                temp = temp.filter(elem => elem != value - 1 && elem != value + 1)

                c(temp)

            } else {
                value = temp[0];
                tempPoint += value;
                temp = temp.filter(elem => elem != value - 1 && elem != value + 1)
                temp.splice(0, 1);
                // c(temp)

                // c(value)
                // c(temp)
                // break;
            }

            // c(temp);
            // c(tempPoint)


        }
        temp = [...nums];
        // c(temp)
        points.push(tempPoint);
        tempPoint = 0;


    });

    return points;
};

c(deleteAndEarn([3, 4, 2]));
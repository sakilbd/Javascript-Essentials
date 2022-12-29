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

        while (temp.length != 0) {
            let index = temp.indexOf(item);
            tempPoint += item;
            temp.splice(index, 1);
            temp = temp.filter(elem => elem != item - 1 && elem != item + 1)
            c(temp);


        }
        temp = [...nums];
        // c(temp)
        points.push(tempPoint);
        tempPoint = 0;


    });

    return points;
};

c(deleteAndEarn([3, 4, 2]));
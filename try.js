// https://leetcode.com/problems/queue-reconstruction-by-height/
const c = console.log.bind(console);
console.log("someting");

//updated infinite loop 
var reconstructQueue = function(people) {
    people.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0]
        } else {
            return a[1] - b[1]
        }
    });
    // return people;
    let temp = people
    let i = 1;
    let count = 0;
    while (i < people.length) {
        // if (temp[i][1] != 0) {
        let checkArr = temp.slice(0, i);
        // c(checkArr);
        for (let j in checkArr) {
            checkArr[j][0] >= temp[i][0] ? count++ : '';

            if (count > temp[i][1]) {
                // c(j)
                // c("count " + count)
                // c("temp[i][0] :" + temp[i][0])
                // c(temp[j])
                // c(temp.slice(j - 1, j))
                let tempI = temp[i];
                let tempSlice = temp.slice(j, temp.length);
                temp[i] = temp[j]
                let leftTempslice = temp.slice(0, j)
                    // temp[j] = tempI;
                temp = [...leftTempslice, ...tempSlice]
                c(temp)
                i = 0
                break;
            }
            break;
            // if ((count == temp[i][1]) && (j == checkArr.length - 1)) {
            //     // c(j)
            //     // c("count " + count)
            //     // c("temp[i][0] :" + temp[i][0])
            //     // c(temp[j])
            //     // c(temp.slice(j - 1, j))
            //     let tempI = temp[i];

            //     temp[i] = temp[j]
            //     temp[j] = tempI;
            //     // i = 0
            //     // break;
            // }
            // c(checkArr);
        }
        count = 0;
        c(i)
            // }
        i++;
    }

    return temp

};


//works forsome test cases except last test case
var reconstructQueue = function(people) {
    people.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0]
        } else {
            return a[1] - b[1]
        }
    });
    // return people;
    let temp = people
    let i = 1;
    let count = 0;
    while (i < people.length) {
        // if (temp[i][1] != 0) {
        let checkArr = temp.slice(0, i);
        // c(checkArr);
        for (let j in checkArr) {
            checkArr[j][0] >= temp[i][0] ? count++ : '';
            if (count > temp[i][1]) {
                // c(j)
                // c("count " + count)
                // c("temp[i][0] :" + temp[i][0])
                // c(temp[j])
                // c(temp.slice(j - 1, j))
                let tempI = temp[i];

                temp[i] = temp[j]
                temp[j] = tempI;
                i = 0
                break;
            }
            // c(checkArr);
        }
        count = 0;

        // }
        i++;
    }

    return temp

};



c(reconstructQueue([
    [6, 0],
    [5, 0],
    [4, 0],
    [3, 2],
    [2, 2],
    [1, 4]
]))

c(reconstructQueue([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2]
]))


c(reconstructQueue([
    [2, 4],
    [3, 4],
    [9, 0],
    [0, 6],
    [7, 1],
    [6, 0],
    [7, 3],
    [2, 5],
    [1, 1],
    [8, 0]
]));

c(reconstructQueue([
    [8, 2],
    [4, 2],
    [4, 5],
    [2, 0],
    [7, 2],
    [1, 4],
    [9, 1],
    [3, 1],
    [9, 0],
    [1, 0]
]))
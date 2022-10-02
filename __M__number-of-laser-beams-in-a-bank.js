// https://leetcode.com/problems/number-of-laser-beams-in-a-bank/

const c = console.log.bind(console);

var numberOfBeams = function(bank) {
    let arr = [];
    bank.forEach(item => {
        let splited = [...new Set(item.split(''))];

        if ((splited.length == 1) && (splited[0] == 0)) {
            // arr.push(item)
        } else {
            arr.push(item.split('').filter(item => item == 1).length)
        }
    })
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= i + 1; j++) {
            if (j == arr.length) {
                break;
            } else {
                res += parseInt(arr[i]) * parseInt(arr[j])
                    // c(arr[i], arr[j])
            }
            // res = 2 * 3;

        }
    }

    return res;

};


// c(numberOfBeams(["011001", "000000", "010100", "001000"]))

c(numberOfBeams(["000", "111", "000"]));
// https://leetcode.com/problems/elimination-game/

const c = console.log.bind(console);


var lastRemaining = function(n) {
    if (n == 1) {
        return 1;
    }
    let start = 1;
    var arr = Array(n).fill().map((_, idx) => start + idx);


    // let count = 0;
    while (true) {
        c(arr);
        // count++
        arr.splice(0, 1);
        if (arr.length == 1) {
            return arr[0];
        }
        let firstStepArray = arr.filter((item, i) => {
            if (i % 2 == 0) {
                return 1
            }
        });

        if (firstStepArray.length == 1) {
            return firstStepArray[0];
        }
        let oldFirstStep = [...firstStepArray];
        firstStepArray.reverse();
        // return oldFirstStep;
        firstStepArray.splice(0, 1);

        let secondeStepArray = firstStepArray.filter((item, i) => {
            if (i % 2 == 0) {
                return 1
            }
        });
        if (secondeStepArray.length == 1) {
            return secondeStepArray[0];
        }
        secondeStepArray.reverse();
        arr = [];
        arr = [...secondeStepArray];

    }

    // return lastRemaining(secondeStepArray);




};



c(lastRemaining(100000000))
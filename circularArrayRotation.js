const c = console.log.bind(console);
// https://www.hackerrank.com/challenges/circular-array-rotation/problem

//passed some of the cases and got time complexity error 
function circularArrayRotation(a, k, queries) {

    let resultArray = [...a];
    for (let i = 0; i < k; i++) {
        resultArray = rightShift(resultArray, 1);
    }
    let result = []
    for (let i of queries) {
        result.push(resultArray[i])
    }
    return result;

}

function rightShift(a, k) {
    const rightShifted = [];
    rightShifted.push(a[a.length - 1])
    for (let i = 0; i < a.length - 1; i++) {
        rightShifted.push(a[i]);
    }
    return rightShifted;
}



c(circularArrayRotation([3, 4, 5], 2, [1, 2]))
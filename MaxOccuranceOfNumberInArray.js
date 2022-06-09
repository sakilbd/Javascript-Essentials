function birthdayCakeCandles(ar) {
    let maxNumberInArray = Math.max(...ar);
    // const filteredArray = ar.filter((elem) => (elem === maxNumberInArray));
    const filteredArray = ar.filter((elem) => (elem == maxNumberInArray));
    return filteredArray.length;
}


console.log(birthdayCakeCandles([4, 4, 1, 2]))
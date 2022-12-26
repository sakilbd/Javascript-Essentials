// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/description/

const c = console.log.bind(console);

var maxCoins = function(piles) {
    piles.sort((a, b) => -a + b);
    let LastArrayLength = piles.length / 3;
    let rightArray = piles.slice(-LastArrayLength);
    let leftArray = piles.slice(0, piles.length - LastArrayLength);
    // return leftArray
    let modifiedArr = [];
    let j = 0;
    // c(piles)
    // c(leftArray)


    // this loop created so that there must return the optimize one 
    for (let i = 0; i < leftArray.length; i++) {
        if ((i + 1) % 2 == 0) {
            modifiedArr.push(leftArray[i]);
            modifiedArr.push(rightArray[j]);

            j++;
        } else {
            modifiedArr.push(leftArray[i]);
        }
    }
    // return modifiedArr
    let i = 1;
    let res = 0;
    // c(piles);

    // only this loop doesnot return the optimize values
    while (modifiedArr[i]) {
        res += modifiedArr[i];
        i += 3;
    }
    return res;
};

// c(maxCoins([2, 4, 1, 2, 7, 8]))
c(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4]));
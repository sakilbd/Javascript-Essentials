// https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true

const c = console.log.bind(console)
    // const r = reutrn.bind(console);

function sockMerchant(n, ar) {
    const distintElements = {

        }
        // return 2 % 2;
    for (let c = 0; c < n; c++) {
        distintElements[ar[c]] = 0;
    }
    const itemInDistElems = Object.keys(distintElements).map((item) => {
        return item;
    })

    for (let i = 0; i < itemInDistElems.length; i++) {

        for (let j in ar) {
            itemInDistElems[i] == ar[j] ? distintElements[itemInDistElems[i]]++ : '';
        }

    }
    var finalCount = 0;
    for (let i in itemInDistElems) {
        let p = Math.floor(distintElements[itemInDistElems[i]] / 2)
        p > 0 ? (finalCount += p) : '';
    }
    return finalCount;

}



//optimized solution 
function sockMerchantOptimized(n, ar) {
    var res = 0;
    ar.sort();
    for (let i = 0; i < n; i++) {
        if (ar[i] == ar[i + 1]) {
            i++;
            res++;
        }
    }
    return res;
}

c(sockMerchantOptimized(7, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
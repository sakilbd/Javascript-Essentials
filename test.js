// https://leetcode.com/problems/string-without-aaa-or-bbb/
const c = console.log.bind(console);



const strWithout3a3b = function(a, b) {
    return a > b ? calc("a", "b", a, b) : calc("b", "a", b, a);
};

const calc = (first, second, fCount, sCount) => {
    let secondCountTemp = sCount;
    let firstArr = Array(fCount).fill(first);

    let secondArrPredict = [];
    let count = fCount;
    while (true) {
        if (count <= 0) {
            break;
        }
        secondArrPredict.push(second);
        count -= 2;
        sCount--;
    }

    if (sCount > 0) {
        for (let i = 0; i < secondArrPredict.length; i++) {
            if (sCount == 0) {
                break;
            }
            secondArrPredict[i] = secondArrPredict[i] + second;
            sCount--;
        }
    }
    // return secondArrPredict;
    // secondArrPredict.length > sCount ? secondArrPredict.pop() : '';
    let res = "";
    if (fCount >= 2) {
        for (let i of secondArrPredict) {
            res += firstArr.splice(-2).join("") + i;
        }
    } else {
        res = first + second;
    }

    // secondArrPredict.splice(-2)
    // if (secondArrPredict.length > sCount) {
    //     let resSplit = res.split('');
    //     resSplit.pop();
    //     res = resSplit.join('');
    // }
    let secondCount = 0;
    for (let i = 0; i < res.length; i++) {
        res[i] == second ? secondCount++ : "";
    }

    // return secondCountTemp;
    if (secondCount > secondCountTemp) {
        let resSplit = res.split('');
        resSplit.pop();
        res = resSplit.join('');
    }

    return res;
};

c(strWithout3a3b(1, 1))
    // c(strWithout3a3b(4, 3));
    // c(strWithout3a3b(7, 6));
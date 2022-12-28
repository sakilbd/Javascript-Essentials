const c = console.log.bind(console);
// https://leetcode.com/problems/find-the-winner-of-the-circular-game/description/


//by me shit :/ 
var findTheWinner = function(n, k) {

    var myArr = [...new Array(n)].map((_, i) => {
        i++
        return i
    });

    // myArr.removeAt(2)
    // return myArr
    let kCount = 1
    let idx = 0
    while (myArr.length !== 1) {

        while (kCount <= k) {
            if (kCount == k) {
                myArr = myArr.filter(item => item != myArr[idx]);

                kCount = 1;
                if (idx == myArr.length - 1) {
                    idx = 0;
                    kCount++

                } else if (idx > myArr.length - 1) {
                    idx = 0;
                }
                // c("#############################")
                // c(myArr)
                // c("idxItem :" + myArr[idx])

                // c("IDX :" + idx)
                // c("kcount :" + kCount)
                // c("#############################")
                break;

            } else {
                if (idx == myArr.length - 1) {
                    idx = 0;
                    kCount++;
                } else {
                    idx++
                    kCount++;
                }

            }
            // c(myArr)
            // c("idxItem :" + myArr[idx])

            // c("IDX :" + idx)
            // c("kcount :" + kCount)



        }


    }
    return myArr[0]
};



//by community wtf solution 
var findTheWinner = function(n, k) {
    if (k === 1) return n;
    let result = 0;
    for (let i = 2; i <= n; i++) {
        result = (k + result) % i;
    }
    return result + 1;
};

c(findTheWinner(5, 2));
c(findTheWinner(6, 5));

c(findTheWinner(3, 1))
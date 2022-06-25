https: //leetcode.com/problems/3sum/submissions/



    const c = console.log.bind(console);

var threeSum = function(nums) {
    var arr = [...nums];
    var len = arr.length,
        subs = Array(Math.pow(2, len)).fill(0);
    // return subs;
    var finalArray = [];
    subs.map((_, i) => {
        var j = -1,
            k = i,
            res = [];
        while (++j < len) {
            k & 1 && res.push(arr[j]); //k & 1  means k % 2
            k = k >> 1; // k>>1 means k/2
        }
        return res.length == 3 ? finalArray.push(res) : 0;
    }); //slice(1) removes the first array form list which is empty here

    var arrayWithZero = [];
    finalArray.forEach((item) => {
        item.reduce((a, b) => a + b) == 0 ? arrayWithZero.push(item) : "";
    });
    var final = [];
    arrayWithZero.forEach((item) => {
        final.push(item.sort());
    });

    var j = 0;

    var result = [];

    var newArray = [...final];
    var temp = [0, 0, 0]


    let k = 0;
    let l = 0;
    // return final;
    // c([...final]);
    final.forEach(() => {
        newArray.forEach((item, i) => {
            // if (newArray.length == 1) {
            //     return result;
            // }

            for (k = 0; k < newArray.length; k++) {
                for (l = k + 1; l < newArray.length; l++) {
                    // c(k + " " + l + (checkEquals(newArray[k], newArray[l]) == true));
                    //  
                    if ((checkEquals(newArray[k], newArray[l])) == true) {
                        newArray.splice(newArray.indexOf(final[l]), 1);
                        // newArray.splice(newArray.indexOf(final[k]), 1)
                        // c(newArray)
                    } else {
                        // c(newArray);
                    }
                    // break;
                }
                // break;
                // return "fuckshit";


                // c([...temp])

                if (newArray[k] === undefined) {} else if (newArray.length == 1) {
                    result.push(newArray[k]);
                    break;
                } else {
                    checkEquals([...temp], newArray[k]) == false ?
                        result.push(newArray[k]) : '';
                    temp = [];
                    temp = newArray[k];
                    // c(temp)
                    // c(newArray);
                }
                // if (newArray.length == 1) {
                //     // break;
                // } else {
                c(newArray);
                newArray.splice(newArray.indexOf(final[k]), 1);
                // c(newArray)
                // break;

                // }
                // break;


            }
        });
    });
    // return checkEquals([-1, -2, 3], [-1, 0, 1]);

    function checkEquals(a, b) {

        const length = a.length;
        let check = false;
        let i = 0;
        // if (!a && !b) {
        while (i < a.length) {
            if (a[i] == b[i]) {
                i++;
                check = true;
            } else {
                check = false;
                return false;
            }

            // return check;
        }

        // }
        return check;


    }

    // final.forEach((item, i) => {
    //     j = i + 1;
    //     while (j < final.length) {
    //         checkEquals(final[i], final[j]) == true ? final.splice(final.indexOf[final[j]], 1) : '';
    //         j++;
    //     }

    // })

    return result;
};

// c(threeSum([-1, 0, 1, 0]));
// c(threeSum([-1, 0, 1, 2, -1, -4]));
c(threeSum([3, 0, -2, -1, 1, 2]));
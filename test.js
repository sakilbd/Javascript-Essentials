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
    // return final;
    // return final[0] == final[1];

    // return final;
    var j = 0;
    // const array = [1, 2, 3, 4];

    // // return (array.shift());
    var result = [];
    // var newArr = [...final];
    // final.forEach((item, i) => {

    //     j = i + 1;
    //     c('J' + j);
    //     c(final.length);
    //     // while (newArr.length != 0) {
    //     // c(newArr.length);
    //     while (j < final.length) {
    //         if (checkEquals(final[i], final[j]) == true) {
    //             result.push(item);
    //             final.splice(final.indexOf(final[j]), 1)
    //                 // final.splice(final.indexOf(item), 1)

    //         } else {

    //         }
    //         // final.splice(final.indexOf(final[j]), 1) :
    //         // "";
    //         j++;
    //         break;
    //         // c(final.length);
    //         // break;

    //     }

    //     // result.push(newArr.shift());
    //     // break;
    //     // }

    //     // c(final);
    // });

    // c(final);
    // let newArray = [...final];
    // for (let k = 0; k < final.length; k++) {
    //     for (let l = k + 1; k < final.length - 1; k++) {
    //         c(k + " " + l + (checkEquals(final[k], final[l]) == true));
    //         if (checkEquals(final[k], final[l]) == true) {
    //             newArray.splice(newArray.indexOf(final[l]), 1);
    //             // final.splice(newArray.indexOf(final[l]), 1)
    //             c(newArray);
    //         }
    //     }
    //     // final.splice(newArray.indexOf(final[i]), 1)
    //     // result.push(final[i]);
    // }
    // return [1, 2, 3].splice(1, 1);
    var newArray = [...final];

    final.forEach(() => {
        newArray.forEach((item, i) => {
            for (let k = 0; k < newArray.length; k++) {
                for (let l = k + 1; k < newArray.length - 1; k++) {
                    // c(k + " " + l + (checkEquals(newArray[k], newArray[l]) == true));
                    if (checkEquals(newArray[k], newArray[l]) == true) {
                        newArray.splice(newArray.indexOf(final[l]), 1);
                        // newArray.splice(newArray.indexOf(final[k]), 1)
                        // c(newArray);
                    }

                }
                if (newArray[k] === undefined) {} else { result.push(newArray[k]); }
                if (newArray.length >= 1) {
                    newArray.splice(newArray.indexOf(final[k]), 1)
                } else {

                }



                // final.splice(newArray.indexOf(final[i]), 1)
                // result.push(final[i]);
            }
        });
    });

    function checkEquals(a, b) {
        const length = a.length;
        let check = false;
        let i = 0;
        while (i < a.length) {
            if (a[i] == b[i]) {
                i++;
                check = true;
            } else {
                check = false;
                break;
            }

            // return check;
        }

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

c(threeSum([-1, 0, 1, 2, -1, -4]));
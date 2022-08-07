//contest problem 6 Aug 2022 at 8.30pm 
const c = console.log.bind(console);

var mergeSimilarItems = function(items1, items2) {
    let i1_sort = items1.sort((a, b) => a[0] - b[0]);
    let i2_sort = items2.sort((a, b) => a[0] - b[0]);
    let left = 0;
    let right = i2_sort.length - 1;

    // return mid;
    // let i = 0;
    if (i1_sort.length >= i2_sort.length) {
        var resArray = i1_sort.map((item, j) => {
            // c(i2_sort[1][0]);
            var res = []
                // c(mid)
            for (let i in i2_sort) {
                // return ;
                if (item[0] == i2_sort[i][0]) {
                    // c(i2_sort[i][1]);
                    // i2_sort.splice(i, 1);

                    res = [item[0], item[1] + i2_sort[i][1]];


                }

            }
            return item;

        });
        // var final = [...resArray]
        // let d = 0
        // resArray.forEach(item => {
        //     for (d; d < items2.length; d++) {

        //         if (item[0] != items2[d][0]) {
        //             final.push(items2[d]);
        //             break;
        //         }

        //     }
        // })
    }
    // let difference = resArray.filter((x, i) => x[0] != items2.forEach(item => {
    //     if (x[0] != item[0]) {
    //         return item;
    //     }
    // }));
    // return difference

    if (i1_sort.length <= i2_sort.length) {
        var resArray = i2_sort.map((item, j) => {
            // c(i2_sort[1][0]);

            // c(mid)
            for (let i in i1_sort) {
                // return ;
                if (item[0] == i1_sort[i][0]) {
                    // c(i2_sort[i][1]);
                    // i2_sort.splice(i, 1);
                    // i = i

                    return [item[0], item[1] + i1_sort[i][1]];


                }

            }
            return item;

        });
    }

    return resArray;
};

// c(
//     mergeSimilarItems(
//         [
//             [1, 1],
//             [4, 5],
//             [3, 8],
//         ], [
//             [3, 1],
//             [1, 5],
//         ]
//     )
// );

// c(mergeSimilarItems([
//     [1, 3],
//     [2, 2]
// ], [
//     [7, 1],
//     [2, 2],
//     [1, 4]
// ]))

c(mergeSimilarItems([
    [5, 1],
    [4, 2],
    [3, 3],
    [2, 4],
    [1, 5]
], [
    [7, 1],
    [6, 2],
    [5, 3],
    [4, 4]
]))
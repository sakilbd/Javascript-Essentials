// https://leetcode.com/problems/pascals-triangle/



const c = console.log.bind(console);

var generate = function(numRows) {
    let i = 1;
    let resArray = [];
    let prevIndexArray = [];
    while (i <= numRows) {

        let j = 1;
        let array = [];
        let q = 1;
        while (j <= i) {
            if (j == 1) {
                array.push(1);
                j++;

            } else if (j == i) {
                array.push(1);
                j++;

            } else {
                for (q; q < prevIndexArray.length; q++) {
                    array.push(prevIndexArray[q - 1] + prevIndexArray[q])
                }

                j++;
            }

        }
        prevIndexArray = [...array];


        resArray.push(array);
        i++;
    }
    return resArray;
};



// // with less line of code by community
// let generate = function(numRows) {
//     let triangle = [];

//     if (numRows === 0) {
//       return triangle;
//     }

//     triangle.push([1]);

//     for (let i = 1; i < numRows; i++) {
//       let prevRow = triangle[i - 1];
//       let newRow = [];

//       newRow.push(1);

//       for (let j = 1; j < prevRow.length; j++) {    
//         newRow.push(prevRow[(j - 1)] + prevRow[j]);
//       }

//       newRow.push(1);
//       triangle.push(newRow);   
//     }

//     return triangle;
//   };


c(generate(6))
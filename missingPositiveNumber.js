// https://leetcode.com/problems/first-missing-positive/submissions/

const c = console.log.bind(console);

//works test cases individually but not together if i call function multiple times
let i = 0;
let missing = 1;
var firstMissingPositive = function(nums) {
    // c(nums);
    let distinct = [...new Set(nums)];
    // c(distinct);
    let distinctSroted = distinct.sort();


    while (i < distinctSroted.length - 1) {
        if (parseInt(missing) > 0 && distinctSroted[i] > parseInt(missing)) {
            // c(missing);
            return missing;
        } else if (distinctSroted[i] <= missing) {
            missing =
                parseInt(distinctSroted[i]) + 1 > 1 ?
                parseInt(distinctSroted[i]) + 1 :
                1;

            // c(missing);
            // c("i :" + i);
            i++;
            firstMissingPositive(distinctSroted);
        }
    }

    return missing == 1 ? missing : missing + 1;
};

// const recursiveFunciton = (distinctSroted) => {

//     while (i < distinctSroted.length - 1) {
//         if (parseInt(missing) > 0 && distinctSroted[i] > parseInt(missing)) {
//             // c(missing);
//             return missing;
//         } else if (distinctSroted[i] <= missing) {
//             missing =
//                 parseInt(distinctSroted[i]) + 1 > 1 ?
//                 parseInt(distinctSroted[i]) + 1 :
//                 1;

//             // c(missing);
//             // c("i :" + i);
//             i++;
//             return firstMissingPositive(distinctSroted);
//         }
//     }

//     return missing == 1 ? missing : missing + 1;
// };

// return missing;
// c(firstMissingPositive([1, 2, 0]));
// c(firstMissingPositive([3, 4, -1, 1, 2]));

c(firstMissingPositive([7, 8, 9, 11, 12]));
const c = console.log.bind(console);

// var digitSum = function(s, k) {
//     let numOfString = s

//     while (true) {
//         if (numOfString <= k) {
//             break;
//         }
//         let tempNum = []
//         for (let num = 0; i < numOfString.length; num++) {

//         }
//     }

// };

// c(digitSum("11111222223", 3))

const str = "codingbeautyt";
let num = 4;
const regex = new RegExp(`.{1,${num}}`, "g");
const result = str.match(regex);

console.log(result);
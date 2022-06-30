/*Higher order fucntion is a function 
that returns or takes 
function as parameter*/

const c = console.log.bind(console);
// const multiplyBy = (num1) => {
//     return function(num2) {
//         return num1 * num2
//     }
// }

const multiplyBy = (num1) => (num2) => num1 * num2
const mulbytwo = multiplyBy(2);
c(mulbytwo(2));
c(multiplyBy(2)(6))
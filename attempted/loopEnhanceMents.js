// https://exercism.org/tracks/javascript/exercises/elyses-analytic-enchantments

const c = console.log.bind(console);



// with for loops 
// function getFirstOddCard(stack) {
//     let check = true;
//     for (let i = 0; i < stack.length; i++) {
//         if (stack[i] % 2 == 0) {
//             return stack.indexOf(stack[i]);
//         }

//     }
//     return -1;

// }





//without for loop
const even = c => c % 2 === 0;
const odd = c => !even(c);

function getCardPosition(stack, card) {
    return stack.indexOf(card);
}

function doesStackIncludeCard(stack, card) {
    return stack.includes(card);
}

function isEachCardEven(stack) {
    return stack.every(even);
}

function doesStackIncludeOddCard(stack) {
    return stack.some(odd);
}

function getFirstOddCard(stack) {
    return stack.find(odd);
}

function getFirstEvenCardPosition(stack) {
    return stack.findIndex(even);
}

c(getFirstOddCard([3, 5, 3, 2, 4]))
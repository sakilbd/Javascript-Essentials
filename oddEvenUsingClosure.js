const c = console.log.bind(console);

function cardTypeCheck(stack, card) {
    let count = 0;
    for (let i of stack) {
        i == card ? count++ : "";
    }
    return count;
}

function determineOddEvenCards(stack, type) {
    const oddEven = (type) => { //closure function 
        if (type == true) {
            return (item) => {
                return item % 2 == 0;
            };
        } else if (type == false) {
            return (item) => {
                return item % 2 == 0; // as false is considerd to odd numbers 
            };

        }
    };
    let count = 0;
    const oddEvenCheck = oddEven(type);
    for (let i of stack) {
        if (oddEvenCheck(i) == type) {
            count++;
        };
    }
    //  oddCheck(2);
    return count;
}

c(determineOddEvenCards([1, 2, 3, 3, 4], false));
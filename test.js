const c = console.log.bind(console);

function threeOfEachThree(deck) {

    Array.prototype.insert = function(index, item) {
        this.splice(index, 0, item);
    };
    // deck.insert(2, 69)
    // deck.forEach((item, i) => {
    //     if (item == 3) {

    //     }
    // })


    return deck.map((item, i) => {
        if (item == 3) {
            deck.insert(i, 3)
        } else {
            return item;
        }
    })
    return deck;
}
c(threeOfEachThree([1, 3, 9, 3, 7]));
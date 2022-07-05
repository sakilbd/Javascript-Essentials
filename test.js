const c = console.log.bind(console);

function sandwichTrick(deck) {
    Array.prototype.insert = function(index, item) {
        this.splice(index, 0, item);
    };
    const firstItem = deck.splice(0, 1);
    const lastItem = deck.splice(-1);
    const insertIndex = deck.length / 2;
    deck.insert(insertIndex, lastItem[0]);
    deck.insert(insertIndex + 1, firstItem[0]);


    // deck.insert(0, lastItem[0]);
    // deck.push(firstItem[0]);
    return deck;

}

c(sandwichTrick([1, 2, 3, 5, 6, 10]));
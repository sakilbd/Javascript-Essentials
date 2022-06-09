function quantities(items) {
    let sauceValue = 0;
    let noodlesValue = 0
    const p = items.map((q) => {
        switch (q) {
            case 'sauce':
                sauceValue = sauceValue + .2;
                console.log(sauceValue);
                break;
            case 'noodles':
                noodlesValue = noodlesValue + 50;
                console.log(noodlesValue);
                break;
        }

    });
    return {
        noodles: noodlesValue,
        sauce: sauceValue
    };
}

console.log(quantities(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']));
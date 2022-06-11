const c = console.log.bind(console);


const recipe = {
    sauce: 0.5,
    noodles: 250,
    meat: 150,
    tomatoes: 3,
    onion: 0.5,
};

function scaleRecipe(recipe, number) {
    const recipe1 = {

    }
    Object.keys(recipe).forEach(key => {
        recipe1[key] = recipe[key] / 2;
    });

    return recipe1;
    Object.keys(recipe1).forEach((key) => {
        recipe1[key] = recipe1[key] * number < 1 ? (recipe1[key] * number).toFixed(2) : Math.ceil(recipe1[key] * number);
    })

    return recipe;


}

c(scaleRecipe(recipe, 3))
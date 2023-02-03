// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

// made for node 14 may be or something 

// read this 
// https://stackoverflow.com/questions/63965394/why-is-optional-chaining-not-working-in-my-node-repl

const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah'
    }
};

const dogName = adventurer.dog ? .name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod ? .());
// Expected output: undefined


console.log(adventurer.cat ? .name)

// should have printed name maybe
// 1.
var foo = { name: "sakil", sex: "times" }
var bar = { name: "sakil", sex: "times" }
var yuo = { name: "sakil", sex: "times" }

console.table({ foo, bar, yuo }); ///creates table with index number
console.table([foo, bar, yuo]); //with variable name in index
console.log({ foo, bar, yuo })

// 2.
var foo = "hi whats up "
var bar = "wait what";
console.log({ foo, bar });
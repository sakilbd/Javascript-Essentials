const a = {
    name: "sakil",
    age: "18years"
}


console.log(a.name) //prints "sakil"
console.log(a[name]) //prints "sakil 


let b = 'name'


console.log(a.b) //prints undefined  this is dot notation 
console.log(a[b]) //prints "sakil   this is braket notation 

// ####################################

let d = {
        "var 1": "sakil",
        "var 2": "pakil"
    }
    // here must be braket notaton should be used

console.log(d['var 1']) // prints "sakil"

// d.'var 1' will not work here
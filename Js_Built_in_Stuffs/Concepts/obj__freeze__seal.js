const c = console.log.bind(console)


let obj = {
    name: "sakil",
    age: "29",
    address: "dhaka"
}


obj.country = "bangladesh"
c(obj) //{ name: 'sakil', age: '29', address: 'dhaka', country: 'bangladesh' }

Object.seal(obj)

// delete obj.name // cannot be delete as its sealed 
// obj.contact = "0124"  // cannot add key as obj is sealed but can updated 

obj.age = 32 //obj can be updated with sealed

c(obj) //{ name: 'sakil', age: 32, address: 'dhaka', country: 'bangladesh' }

Object.freeze(obj)
    // delete obj.age //cannot delete as obj is freezed 

// obj.age = 36 //cannot update or add key as obj is freezed 

c(obj)
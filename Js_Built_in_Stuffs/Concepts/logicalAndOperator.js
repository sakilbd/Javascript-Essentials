const c = console.log.bind(console)


let a = 0;
let b = 5


c(a && (a + b)) // check if a is a falsy value (false,null,udefined,0,NaN) NaN - not a number 
    // if a is falsy returns the falsy value (false,null,udefined,0,NaN) else return the (a+b)

// results 0 as a= 0 which is falsy


let d = 5;
let e = 6;

c(d && d + e) //returns 11 as d is not falsy
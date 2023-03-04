const c = console.log.bind(console);

const person = {
    name: "sakil",
    age: "27",
    degree: {
        ssc: "golden",
        hsc: {
            gpa: 5,
            college: "NDC",
        },
    },
};

const { name, age } = person;
c(name); //sakil
c(age); //27

var {
    degree: { ssc },
} = person;

c(ssc) //golden

// ####### renaming keys ##########

let {
    degree: { ssc: school },
} = person;
c(school) //golden

// ####### renaming keys ##########

//nested desturcture 
var { degree: { hsc: { gpa } } } = person;

c(gpa); //5

// renaming nested Object
var { degree: { hsc: { gpa: collegeResult } } } = person;

c(collegeResult) //5





// nested obj object desturcturing
let x = {
    a: 10,
    b: 20,
    d: {
        e: 69,
        f: {
            g: 62,
        },
    },
};

let {
    d: {
        e,
        f: { g },
    },
} = x;

c(e); //69
c(g); //62

// c(d); //undefined
// c(f); //undefined
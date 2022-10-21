const c = console.log.bind(console);


let check = () => {
    let map = {}

    map.a = 2;
    map.b = 3;
    map.c = "wow";

    c(Object.values(map).includes(2)) //returns true as 2 is in value
    c(Object.keys(map).includes("a")) //returns true as "a" is in key list 
    c(Object.keys(map).includes("z")) //returns false 
    return map;
}

c(check())
const c = "";

console.log(!!c);
//output false

const d = "wow";

console.log(!!d);
//output true

// implementation

var countSegments = function(s) {
    return s.split(" ").filter((item) => !!item).length; //filters item which is not '' 
};
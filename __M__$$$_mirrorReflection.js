// https://leetcode.com/problems/mirror-reflection/

//must fucking revisit 
const c = console.log.bind(console);
var mirrorReflection = function(p, q) {
    while (p % 2 == 0 && q % 2 == 0) {
        p /= 2;
        q /= 2;
    }
    if (p % 2 == 1 && q % 2 == 0) return 0;
    if (p % 2 == 1 && q % 2 == 1) return 1;
    else return 2;
};

c(mirrorReflection(2, 1))
1. bigString.includes(smallString) //returns treu/false if matches substring also works for arrays 
2. Array.sort((a, b) => a - b)
3. ArrayOfString.sort((a, b) => a.length - b.length) //sorts string accorting to string length
4. Array.filter(item => item > 0) // returns the filtered array wow!!!!!
5. Array.some(item => item > 12) // returns true/false if condition matches for one or mulitple elements
6. Array.map(item => { //returns each array element as calculated
    return item * 2
})

7. Array.prototype.insert = function(index, item) {
    this.splice(index, 0, item);
};
const arr = [1, 2, 3, 4];
arr.insert(0, 69) //returns [69,1,2,3,4]

/*IIFT :Immediately Invoked Function Expression (Executes Imediately)*/

9.((parm) => {
        console.log(`shit ${parm}`); //logs shit parameterOne
    })("parameterOne")
    /*IIFT :Immediately Invoked Function Expression (Executes Imediately)*/
10. someDigit.toString(2) //boom converts to binary
11. a.someString.charCodeAt(indexNumber) // returns specific indexed value of that character
b.
"a".charCodeAt(); //return 97 which is code of "a"
c.String.fromCharCode(97); //returns "a" as 97 is the code of "a"

12. String.fromCharCode(code) ///converts charcode to character ....
13.
const set1 = new Set(someArray);
const set2 = new Set(someArray2);

[...set1].filter(n => set2.has(n)) //returns common elements of two arrays.

let set3 = new Set();
set3.add('1'); //add distinct items to set 
set3.add('1'); //doesn't add '1' twice as 1 is always there
set1.has(1) //returns true

14.
let arr = [1, 2, 3, 4]
a.array.splice(0, 2); //cuts first two element of array ... arr = [4]
b.array.splice(2, 1); //removes 2th endex second element only ...arr = [1,2,4]
c.array.splice(-n); //removes last n elements of array ...arr = [1,2,3] if n is -1
d.array.splice(-n, 1); //removes nth element from last of an array ...arr = [1,2,4] if n is 2

15. array.slice(2) //cuts rest of the array with starting index 2
15. array.slice(2, 5) //cuts rest of the array with starting index 2 and ends with index 5
16.
var ret = "data-123".replace('data-', '');
console.log(ret); //prints: 123

17. Math.trunc(4.23) //returns int part only which is 4 as like floor.
18. Math.cbrt(64) // returns 4 as 4^3=64
19.!Number.isInteger(num / 4) // check if num is float or double in js
20. Math.cbrt(64) //qube root 
21. Math.ceil(Math.pow(256, 1 / n)); //n root of a number if n ==4 answer is 4;
22.
let arr = Array(n).fill().map((_, idx) => start + idx); //returns [1,2,3,4,5,6,7,8,9] inf n =9 and start =1

23.
var grid = [...Array(2)].map(e => Array(3).fill(0)); // crates 2*3 array with "0" on each element

24.
let difference = arr1.filter(x => !arr2.includes(x)); //finds difference between two arrays
25.
let map = { "1": 2, "2": 3, "3": 4 };
Object.keys(map).forEach((key, i) => {
    c(key) //returns 1,2,3
})
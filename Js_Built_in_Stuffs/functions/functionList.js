1. bigString.includes(smallString) //returns treu/false if matches substring also works for arrays 
2. Array.sort((a, b) => a - b)
3. ArrayOfString.sort((a, b) => a.length - b.length) //sorts string accorting to string length
4. Array.filter(item => item > 0) // returns the filtered array wow!!!!!
5. Array.some(item => item > 12) // returns true/false if condition matches for one or mulitple elements
6. Array.map(item => { //returns each array element as calculated
    return item * 2
})

7.
a.Array.prototype.insert = function(index, item) {
    this.splice(index, 0, item);
};
const arr = [1, 2, 3, 4];
arr.insert(0, 69) //returns [69,1,2,3,4]

b.
let arr = [1, 2, 3]

arr.splice(1, 0, ".") //returns [1,'.',2,3]
arr.splice(1, 1, ".") //returns [1,'.',3]



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

//replace first occurance 
// raw formate
let replaceItem = item.replace(/l/, ""); // replaces first occurance of "l"
// using variable 
let i = "p";
let item = 'pqppep'
var re = new RegExp(i, '');
let replaceItem = item.replace(re, ""); //returns item = 'qppep'

let replaceItem = item.replace("p", '') //reutnrs item = qppep
let replaceAllItem = item.replaceAll("p", '') //reutnrs item = qe


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

26. s.split(/[^A-Za-z]/).join(''); //filters alphabte only from sentence with punctuations numbers etc.
//s="hi, I am sakil 22 ?342" returns 'hiIamsakil'
27. s.toLowerCase(); //returns all alphabates to lowercase..

28.
let arr = [1, 2, 3, 4, 4, 4, 4, 5, 5];
const seen = new Set();
const duplicates = arr.filter((n) => {
    return seen.size == seen.add(n).size; //if returns true that measn that item (n) has duplicates 

});
console.log(duplicates); // [ 5 ]
29.
duplicates = [1, 1]
let distinctDuplicates = [...new Set(duplicates)]; //returns 1;
30.
let s = "abcdef1"
s.substr(0, 2) //returns 0 to 2 index result which is "abc"
31.
//find sign
Math.sign(-25) //returns -1
Math.sign(24) //returns 1

32. trimEnd(); // removes trailing spaces of a string

let s = "   sakil    ";
s.trimEnd(); /// returns "    sakil"

33.
let digit = 12345;
console.log(digit.match(/^[0-9]+$/) != null); // returns true for "12345" and false for "25e6"
34.
let map = {}
map.a = 2;
map.b = 3;
map.c = "wow";
c(Object.values(map).includes(2)) //returns true as 2 is in value
c(Object.keys(map).includes("a")) //returns true as "a" is in key list 
c(Object.keys(map).includes("z")) //returns false 
    // return map;

35.
    [1, 2, 3].every((e, j, a) => a.indexOf(e) === j) //returns true as there is no duplicates 
    [1, 2, 1].every((e, j, a) => a.indexOf(e) === j) //returns false as there are duplicates

36.
let fmA = new Array(26).fill(0),
    fmB = new Array(26).fill(0)

both are same ^ v

let fmA = new Uint32Array(26),
    fmB = new Uint32Array(26)


37.
let a = "abc"
let b = "abd"

a.localeCompare(b) // returns -1(which means "abc" lexographically small than "abd")
b.localeCompare(a) //returns 1(which means "abc" lexographically small than "abd")
    // (which also meanss "abd" lexographciall larger than "abc")

let a = "abc"
let b = "abc"
a.localeCompare(b) //returns 0 as both are equal

38.
var myArr = [...new Array(5)].map((_, i) => {
    i++
    return i
}); // creates array like [1,2,3,4,5]

39.
a.
    //highest execution time
let = unshuffled = [1, 2, 3]
let shuffled = unshuffled
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);


return shuffled; // returns random combination of array like [3,1,2] and the shuffled functions are self explanatory
b.
    //medium execution time
this.nums.sort((a, b) => {
    if (Math.random() > 0.5) return 1;
    else return -1;
}); // antoher way to shuffle
c.
    //lowers execution time 
let result = [...this.nums];
for (let i = result.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
}



40.
let a = [1, 2, 3, 4]

a.map(String) // conversts array of int's to array of strings

41.
let [num1, ...num2] = [1, 2, 3, 4, 5, 6]

console.log(num2) //returns [2,3,4,5,6]
console.log(num1) //returns 1
42.
regex using variable

const str = "codingbeautyt";
let num = 4;
const regex = new RegExp(`.{1,${num}}`, "g");
const result = str.match(regex);

console.log(result); //returns [ 'codi', 'ngbe', 'auty', 't' ]
43.
let a = [1, 1, 2, , 2, 3, 3]

let uniqueElements = [...new Set(a)] //returns [1,2,3]

44.
let arr = [1, 2, 3, 4, 5, 6, 7]
c(Math.max(...arr)) //returns 7,it will now work with out spread.
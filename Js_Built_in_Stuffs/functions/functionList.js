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
11. someString.charCodeAt(indexNumber) // returns specific indexed value of that character

12. String.fromCharCode(code) ///converts charcode to character ....
13.
const set1 = new Set(someArray);
const set2 = new Set(someArray2);

[...set1].filter(n => set2.has(n)) //returns common elements of two arrays.

let set3 = new Set();
set3.add('1'); //add distinct items to set 
set3.add('1'); //doesn't add '1' twice as 1 is always there
set1.has(1) //returns true

14. array.splice(0, 2); //cuts first two element of array 
15. array.slice(2) //cuts rest of the array with starting index 2
15. array.slice(2, 5) //cuts rest of the array with starting index 2 and ends with index 5
16.
var ret = "data-123".replace('data-', '');
console.log(ret); //prints: 123
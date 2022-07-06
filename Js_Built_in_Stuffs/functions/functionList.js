1. bigString.includes(smallString) //returns treu/false if matches substring
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
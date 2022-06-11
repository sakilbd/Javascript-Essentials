// https://www.hackerrank.com/challenges/migratory-birds/problem

// HackerRank Propblem Statement 
/*Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type.If more than 1 type has been spotted that maximum amount,
    return the smallest of their ids.

Example
arr=[1,1,2,2,3]
There are two each of types 1 and 2, and one sighting of type 3.Pick the lower of the two types seen twice: type 1.*/


const c = console.log.bind(console);

function migratoryBirds(arr) {
    const count = {

    };
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]] = i;
    }

    const countLength = Object.keys(count).length;

    const distinctElements = Object.keys(count).map((key) => {
        count[key] = 0;
        return key
    });


    for (let k = 0; k < distinctElements.length; k++) {
        for (let j = 0; j < arr.length; j++) {

            if (parseInt(distinctElements[k]) == parseInt(arr[j])) {

                count[distinctElements[k]]++;
            }
        }
    }


    // const objArr = Object.entries(count);
    // const filtered = objArr.filter(([key, value]) => value);
    // return Object.fromEntries(filtered);



}
c(migratoryBirds([1, 1, 2, 2, 5]))
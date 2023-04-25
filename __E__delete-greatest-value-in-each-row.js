const c = console.log.bind(console)

// https://leetcode.com/problems/delete-greatest-value-in-each-row/description/

var deleteGreatestValue = function (grid) {
   
    let result = 0;
    while (grid[0].length != 0) {
        let maxValueArray = []
        for (let item of grid) {
           item.sort((a, b) => a - b)
            maxValueArray.push(item.pop());
        }
        // c(maxValueArray)
        result += Math.max(...maxValueArray)
        maxValueArray = [];
    }
    return result;

};
//takes less time 
var deleteGreatestValue = function (grid) {
   let result = 0;
   grid.forEach(item=>{
       item.sort((a,b)=>b-a)
   })
   while (grid[0].length != 0) {
       let maxValueArray = []
       for (let item of grid) {
          
           maxValueArray.push(item.pop());
       }
       // c(maxValueArray)
       result += Math.max(...maxValueArray)
       maxValueArray = [];
   }
   return result;

};

c(deleteGreatestValue([[1, 2, 4], [3, 3, 1]]))
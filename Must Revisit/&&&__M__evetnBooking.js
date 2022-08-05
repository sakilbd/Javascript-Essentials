// https://leetcode.com/problems/my-calendar-i/
// https://leetcode.com/problems/my-calendar-i/discuss/1435281/Javascript-Solution

const c = console.log.bind(console);

var MyCalendar = function() {
    this.eventList = [];
};

MyCalendar.prototype.book = function(start, end) {
    // console.log(start)
    // console.log(end)
    let left = 0;
    let right = this.eventList.length - 1;
    // c('left :' + left);
    // c("right :" + right);
    while (left <= right) {
        // c("something");
        let mid = left + Math.floor((right - left) / 2);
        // c("mid :" + mid);
        // c(this.eventList[mid][0]);

        if (start < this.eventList[mid][1] && this.eventList[mid][0] < end) {
            return false;
        }
        // c(this.eventList[mid]);
        if (this.eventList[mid][1] > start) right = mid - 1
        else left = mid + 1;


        // c(this.eventList);
        // return false
    }

    this.eventList.push([start, end]);
    this.eventList.sort((a, b) => a[0] - b[0]);
    // c(this.eventList);
    // c(this.eventList);


    return true;
};


//optimized solution 
// class Node {
//     constructor(start, end) {
//         this.start = start;
//         this.end = end;
//         this.left = null;
//         this.right = null;
//     }
// }


// class MyCalendar {
//     constructor() {
//         this.root = null;
//     }

//     book(start, end, node = null) {
//         if (!node) node = this.root;
//         if (!node) {
//             this.root = new Node(start, end);
//             return true;
//         }

//         if (start >= node.end) {
//             if (!node.right) {
//                 node.right = new Node(start, end);
//                 return true;
//             }

//             return this.book(start, end, node.right);
//         } else if (end <= node.start) {
//             if (!node.left) {
//                 node.left = new Node(start, end);
//                 return true;
//             }

//             return this.book(start, end, node.left);
//         }

//         return false;
//     }
// };

let cal = new MyCalendar();

// c(cal.book(null, null));

// c(cal.book(1, 2));

// c(cal.book(3, 4));
// c(cal.book(8, 9));
// c(cal.book(2, 6));


c(cal.book(1, 2));

c(cal.book(5, 6));
c(cal.book(10, 12));
c(cal.book(3, 4));
// c(cal.book(2, 6));

// c(cal.book(5, 6));
// c(cal.book(7, 8));
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
    c('left :' + left);
    c("right :" + right);
    while (left <= right) {
        c("something");
        let mid = left + Math.floor((right - left) / 2);
        c(mid);
    }

    // if (start == null && end == null) {
    //     return null;
    // }
    // if (this.eventList.length == 0) {
    //     this.eventList.push([start, end]);
    //     return true;
    // } else {
    //     let lastElem = this.eventList.at(-1);
    //     // c(lastElem[1]);
    //     if (lastElem[1] <= start) {
    //         this.eventList.push([start, end]);
    //         return true;
    //     }
    // }
    // this.eventList.push([start, end]);
    // c(this.eventList);
    return false;
};

let cal = new MyCalendar();

c(cal.book(null, null));

c(cal.book(3, 4));

c(cal.book(5, 6));
c(cal.book(7, 8));
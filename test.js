const c = console.log.bind(console);


var findTheWinner = function(n, k) {
    let i = 0
    var myArr = [...new Array(n)].map((_, i) => {
        i++
        return i
    });
    return myArr

};

c(findTheWinner(5, 2));
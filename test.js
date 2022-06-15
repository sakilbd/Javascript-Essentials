const c = console.log.bind(console)

function pageCount(n, p) {
    console.log(n);
    console.log(p);
    const fromBeginning = Math.floor(p / 2);
    // c("fromStart :" + fromBeginning);
    const fromEnd = Math.floor((n - p) / 2);
    // c("fromEnd :" + fromEnd);
    return fromBeginning < fromEnd ? fromBeginning : fromEnd;
    // return Math.floor(p / 2) != 0 ? Math.floor(p / 2) : 1;

}

c(pageCount(5, 4))
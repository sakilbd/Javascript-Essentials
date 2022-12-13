const c = console.log.bind(console);


// const s = "abcdxyz"

// c(s.search("yx"))

var canTransform = function(start, end) {
    let length = start.length;
    for (let i = 0; i < length; i++) {
        let slice = start.slice(i, i + 2)

        let check = 0
        switch (slice) {
            case "RX":
                if (end.slice(i, i + 2) == "RX" || end.slice(i, i + 2) == "XR") {
                    i++;
                    check = 1;

                    // continue
                } else {

                }
                break;
            case "XR":
                if (end.slice(i, i + 2) == "XR") {
                    i++;
                    check = 1;
                    // continue
                } else {

                }

                break;
            case "XL":
                if (end.slice(i, i + 2) == "LX" || end.slice(i, i + 2) == "XL") {
                    i++;
                    check = 1;
                    // continue
                } else {

                }

                break;
            case "LX":
                if (end.slice(i, i + 2) == "LX") {
                    i++;
                    check = 1;
                    // continue
                } else {

                }

                break;
            default:
                // c(slice);

        }
        if (check != 1) {
            // c(check)
            // c(start[i], i)
            // c(end[i], i)
            if (start[i] != end[i]) {
                return false
            }

        }
    }
    return true;
};


c(canTransform("RXXLRXRXL", "XRLXXRRLX"))

c(canTransform("LXXLXRLXXL", "XLLXRXLXLX"))
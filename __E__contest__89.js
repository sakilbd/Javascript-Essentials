const c = console.log.bind(console);

var countTime = function(time) {
    let split = time.split(":");
    let left = split[0].split("");
    let right = split[1].split("");
    let leftRes = 1;
    let rightRes = 1;

    if (left[0] == "?" && left[1] > 3) {

        leftRes = 2;

    }
    if (left[0] == "?" && left[1] <= 3) {

        leftRes = 3;

    }
    if (left[0] == "?" && left[1] == "?") {
        leftRes = 24;
    }
    if (left[0] == "2" && left[1] == "?") {
        leftRes = 4;
    }
    if (left[0] < 2 && left[1] == "?") {
        leftRes = 10;
    }
    //right
    if (right[0] == "?" && right[1] == "?") {
        rightRes = 60;
    }
    if (right[0] == "?" && right[1] != "?") {
        rightRes = 6;
    }
    if (right[0] != "?" && right[1] == "?") {
        rightRes = 10;
    }

    if (leftRes == 0) {
        return rightRes;
    }
    if (rightRes == 0) {
        return leftRes;
    }
    return rightRes * leftRes;
}


c(countTime("?2:16"));
c(countTime("?5:00"));

c(countTime("?3:1?"));
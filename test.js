// https://leetcode.com/problems/validate-stack-sequences/

const c = console.log.bind(console);


//by me of course -_-
var validateStackSequences = function(pushed, popped) {
    // if (popped.length == 0) {
    //     return "shit ";
    // }
    let poppedItem = popped[0];
    popped.reverse().pop();
    let updatedPopped = popped.reverse();
    // return updatedPopped
    let pushedPopIndex = pushed.indexOf(poppedItem);
    let pushedLeft = pushed.slice(0, pushedPopIndex);
    let pushedRight = pushed.slice(pushedPopIndex + 1, pushed.length);
    // var pushed = [...pushedLeft, ...pushedRight]
    // c("pushedLeft :" + pushedLeft);
    // c("pushedRight :" + pushedRight);
    // c("pushedPopIndex :" + pushedPopIndex);
    // c("updatedPopped :" + updatedPopped);

    while (true) {
        let poppedItem = updatedPopped[0];
        // c("#####################################");
        // c("poppedItem :" + poppedItem);
        // c("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
        // c("pushedLeft :" + pushedLeft);
        // c("pushedRight :" + pushedRight);
        // c("poppedItem :" + poppedItem);
        // c("updatedPopped :" + updatedPopped);
        // c("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
        // c(pushedLeft[pushedLeft.length - 1])
        if (typeof poppedItem == "undefined") {
            // c("$$$$$$$$$$$$$$$$$$$")
            // c("pushedLeft :" + pushedLeft);
            // c("pushedRight :" + pushedRight);
            // c("pushedPopIndex :" + pushedPopIndex);
            // c("updatedPopped :" + updatedPopped);
            // c("$$$$$$$$$$$$$$$$$$$")
            return pushedLeft.length == 0 && pushedRight.length == 0 ?
                "true" :
                "false";
        } else if (pushedLeft[pushedLeft.length - 1] == poppedItem) {
            pushedLeft.pop();
            pushedLeft = pushedLeft;
            updatedPopped.reverse().pop();
            updatedPopped = updatedPopped.reverse();
            // c("pushed left")
        } else if (pushedRight[0] == poppedItem) {
            // c("pushed RIght");
            pushedRight.reverse().pop();
            pushedRight = pushedRight.reverse();
            // c(pushedRight);
            updatedPopped.reverse().pop();
            updatedPopped = updatedPopped.reverse();
        } else {
            if (pushedRight.length > 0) {
                pushedLeft.push(pushedRight[0]);
                pushedRight.reverse().pop();
                pushedRight.reverse();
            } else {
                return false;
            }

            // return false
            // c("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
            // c("pushedLeft :" + pushedLeft);
            // c("pushedRight :" + pushedRight);
            // c("poppedItem :" + poppedItem);
            // c("updatedPopped :" + updatedPopped);
            // c("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")

            // return "shit";
        }
        // c("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
        // c("pushedLeft :" + pushedLeft);
        // c("pushedRight :" + pushedRight);
        // c("poppedItem :" + poppedItem);
        // c("updatedPopped :" + updatedPopped);
        // c("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")

        // c("pushedLeft :" + pushedLeft);
        // c("pushedRight :" + pushedRight);
        // c("pushedPopIndex :" + pushedPopIndex);
        // c("updatedPopped :" + updatedPopped);
    }
};


//from community
var validateStackSequences = function(pushed, popped) {
    let stack = [];
    let i = 0;

    for (let item of pushed) {
        stack.push(item);
        while (stack.length && stack[stack.length - 1] === popped[i]) {
            i++;
            stack.pop();
        }
    }

    return pushed.length == i;
}


c(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])); //t

c(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])); //f

c(validateStackSequences([0], [0])); //t

c(validateStackSequences([0, 2, 1], [0, 1, 2])); //t

c(validateStackSequences([4, 0, 3, 1, 2], [4, 1, 3, 0, 2])); //t

// c(
//     validateStackSequences(
//         [3, 1, 2, 9, 5, 6, 8, 4, 7, 0], [2, 6, 4, 0, 7, 8, 5, 9, 1, 3]
//     )
// ); //t
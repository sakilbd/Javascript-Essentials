// https://leetcode.com/problems/validate-stack-sequences/

const c = console.log.bind(console);


var validateStackSequences = function(pushed, popped) {
    if (popped.length == 0) {
        return "shit "
    }
    let poppedItem = popped[0];
    let updatedPopped = popped.slice(-popped.length + 1)
        // return updatedPopped
    let pushedPopIndex = pushed.indexOf(poppedItem)
    let pushedLeft = pushed.slice(0, pushedPopIndex);
    let pushedRight = pushed.slice(pushedPopIndex + 1, pushed.length)
    var pushed = [...pushedLeft, ...pushedRight]
    return pushed;

    validateStackSequences(pushed, popped);




};


c(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]))
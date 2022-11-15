const c = console.log.bind(console);


var validateStackSequences = function(pushed, popped) {

    let poppedItem = popped[0];
    let pushedPopIndex = pushed.indexOf(poppedItem)
    let pushedLeft = pushed.slice(0, pushedPopIndex);
    let pushedRight = pushed.slice(pushedPopIndex, pushed.length)
    return pushedRight


};


c(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]))
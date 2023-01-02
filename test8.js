// https://leetcode.com/problems/simplify-path/

const c = console.log.bind(console);


// almost done needs some tweaks 
var simplifyPath = function(path) {
    let length = 0;
    let stack = [];
    while (length < path.length) {
        let slash = stack.pop();

        if (
            (slash == "/" && path[length] == "/") ||
            (path[length] == "/" && length == path.length - 1)
        ) {
            stack.push(slash);
        } else {
            slash ? stack.push(slash) : "";
            if (path[length] != ".") {

                stack.push(path[length]);
            }
        }
        length++;
    }

    return stack.join("");
};

c(simplifyPath("/home//foo/"));

c(simplifyPath("/home/"));

c(simplifyPath("/../"));
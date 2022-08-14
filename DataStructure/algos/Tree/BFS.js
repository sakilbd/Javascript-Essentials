const c = console.log.bind(console);
//breadth first search working for both binary search tree and binary tree

var BFS = function(root) {
    if (!root) return [];
    let queue = [];
    let data = [];
    queue.push(root);

    while (queue.length) {
        let current = queue.shift();
        data.push(current.val);
        // c(queue.length)
        if (current.left) {
            queue.push(current.left)
        }
        if (current.right) {
            queue.push(current.right)
        }


    }
    return data;




};


c(BFS(root))
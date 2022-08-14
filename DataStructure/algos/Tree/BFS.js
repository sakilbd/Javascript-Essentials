const c = console.log.bind(console);
//breadth first search working for both binary search tree and binary tree

var root = {
    "val": 5,
    "left": {
        "val": 1,
        "left": null,
        "right": null
    },
    "right": {
        "val": 8,
        "left": {
            "val": 6,
            "left": null,
            "right": null
        },
        "right": {
            "val": 9,
            "left": null,
            "right": null
        }
    }
}

var BFS = function(root) {

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
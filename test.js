const c = console.log.bind(console);


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

var levelOrder = function(root) {

    let queue = [];
    let data = [];
    queue.push(root);

    while (queue.length) {
        let current = queue.shift();
        data.push(current.val);
        c(queue.length)
        if (current.left) {
            queue.push(current.left)
        }
        if (current.right) {
            queue.push(current.right)
        }


    }
    return data;




};


c(levelOrder(root))
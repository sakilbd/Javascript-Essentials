const c = console.log.bind(console);

var root = {
    val: 5,
    left: {
        val: 1,
        left: null,
        right: null,
    },
    right: {
        val: 8,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: {
            val: 9,
            left: null,
            right: null,
        },
    },
};


// c(root.length)

//Breath First Search Approach
var maxDepth = function(root) {
    let levelCount = 0;
    let queue = [];
    let data = [];
    if (!root) return [];
    queue.push(root);

    while (queue.length > 0) {
        let level = [];
        let newQueue = [];

        // let current = queue.shift();
        // data.push(current.val);
        // c(queue.length)
        for (let node of queue) {
            level.push(node.val);
            if (node.left) {
                newQueue.push(node.left);
            }
            if (node.right) {
                newQueue.push(node.right);
            }
        }
        levelCount++;
        data.push(level);
        queue = newQueue;
    }
    return levelCount;
};

//Depth First Search Approach 
// var maxDepth = function(root) {
//     if(!root) return null;
//       let max = Math.max(maxDepth(root.left), maxDepth(root.right));
//       return max + 1;
//   };

c(maxDepth(root));
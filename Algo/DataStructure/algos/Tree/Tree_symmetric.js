// https://leetcode.com/problems/symmetric-tree/

const c = console.log.bind(console);
//doesnot work for symetric root node in node environment but works fine in leetcode Environment.
var root = {
    "val": 5,
    "left": {
        "val": 2,
        "left": {
            "val": 3,
            "left": null,
            "right": null,
        },
        "right": {
            "val": 4,
            "left": null,
            "right": null,
        }
    },
    "right": {
        "val": 2,
        "left": {
            "val": 3,
            "left": null,
            "right": null,
        },
        "right": {
            "val": 4,
            "left": null,
            "right": null,
        }
    }
}


var isSymmetric = function(root) {

    if (!root)
        return true;
    return dfs(root.left, root.right);

    function dfs(leftNode, rightNode) {

        if (!leftNode && !rightNode) {
            return true;
        }
        if (leftNode && !rightNode || !leftNode && rightNode || leftNode.val !== rightNode.val) {
            return false;
        }
        return dfs(leftNode.right, rightNode.left) && dfs(leftNode.left, rightNode.right);
    }
};


c(isSymmetric(root))
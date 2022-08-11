// https://leetcode.com/problems/binary-tree-preorder-traversal/
// https://leetcode.com/problems/binary-tree-inorder-traversal/
// https://leetcode.com/problems/binary-tree-postorder-traversal/

// https://www.youtube.com/watch?v=gm8DUJJhmY4&t=268s&ab_channel=mycodeschool
// https://www.youtube.com/watch?v=-b2lciNd2L4&ab_channel=Jenny%27slecturesCS%2FITNET%26JRF
const c = console.log.bind(console);

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        var newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (val === current.val) return undefined;
                if (val < current.val) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.val) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
        // return JSON.stringify(this.root);
    }

    createdRootFromGivenBSTArray(val, i) {
        var newNode = new Node(val);

        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while (true) {
                // if (val === current.val) return undefined;
                if (i % 2 != 0) {
                    if (current.left === null) {
                        if (val == null) {
                            current.left = null;
                        } else {
                            current.left = newNode;
                        }
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (i % 2 == 0) {
                    // if (current.right === null) {
                    //     if (val == null) {
                    //         current = val;
                    //     } else {
                    //         current.right = newNode;
                    //         return
                    //     }
                    // } else {
                    //     current = current.right
                    // }
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
        // return JSON.stringify(this.root);
    }
    find(val) {
        // return val;
        if (this.root == null) return false;
        var current = this.root,
            found = false;
        while (!current && !found) {
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                return true;
            }
        }

        return false;
    }
}

//     10
//  5       13
//2   7  11    16
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

var isValidBST = function(root) {
    let res = [];

    function check(root) {
        if (root == null) {
            return;
        }
        res.push(root.val);
        check(root.left)
        check(root.right)
    }

    // check(root);

    return res;
};




var preorderTraversal = function(root) {
    let res = [];
    helper(root, res);
    return res;
};

var helper = (root, res) => {
    if (root == null) {
        return;
    }
    res.push(root.val);
    helper(root.left, res);
    helper(root.right, res);
};


c(isValidBST(root));
// c(preorderTraversal(root))
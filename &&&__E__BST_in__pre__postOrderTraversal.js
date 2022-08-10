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

function TreeNode(val) {
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

var tree = new BinaryTree();
let binaryTreeArray = [1, 2, 3];
for (let i of binaryTreeArray) {
    tree.insert(i);
}

// preorderTraversal
// var preorderTraversal = function(root) {
//     let res = [];
//     helper(root, res);
//     return res;
// };

// var helper = (root, res) => {
//     if (root == null) {
//         return;
//     }
//     res.push(root.val);
//     helper(root.left, res);
//     helper(root.right, res);
// };


// inorderTraversal
var inorderTraversal = function(root) {
    let res = [];
    helper(root, res)
    return res;
};
var helper = (root, res) => {
    if (root == null) {
        return;
    }
    c(JSON.stringify(root));
    helper(root.left, res);
    res.push(root.val);
    helper(root.right, res);

};


///postorderTraversal
// var postorderTraversal = function(root) {

//     let res = [];
//     // return root;

//     helper(root, res)



//     return res;
// };
// var helper = (root, res) => {
//     if (root == null) {
//         return;
//     }

//     helper(root.left, res);

//     helper(root.right, res);
//     res.push(root.val);

// };


//inorderTraversal works in leet code but doesnot work here in node.js .. dont know why the fuck 

// c(preorderTraversal(tree.root));
c(inorderTraversal((tree.root)));
// c(postorderTraversal((tree.root)))
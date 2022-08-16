// https://leetcode.com/problems/insert-into-a-binary-search-tree/
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
// var root = {

// };

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    rootInsert(root) {
        if (root == null) {
            this.root = null;
        } else {
            this.root = root;
        }
    }
    insert(val) {
        var newNode = new TreeNode(val);

        if (this.root === null) {
            this.root = newNode;
            return this.root;
        } else {
            var current = this.root;
            while (true) {
                if (val === current.val) return undefined;
                if (val < current.val) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this.root;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.val) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this.root;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
        return this.root;
        // return JSON.stringify(this.root);
    }

}

var insertIntoBST = function(root, val) {

    let tree = new BinaryTree();
    if (root == null) { //this works in leetcode 
        return tree.insert(val);
    }
    // if (Object.entries(root).length === 0) { //but this works for offline testing
    //     return tree.insert(val);
    // }
    else {
        tree.rootInsert(root);
    }
    return tree.insert(val);

};


//recursive solution from leetcode
// var insertIntoBST = function(root, val) {
//     if(!root) {
//         return new TreeNode(val);
//     }
//     if(val > root.val){
//         root.right = insertIntoBST(root.right, val);
//     }
//     else {
//         root.left = insertIntoBST(root.left, val);
//     }
//     return root;
// };


c(insertIntoBST(root, 62));
// c(searchBST(root, 8))

//     10
//  5       13
//2   7  11    16


// c(tree.insert(root));

// var searchBST = function(root, val) {
//     var tree = new BinaryTree();
//     let treeRoot = tree.insert(root);
//     // c(treeRoot)
//     return tree.find(5)
//         // return root
// };
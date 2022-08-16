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
    find(value) {
        // return this.root;
        if (this.root == null) return false;
        var current = this.root,
            found = false;
        while (current != null && found != true) {
            if (value == current.val) {
                return current
            } else if (value < current.val) {
                current = current.left
            } else if (value > current.val) {
                current = current.right

            } else { return false }


        }

        return false;

    }

}



var searchBST = function(root, val) {
    // return val;
    var tree = new BinaryTree();
    let treeRoot = tree.rootInsert(root);
    // c(treeRoot)
    let valCheck = tree.find(val);
    if (valCheck == false) {
        return null
    } else {
        return valCheck
    }
    // return root
};


//leetcode soluton 
// var searchBST = function(root, val) {
//     if (root === null) {
//         return null;
//     } else if (val === root.val) {
//         return root;
//     } else if (val < root.val) {
//         return searchBST(root.left, val);
//     } else {
//         return searchBST(root.right, val);
//     }
// };


c(searchBST(root, 50))
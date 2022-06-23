const c = console.log.bind(console);

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
var isValidBST = function(root) {
    const bst = new BinaryTree();
    root.forEach((item) => {
        bst.insert(item);
    });
    // c(bst.insert(5));
    // c(bst.insert(4));

    return JSON.stringify(bst);
};

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        c(this.root);
        var newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            if (current.val == null) return false;
            c(this.root);
            while (true) {
                c(current.val);
                if (value === current.val) return undefined;
                if (value < current.val) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.val) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
}

c(isValidBST([5, 1, 4, null, null, 3, 6]));
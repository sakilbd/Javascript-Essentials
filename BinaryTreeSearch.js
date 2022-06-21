const c = console.log.bind(console);

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;

                    }
                } else if (value > current.value) {
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

//     10
//  5       13
//2   7  11    16

var tree = new BinaryTree();

// c(JSON.stringify(tree.insert(10)));
// c(JSON.stringify(tree.insert(2)));
// c(JSON.stringify(tree.insert(15)));
// c(JSON.stringify(tree.insert(17)));
// c(JSON.stringify(tree.insert(19)));

// c(tree.insert(2));
// c(tree.insert(15));
// c(tree.insert(17));
// c(tree.insert(19));

tree.insert(10);
tree.insert(10);
tree.insert(15);
tree.insert(17);
tree.insert(19);
tree.insert(16);

c(JSON.stringify(tree));
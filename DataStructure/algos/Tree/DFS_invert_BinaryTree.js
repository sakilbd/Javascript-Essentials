https: //leetcode.com/problems/invert-binary-tree/
    let root = {
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

const c = console.log.bind(console);

function invertTree(root) {
    if (root) {
        var temp = root.left;
        root.left = root.right;
        root.right = temp;

        invertTree(root.left);
        invertTree(root.right);
    }

    return root;
}

c(invertTree(root))
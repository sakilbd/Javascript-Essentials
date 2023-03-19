// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

const c = console.log.bind(console);

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

let p = {
    val: 6,
    left: null,
    right: null,
};

let q = {
    val: 9,
    left: null,
    right: null,
};

var lowestCommonAncestor = function(root, p, q) {
    while (root.val != p.val && root.val != q.val) {
        if (root.val > p.val && root.val > q.val) root = root.left;
        else if (root.val < p.val && root.val < q.val) root = root.right;
        else break;
    }
    return root;
};

c(lowestCommonAncestor(root, p, q));
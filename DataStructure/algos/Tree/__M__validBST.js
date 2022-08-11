// https://leetcode.com/problems/binary-tree-preorder-traversal/
// https://leetcode.com/problems/binary-tree-inorder-traversal/
// https://leetcode.com/problems/binary-tree-postorder-traversal/

// https://www.youtube.com/watch?v=gm8DUJJhmY4&t=268s&ab_channel=mycodeschool
// https://www.youtube.com/watch?v=-b2lciNd2L4&ab_channel=Jenny%27slecturesCS%2FITNET%26JRF
const c = console.log.bind(console);



function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
// in valid bst
var root = {
    val: 5,
    left: {
        val: 4,
        left: null,
        right: null,
    },
    right: {
        val: 6,
        left: {
            val: 3,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        },
    },
};


// valid BST
var root = {
    val: 5,
    left: {
        val: 4,
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
//     val: 5,
//     left: {
//         val: 1,
//         left: null,
//         right: null,
//     },
//     right: {
//         val: 8,
//         left: {
//             val: 6,
//             left: null,
//             right: null,
//         },
//         right: {
//             val: 9,
//             left: null,
//             right: null,
//         },
//     },
// };
// var root = {
//     val: 0,
//     right: {
//         val: 1,
//         left: null,
//         right: null,
//     },
//     left: null,
// };

var isValidBST = function(root) {
    if (!root)
        return true
    return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)

    function dfs(root, min, max) {
        if (!root)
            return true
        if (root.val <= min || root.val >= max)
            return false
        return dfs(root.left, min, root.val) && dfs(root.right, root.val, max)
    }
};

c(isValidBST(root));
// c(preorderTraversal(root))
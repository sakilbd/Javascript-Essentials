const c = console.log.bind(console);

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var sortedArrayToBST = function(nums) {

    if (nums == null || !nums.length) {
        return null;
    }

    var mid = Math.floor(nums.length / 2);

    var node = new TreeNode(nums[mid]);
    // c(node);
    node.left = sortedArrayToBST(nums.slice(0, mid));
    node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));

    return node;
};

c(sortedArrayToBST([-10, -3, 0, 5, 9]));
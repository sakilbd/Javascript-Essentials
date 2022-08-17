const c = console.log.bind(console);

var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    let array = []
    let treeCount = 1;

    function dfs(root) {
        if (!root) {
            return
        }
        // array.push(root.val)

        if (root.left == null && root.right == null) {

            array.push(treeCount);
            treeCount = 1;
        }
        treeCount++;
        dfs(root.left);
        dfs(root.right)





    }
    dfs(root)
        // return array;
    return (array.sort((a, b) => a - b)[0]);
};

const root = {
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

c(minDepth(root))
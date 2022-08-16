// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

var root = {
    "val": -5,
    "left": {
        "val": -1,
        "left": null,
        "right": null
    },
    "right": {
        "val": 8,
        "left": {
            "val": -6,
            "left": null,
            "right": null
        },
        "right": {
            "val": -9,
            "left": null,
            "right": null
        }
    }
}

const c = console.log.bind(console)
var findTarget = function(root, k) {

    let arr = []

    function createArray(root) {
        if (!root) {
            return
        }
        arr.push(root.val)
        createArray(root.left)
        createArray(root.right)
    }
    createArray(root);
    let sortedArr = arr.sort((a, b) => a - b)
        // c(sortedArr)
    if (sortedArr.length == 1) {
        return false;
    }
    let right = sortedArr.length - 1;
    let left = 0;
    let i = left;
    // while (i < sortedArr.length ) {
    while (left < right) { //didnot understand the logic fuck man :/ 
        // c("shit")
        let addition = sortedArr[left] + sortedArr[right]
        if (addition > k) {
            right--;

        } else if (addition < k) {
            left++;
            // right = sortedArr.length - 1

        } else if (addition == k) {
            return true;
        }
        i++;
    }
    return false;

};


c(findTarget(root, -15))